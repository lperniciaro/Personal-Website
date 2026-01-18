variable "aws_region" {
  type        = string
  description = "AWS region for primary resources."
}

variable "domain_name" {
  type        = string
  description = "Primary domain name (apex), e.g. lucianp.com."
}

variable "bucket_name" {
  type        = string
  description = "S3 bucket name for static site assets."
}

variable "github_repo" {
  type        = string
  description = "GitHub repo in owner/name form, e.g. LP/Personal-Website."
}

variable "create_www" {
  type        = bool
  description = "Whether to create www.<domain> alias and cert SAN."
  default     = true
}

variable "github_oidc_thumbprint" {
  type        = string
  description = "Thumbprint for GitHub Actions OIDC provider."
  default     = "6938fd4d98bab03faadb97b34396831e3780aea1"
}
