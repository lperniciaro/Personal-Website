output "s3_bucket_name" {
  value       = aws_s3_bucket.site.id
  description = "S3 bucket name for site uploads."
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "CloudFront distribution ID for cache invalidations."
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.site.domain_name
  description = "CloudFront domain name (useful for DNS verification)."
}

output "acm_validation_records" {
  value = [
    for dvo in aws_acm_certificate.site.domain_validation_options : {
      domain = dvo.domain_name
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      value  = dvo.resource_record_value
    }
  ]
  description = "Create these DNS records in Cloudflare to validate the ACM cert."
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "Role ARN to use in GitHub Actions OIDC auth."
}

output "lambda_function_url" {
  value       = aws_lambda_function_url.backend.function_url
  description = "Lambda function URL for backend API."
}

output "rum_app_monitor_id" {
  value       = aws_rum_app_monitor.site.id
  description = "CloudWatch RUM App Monitor ID."
}

output "rum_identity_pool_id" {
  value       = aws_cognito_identity_pool.rum.id
  description = "Cognito Identity Pool ID for RUM."
}

output "rum_guest_role_arn" {
  value       = aws_iam_role.rum_unauthenticated.arn
  description = "IAM role ARN for unauthenticated RUM users."
}

