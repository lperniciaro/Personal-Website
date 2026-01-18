# Lambda Backend Migration

This directory contains the AWS Lambda function that replaces the Flask backend.

## What it does

- **POST /verify-recaptcha**: Verifies reCAPTCHA tokens via Google reCAPTCHA Enterprise API
- **GET /download-resume**: Returns a presigned S3 URL for the resume PDF (requires valid token)

## Local Development

### Package the Lambda function

**On Windows:**
```bash
cd backend
package_lambda.bat
```

**On Linux/Mac:**
```bash
cd backend
chmod +x package_lambda.sh
./package_lambda.sh
```

This creates `lambda_package/` with all dependencies.

## Deployment

### 1. Set Terraform variables

Create or update `terraform/terraform.tfvars`:

```hcl
# ... existing vars ...

recaptcha_api_key    = "your-google-api-key"
recaptcha_project_id = "your-gcp-project-id"
recaptcha_site_key   = "your-recaptcha-site-key"
lambda_secret_key    = "generate-a-random-32-char-string"
```

**Generate a random secret key:**
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### 2. Package Lambda locally

```bash
cd backend
# Windows:
package_lambda.bat
# Linux/Mac:
./package_lambda.sh
```

### 3. Apply Terraform

```bash
cd terraform
terraform init
terraform apply
```

Terraform will:
- Create S3 bucket for resume
- Upload resume PDF to S3
- Create Lambda function
- Create Lambda function URL
- Set up IAM roles

### 4. Get Lambda URL

```bash
terraform output lambda_function_url
```

### 5. Set environment variables

Create a `.env.local` file in the project root:

```
REACT_APP_LAMBDA_URL=<your-lambda-function-url>
REACT_APP_RECAPTCHA_SITE_KEY=<your-recaptcha-site-key>
```

### 6. Update GitHub Secrets

Add this secret:
- `LAMBDA_FUNCTION_NAME`: Get from `terraform output` or use `<domain>-backend`

### 7. Deploy

Push to main branch — GitHub Actions will deploy both frontend and Lambda.

## Cost Estimate

For a low-traffic personal site:
- **Lambda**: $0.20/month for 1M requests @ 1GB memory, 1s duration
- **S3 (resume bucket)**: ~$0.01/month
- **Total Lambda cost**: ~$0.21/month (vs $15/month EC2)

**Way cheaper than t2.micro!**

## Architecture

```
User → CloudFront/lucianp.com
         ├─> S3 (static site)
         └─> Lambda Function URL
               ├─> reCAPTCHA Enterprise API (verify)
               └─> S3 (resume PDF via presigned URL)
```

## Notes

- No sessions needed (uses signed tokens with HMAC)
- Resume is private in S3, accessed via presigned URLs
- CORS configured for your domain only
- Tokens expire after 5 minutes
