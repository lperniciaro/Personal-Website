provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

locals {
  www_domain = "www.${var.domain_name}"
}

data "aws_caller_identity" "current" {}

# Upload resume to private folder in site bucket
resource "aws_s3_object" "resume_pdf" {
  bucket       = aws_s3_bucket.site.id
  key          = "private/ResumeLucianPerniciaro.pdf"
  source       = "${path.module}/../assets/ResumeLucianPerniciaro.pdf"
  content_type = "application/pdf"
  etag         = filemd5("${path.module}/../assets/ResumeLucianPerniciaro.pdf")
}

resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${var.domain_name}-oac"
  description                       = "OAC for ${var.domain_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_acm_certificate" "site" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = var.create_www ? [local.www_domain] : []
}

resource "aws_acm_certificate_validation" "site" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [
    for dvo in aws_acm_certificate.site.domain_validation_options :
    dvo.resource_record_name
  ]
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  default_root_object = "index.html"

  aliases = var.create_www ? [var.domain_name, local.www_domain] : [var.domain_name]

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-${aws_s3_bucket.site.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  # Special behavior for .well-known paths (serve directly, no React routing)
  ordered_cache_behavior {
    path_pattern           = ".well-known/*"
    target_origin_id       = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000
  }

  default_cache_behavior {
    target_origin_id       = "s3-${aws_s3_bucket.site.id}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

data "aws_iam_policy_document" "s3_cloudfront_read" {
  statement {
    sid     = "AllowCloudFrontRead"
    effect  = "Allow"
    actions = ["s3:GetObject"]
    resources = [
      "${aws_s3_bucket.site.arn}/*"
    ]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.site.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.s3_cloudfront_read.json
}


resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [var.github_oidc_thumbprint]
}

data "aws_iam_policy_document" "github_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_repo}:*"]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name               = "${var.domain_name}-github-actions"
  assume_role_policy = data.aws_iam_policy_document.github_assume_role.json
}

data "aws_iam_policy_document" "github_actions_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket"
    ]
    resources = [aws_s3_bucket.site.arn]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:PutObject",
      "s3:PutObjectAcl"
    ]
    resources = ["${aws_s3_bucket.site.arn}/*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "cloudfront:CreateInvalidation"
    ]
    resources = [aws_cloudfront_distribution.site.arn]
  }

  statement {
    effect = "Allow"
    actions = [
      "lambda:UpdateFunctionCode"
    ]
    resources = [aws_lambda_function.backend.arn]
  }
}

resource "aws_iam_role_policy" "github_actions" {
  role   = aws_iam_role.github_actions.id
  policy = data.aws_iam_policy_document.github_actions_policy.json
}

# Lambda function for backend
resource "aws_iam_role" "lambda_backend" {
  name = replace("${var.domain_name}-lambda-backend", ".", "-")

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  role       = aws_iam_role.lambda_backend.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "lambda_s3_resume" {
  name = "lambda-s3-resume-access"
  role = aws_iam_role.lambda_backend.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject"
        ]
        Resource = "${aws_s3_bucket.site.arn}/private/*"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:ListBucket"
        ]
        Resource = aws_s3_bucket.site.arn
        Condition = {
          StringLike = {
            "s3:prefix" = ["private/*"]
          }
        }
      }
    ]
  })
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../backend/lambda_package"
  output_path = "${path.module}/../backend/lambda_function.zip"
}

resource "aws_lambda_function" "backend" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = replace("${var.domain_name}-backend", ".", "-")
  role            = aws_iam_role.lambda_backend.arn
  handler         = "lambda_handler.lambda_handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime         = "python3.11"
  timeout         = 30

  environment {
    variables = {
      RECAPTCHA_API_KEY    = var.recaptcha_api_key
      RECAPTCHA_PROJECT_ID = var.recaptcha_project_id
      RECAPTCHA_SITE_KEY   = var.recaptcha_site_key
      SECRET_KEY           = var.lambda_secret_key
      RESUME_S3_BUCKET     = aws_s3_bucket.site.id
      RESUME_S3_KEY        = aws_s3_object.resume_pdf.key
      ALLOWED_ORIGIN       = "https://${var.domain_name}"
    }
  }
}

resource "aws_lambda_function_url" "backend" {
  function_name      = aws_lambda_function.backend.function_name
  authorization_type = "NONE"

  cors {
    allow_origins     = ["https://${var.domain_name}", "https://www.${var.domain_name}"]
    allow_methods     = ["GET", "POST"]
    allow_headers     = ["content-type"]
    max_age          = 86400
  }
}

# CloudWatch RUM App Monitor
resource "aws_rum_app_monitor" "site" {
  name   = replace(var.domain_name, ".", "-")
  domain = var.domain_name

  app_monitor_configuration {
    allow_cookies      = true
    enable_xray        = false
    session_sample_rate = 1.0  # 100% of sessions (we'll stay under free tier)
    
    telemetries = [
      "errors",
      "performance",
      "http"
    ]
  }

  cw_log_enabled = true
}

# Identity pool for RUM (allows website to send data to CloudWatch)
resource "aws_cognito_identity_pool" "rum" {
  identity_pool_name               = replace("${var.domain_name}-rum", ".", "-")
  allow_unauthenticated_identities = true
}

# IAM role for unauthenticated RUM users
resource "aws_iam_role" "rum_unauthenticated" {
  name = replace("${var.domain_name}-rum-unauth", ".", "-")

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Federated = "cognito-identity.amazonaws.com"
      }
      Action = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "cognito-identity.amazonaws.com:aud" = aws_cognito_identity_pool.rum.id
        }
        "ForAnyValue:StringLike" = {
          "cognito-identity.amazonaws.com:amr" = "unauthenticated"
        }
      }
    }]
  })
}

# Policy allowing RUM data submission
resource "aws_iam_role_policy" "rum_put_events" {
  name = "rum-put-events"
  role = aws_iam_role.rum_unauthenticated.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "rum:PutRumEvents"
      ]
      Resource = aws_rum_app_monitor.site.arn
    }]
  })
}

# Attach role to identity pool
resource "aws_cognito_identity_pool_roles_attachment" "rum" {
  identity_pool_id = aws_cognito_identity_pool.rum.id

  roles = {
    unauthenticated = aws_iam_role.rum_unauthenticated.arn
  }
}

