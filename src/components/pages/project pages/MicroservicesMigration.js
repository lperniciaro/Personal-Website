import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'

export default function MicroservicesMigration() {
    const sectionStyle = {
        marginBottom: '30px'
    };

    const h2Style = {
        color: '#333',
        fontSize: '1.4rem',
        marginTop: '25px',
        marginBottom: '15px',
        paddingBottom: '8px',
        borderBottom: '2px solid #f0f0f0'
    };

    const h3Style = {
        color: '#555',
        fontSize: '1.1rem',
        marginTop: '20px',
        marginBottom: '12px',
        fontWeight: '600'
    };

    const listStyle = {
        lineHeight: '1.9',
        marginLeft: '20px',
        marginTop: '12px',
        marginBottom: '20px'
    };

    const orderedListStyle = {
        ...listStyle,
        paddingLeft: '5px'
    };

    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='about-me'>EC2 to Serverless Microservices: AI-Assisted Cloud Cost Optimization</h1>
                <div>01/18/2026</div>
                
                <h1 className='about-me'>Project Overview</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>Background</h2>
                    <p>
                        My AWS Free tier EC2 expired. Amazon's marketing strategy worked flawlessly. After having my personal website up and running for 12 months,
                        I simply forgot that I would start paying for it. At some point I started to notice the $15/mo charge on my Amazon account, and I realized
                        I needed to act "quickly" to save on cloud costs. By quickly, I mean do nothing and pay $15/mo for 3 months before finally doing something about it.
                    </p>
                    
                    <h2 style={h2Style}>The Goal</h2>
                    <p>
                        Migrate from EC2 t2.micro hosting nginx and flask backend to equivalent AWS microservices to save on cloud costs.
                    </p>
                    <div class="polaroid3">
                        <img src="Pics/Migration_diagram.png" alt="reCAPTCHA technical diagram" className="imgs" />
                        <div class="container">
                            <p>Technical Diagram</p>
                        </div>
                    </div>
                    <h2 style={h2Style}></h2>
                    <p>
                        I didn't want to do any of this, so I decided to put the latest Claude Sonnet 4.5 model to the test via 
                        agentic coding on Cursor IDE. Below I describe the process of using AI. These days I believe AI gets a lot 
                        of flack for "AI Slop" (which to be fair, there is a lot of slop out there to be found), however when used 
                        as a proper tool for development, it's capability to rapidly accelerate development is genuinely insane to me. 
                        Sure I could spend days learning how to set all this up in AWS myself, but to me that's wasted effort. I know 
                        how microservices work, but setting them up takes time. I just want to save on cloud costs ASAP. AI helped me get there 
                        in just 3 hours.
                    </p>

                    <h2 style={h2Style}>Target Architecture</h2>
                    <ul style={listStyle}>
                        <li><strong>Frontend:</strong> React SPA hosted on S3 + CloudFront CDN</li>
                        <li><strong>Backend:</strong> Python Lambda functions with Function URLs</li>
                        <li><strong>Storage:</strong> S3 with presigned URLs for secure document access</li>
                        <li><strong>DNS:</strong> Managed via Cloudflare</li>
                        <li><strong>IaC:</strong> Terraform for reproducible infrastructure</li>
                        <li><strong>CI/CD:</strong> GitHub Actions with OIDC authentication</li>
                    </ul>

                    <h2 style={h2Style}>Cost Comparison</h2>
                    <table style={{width: '100%', marginTop: '20px', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr style={{borderBottom: '2px solid #ddd'}}>
                                <th style={{textAlign: 'left', padding: '10px'}}>Service</th>
                                <th style={{textAlign: 'right', padding: '10px'}}>Old (EC2)</th>
                                <th style={{textAlign: 'right', padding: '10px'}}>New (Serverless)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom: '1px solid #ddd'}}>
                                <td style={{padding: '10px'}}>Compute</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$15.00/mo</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$0.20/mo</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #ddd'}}>
                                <td style={{padding: '10px'}}>Storage</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>Included</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$0.02/mo</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #ddd'}}>
                                <td style={{padding: '10px'}}>CDN/Bandwidth</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>Included</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$1.00/mo</td>
                            </tr>
                            <tr style={{borderBottom: '2px solid #ddd', fontWeight: 'bold'}}>
                                <td style={{padding: '10px'}}>Total</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$15.00/mo</td>
                                <td style={{textAlign: 'right', padding: '10px'}}>$1.22/mo</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginTop: '10px', fontStyle: 'italic'}}>
                        <strong>Result: 92% cost reduction ($180/year → $14.64/year)</strong>
                    </p>
                </div>

                <h1 className='about-me'>The AI-Assisted Development Process</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>Why AI-Assisted Development?</h2>
                    <p>
                        Traditional cloud migrations require extensive research, documentation reading, and trial-and-error. 
                        Using Claude (Anthropic's AI assistant) with agentic coding capabilities, I accelerated the migration 
                        from weeks to <strong>under 3 hours</strong>.
                    </p>

                    <h2 style={h2Style}>Project Timeline</h2>
                    <div style={{marginLeft: '20px', marginTop: '15px'}}>
                        <p><strong>Start:</strong> January 18, 2026 - Initial consultation</p>
                        <p><strong>Phase 1 Complete:</strong> ~90 minutes - Infrastructure provisioned</p>
                        <p><strong>Phase 2 Complete:</strong> ~60 minutes - Backend migrated to Lambda</p>
                        <p><strong>Phase 3 Complete:</strong> ~45 minutes - reCAPTCHA integration debugging</p>
                        <p><strong>Total Time:</strong> <strong>~3 hours</strong> for complete migration</p>
                    </div>

                    <h2 style={h2Style}>Key AI Contributions</h2>
                    <ol style={orderedListStyle}>
                        <li><strong>Instant Architecture Recommendations:</strong> AI analyzed requirements and proposed optimal architecture</li>
                        <li><strong>Terraform Code Generation:</strong> Created production-ready IaC in minutes</li>
                        <li><strong>Real-time Debugging:</strong> Identified and fixed issues as they occurred</li>
                        <li><strong>Best Practices:</strong> Implemented security (OIDC, presigned URLs) without manual research</li>
                        <li><strong>Context Retention:</strong> Remembered project details across the entire session</li>
                    </ol>
                </div>

                <h1 className='about-me'>Code Snippets: AI in Action</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>Example 1: Instant Terraform Infrastructure</h2>
                    <p><strong>Initial Prompt:</strong> "I need you to modify the deployment of my personal website. It is currently using 
                    a t2.micro amazon linux server running nginx to host the website. I want to migrate to microservices that could be 
                    cheaper than a t2.micro ~$15/mo cost. What are my options?"</p>
                    <p><strong>AI Response:</strong> Recommended S3 + CloudFront + Lambda as cheapest serverless option (~$1-2/month)</p>
                    <p><strong>Follow-up:</strong> "Yeah I have my custom domain, lucianp.com... OR BETTER YET, use something like 
                    terraform to deploy the infra, let me know any steps if needed to ensure proper authentication with the github actions."</p>
                    <p><strong>Result:</strong> AI generated 300+ lines of production-ready Terraform code in ~30 seconds, including:</p>
                    <pre style={{background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto'}}>
{`# S3 Bucket with security policies
resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
}

# CloudFront with OAC (not legacy OAI)
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "\${var.domain_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# GitHub OIDC for keyless deployments
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [var.github_oidc_thumbprint]
}`}
                    </pre>

                    <h2 style={h2Style}>Example 2: Lambda Migration for Backend</h2>
                    <p><strong>Challenge:</strong> Flask session-based auth won't work in Lambda</p>
                    <p><strong>AI Solution:</strong> Refactored to use HMAC-signed tokens instead</p>
                    <pre style={{background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto'}}>
{`def generate_signed_token(expiry_minutes=5):
    """Generate a time-limited signed token."""
    expiry_time = int(time.time()) + (expiry_minutes * 60)
    message = f"resume-download:{expiry_time}"
    signature = hmac.new(
        SECRET_KEY.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()
    return f"{expiry_time}:{signature}"`}
                    </pre>

                    <h2 style={h2Style}>Example 3: Real-time Problem Solving</h2>
                    <p><strong>Issue:</strong> Lambda function name contained dots (invalid)</p>
                    <p><strong>Human:</strong> "Error: invalid value for function_name"</p>
                    <p><strong>AI Response:</strong> "The error is because Lambda function names cannot contain dots. 
                    Your domain is lucianp.com which has a dot..."</p>
                    <p><strong>Fix Applied:</strong> Used Terraform's replace() function automatically</p>
                    <pre style={{background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto'}}>
{`function_name = replace("\${var.domain_name}-backend", ".", "-")
# Result: lucianp-com-backend`}
                    </pre>
                </div>

                <h1 className='about-me'>The reCAPTCHA Integration Challenge</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>Post-Migration Debugging (45 minutes)</h2>
                    <p>
                        While the infrastructure migration was smooth, integrating the existing reCAPTCHA authentication 
                        required debugging several issues. This section demonstrates how AI excels at troubleshooting.
                    </p>

                    <h3 style={h3Style}>Issue 1: CORS Duplicate Headers (15 min)</h3>
                    <p><strong>Error:</strong> "Access-Control-Allow-Origin header contains multiple values"</p>
                    <p><strong>Root Cause:</strong> Lambda Function URLs add CORS automatically, but Lambda handler was also adding headers</p>
                    <p><strong>AI Diagnosis:</strong> Identified duplicate header source immediately from error message</p>
                    <p><strong>Solution:</strong> Removed manual CORS headers from Lambda code, kept Terraform Function URL config</p>
                    
                    <h3 style={h3Style}>Issue 2: Missing Environment Variables (10 min)</h3>
                    <p><strong>Error:</strong> "Unexpected token '&lt;', &lt;!doctype ... is not valid JSON"</p>
                    <p><strong>Root Cause:</strong> React app env vars not set during build, causing undefined API endpoint</p>
                    <p><strong>AI Solution:</strong> Added env vars to GitHub Actions build step</p>
                    <pre style={{background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto'}}>
{`- name: Compile build (Frontend)
  env:
    REACT_APP_LAMBDA_URL: \${{ secrets.REACT_APP_LAMBDA_URL }}
    REACT_APP_RECAPTCHA_SITE_KEY: \${{ secrets.REACT_APP_RECAPTCHA_SITE_KEY }}
  run: npm run build`}
                    </pre>

                    <h3 style={h3Style}>Issue 3: S3 Permissions (10 min)</h3>
                    <p><strong>Error:</strong> "User is not authorized to perform: s3:ListBucket"</p>
                    <p><strong>AI Response:</strong> "The Lambda function needs s3:ListBucket permission. Let me add that..."</p>
                    <p><strong>Resolution:</strong> AI updated Terraform policy in real-time</p>
                    
                    <h3 style={h3Style}>Issue 4: Invalid Site Key (10 min)</h3>
                    <p><strong>Error:</strong> "Invalid site key or not loaded"</p>
                    <p><strong>AI Guidance:</strong> Provided step-by-step Google Cloud Console navigation to verify correct key</p>
                </div>

                <h1 className='about-me'>Technical Challenges & Solutions</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>Challenge 1: Session Management in Lambda</h2>
                    <p>
                        <strong>Problem:</strong> Flask sessions use filesystem storage, incompatible with stateless Lambda.
                    </p>
                    <p>
                        <strong>Solution:</strong> Implemented HMAC-signed tokens with expiration timestamps. After reCAPTCHA 
                        verification, Lambda generates a token valid for 5 minutes. Resume download validates token signature.
                    </p>

                    <h2 style={h2Style}>Challenge 2: Secrets Management</h2>
                    <p>
                        <strong>Problem:</strong> How to keep API keys out of git while using Terraform?
                    </p>
                    <p>
                        <strong>Solution:</strong> AI suggested splitting tfvars into public (terraform.tfvars) and private 
                        (secrets.auto.tfvars) files, with .gitignore protecting secrets.
                    </p>

                    <h2 style={h2Style}>Challenge 3: Git History Cleanup</h2>
                    <p>
                        <strong>Problem:</strong> Accidentally committed 787MB Terraform provider binary, GitHub rejected push.
                    </p>
                    <p>
                        <strong>Solution:</strong> AI walked through git reset, proper .gitignore configuration, and 
                        re-committing only necessary files.
                    </p>

                    <h2 style={h2Style}>Challenge 4: .well-known Path Support</h2>
                    <p>
                        <strong>Problem:</strong> React's client-side routing intercepted /.well-known/* paths needed for 
                        Tesla API integration.
                    </p>
                    <p>
                        <strong>Solution:</strong> Added CloudFront ordered cache behavior to serve .well-known/* directly 
                        from S3, bypassing React's index.html redirect.
                    </p>
                </div>

                <h1 className='about-me'>Key Takeaways</h1>
                <div className='smallcard'>
                    <h2 style={h2Style}>The Power of AI-Assisted Development</h2>
                    <ul style={listStyle}>
                        <li><strong>Speed:</strong> 3 hours vs. estimated 2-3 days for manual implementation</li>
                        <li><strong>Quality:</strong> Production-ready code following AWS best practices</li>
                        <li><strong>Learning:</strong> Learned Terraform, Lambda, and CloudFront configuration through doing</li>
                        <li><strong>Problem Solving:</strong> Real-time debugging with context-aware solutions</li>
                        <li><strong>Documentation:</strong> AI explained every decision and alternative approach</li>
                    </ul>

                    <h2 style={h2Style}>Cost Savings</h2>
                    <ul style={listStyle}>
                        <li>Monthly: $15.00 → $1.22 (92% reduction)</li>
                        <li>Annual: $180 → $14.64 ($165.36 saved)</li>
                        <li>Development time saved: ~16 hours ($800-2000 value at typical developer rates)</li>
                    </ul>

                    <h2 style={h2Style}>Technical Improvements</h2>
                    <ul style={listStyle}>
                        <li><strong>Scalability:</strong> Automatic scaling with Lambda concurrency limits</li>
                        <li><strong>Performance:</strong> Global CDN edge caching with CloudFront</li>
                        <li><strong>Security:</strong> No static credentials (OIDC), presigned URLs, minimal IAM permissions</li>
                        <li><strong>Reliability:</strong> AWS managed services with 99.9%+ uptime SLAs</li>
                        <li><strong>Maintainability:</strong> Infrastructure as Code, automated deployments</li>
                    </ul>
                </div>

                <h1 className='about-me'>Conclusion</h1>
                <div className='smallcard'>
                    <p>
                        I was able to save $14/mo hosting my personal website, will full CI/CD infra automation, all in under 3 hours.
                        I don't know how you could look at a project like this and not see the value in AI. I used to be an AI hater my self,
                         especially in the pre GPT days. I thought it was just a buzzword of annoying garbage that was never really useful
                         for anything. These days, I believe many are still on this hate bandwagon. Partially because they have spent
                         their time learning things the hard way, and believe those making work with AI are simply lazy (which, hey that is
                         partially true in this case). I believe some have tried using AI, but have not used prompts sufficient enough to accomplish their goals.
                    </p>
                    <p>
                        I included some of my prompts as demonstration as to how AI can be used in a productive manner. I hope someone can benefit 
                        from this. If I can change just one persons mind about the usability about AI, I will be happy. (though lets be honest, if 
                        you're reading this far, who are you? does anyone even come to this website?)
                    </p>
                    <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                        <strong>Final Infrastructure:</strong> S3 + CloudFront + Lambda + Terraform + GitHub Actions
                    </p>
                    <p style={{fontStyle: 'italic'}}>
                        <strong>Development Time:</strong> 3 hours (vs. estimated 2-3 days manual)
                    </p>
                    <p style={{fontStyle: 'italic'}}>
                        <strong>Cost Savings:</strong> 92% reduction ($165.36/year)
                    </p>
                </div>
            </div>
        </div>
    )
}
