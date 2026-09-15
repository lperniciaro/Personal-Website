aws_region   = "us-west-2"
domain_name  = "lucianp.com"
bucket_name  = "lucianp.com-site"
github_repo  = "lperniciaro/Personal-Website"
create_www   = true

# Extra repos allowed to assume the GitHub Actions OIDC role.
# The Resume repo compiles ResumeCali.tex and uploads the PDF to the site bucket.
additional_github_repos = ["lperniciaro/Resume"]
