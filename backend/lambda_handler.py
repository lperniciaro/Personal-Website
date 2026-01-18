import json
import os
import requests
import hmac
import hashlib
import time
import boto3
from botocore.exceptions import ClientError

# Environment variables (set in Lambda config)
API_KEY = os.environ.get("RECAPTCHA_API_KEY")
PROJECT_ID = os.environ.get("RECAPTCHA_PROJECT_ID")
SITE_KEY = os.environ.get("RECAPTCHA_SITE_KEY")
RESUME_S3_BUCKET = os.environ.get("RESUME_S3_BUCKET")
RESUME_S3_KEY = os.environ.get("RESUME_S3_KEY")
SECRET_KEY = os.environ.get("SECRET_KEY")

s3_client = boto3.client('s3')

def verify_recaptcha(token, user_action):
    """Send a reCAPTCHA Enterprise assessment request to Google."""
    url = f"https://recaptchaenterprise.googleapis.com/v1/projects/{PROJECT_ID}/assessments?key={API_KEY}"
    
    payload = {
        "event": {
            "token": token,
            "expectedAction": user_action,
            "siteKey": SITE_KEY
        }
    }
    
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": response.json(), "status_code": response.status_code}

def generate_signed_token(expiry_minutes=5):
    """Generate a time-limited signed token."""
    expiry_time = int(time.time()) + (expiry_minutes * 60)
    message = f"resume-download:{expiry_time}"
    signature = hmac.new(
        SECRET_KEY.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()
    return f"{expiry_time}:{signature}"

def verify_signed_token(token):
    """Verify a signed token and check if it's expired."""
    try:
        expiry_time, signature = token.split(":", 1)
        expiry_time = int(expiry_time)
        
        # Check if expired
        if time.time() > expiry_time:
            return False
        
        # Verify signature
        message = f"resume-download:{expiry_time}"
        expected_signature = hmac.new(
            SECRET_KEY.encode(),
            message.encode(),
            hashlib.sha256
        ).hexdigest()
        
        return hmac.compare_digest(signature, expected_signature)
    except:
        return False

def cors_headers():
    """Return CORS headers."""
    return {
        'Access-Control-Allow-Origin': os.environ.get('ALLOWED_ORIGIN', 'https://lucianp.com'),
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    }

def lambda_handler(event, context):
    """Main Lambda handler with routing."""
    
    # Handle OPTIONS preflight
    if event.get('requestContext', {}).get('http', {}).get('method') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers(),
            'body': ''
        }
    
    # Get the path
    path = event.get('rawPath', '/')
    method = event.get('requestContext', {}).get('http', {}).get('method', 'GET')
    
    # Route: POST /verify-recaptcha
    if path == '/verify-recaptcha' and method == 'POST':
        try:
            body = json.loads(event.get('body', '{}'))
            token = body.get('token')
            user_action = body.get('user_action')
            
            if not token or not user_action:
                return {
                    'statusCode': 400,
                    'headers': cors_headers(),
                    'body': json.dumps({'success': False, 'message': 'Missing token or user action'})
                }
            
            # Verify reCAPTCHA
            verification_result = verify_recaptcha(token, user_action)
            
            if "error" in verification_result:
                return {
                    'statusCode': verification_result.get('status_code', 500),
                    'headers': cors_headers(),
                    'body': json.dumps({'success': False, 'error': verification_result['error']})
                }
            
            score = verification_result.get("riskAnalysis", {}).get("score", 0)
            action_match = verification_result.get("tokenProperties", {}).get("action") == user_action
            
            if score >= 0.5 and action_match:
                # Generate signed token
                download_token = generate_signed_token(expiry_minutes=5)
                
                return {
                    'statusCode': 200,
                    'headers': cors_headers(),
                    'body': json.dumps({
                        'success': True,
                        'downloadToken': download_token,
                        'data': verification_result
                    })
                }
            else:
                return {
                    'statusCode': 403,
                    'headers': cors_headers(),
                    'body': json.dumps({
                        'success': False,
                        'message': 'Verification failed or low score',
                        'score': score
                    })
                }
        
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': cors_headers(),
                'body': json.dumps({'success': False, 'message': str(e)})
            }
    
    # Route: GET /download-resume?token=...
    elif path == '/download-resume' and method == 'GET':
        try:
            # Get token from query string
            query_params = event.get('queryStringParameters', {}) or {}
            token = query_params.get('token')
            
            if not token or not verify_signed_token(token):
                return {
                    'statusCode': 403,
                    'headers': cors_headers(),
                    'body': json.dumps({
                        'success': False,
                        'message': 'Unauthorized access. Invalid or expired token.'
                    })
                }
            
            # Generate presigned URL for S3 resume
            try:
                presigned_url = s3_client.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': RESUME_S3_BUCKET,
                        'Key': RESUME_S3_KEY,
                        'ResponseContentType': 'application/pdf',
                        'ResponseContentDisposition': 'inline; filename="ResumeLucianPerniciaro.pdf"'
                    },
                    ExpiresIn=300  # 5 minutes
                )
                
                # Return redirect to presigned URL
                return {
                    'statusCode': 302,
                    'headers': {
                        **cors_headers(),
                        'Location': presigned_url
                    },
                    'body': ''
                }
            except ClientError as e:
                return {
                    'statusCode': 500,
                    'headers': cors_headers(),
                    'body': json.dumps({
                        'success': False,
                        'message': f'Failed to generate download link: {str(e)}'
                    })
                }
        
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': cors_headers(),
                'body': json.dumps({'success': False, 'message': str(e)})
            }
    
    # Default: 404
    return {
        'statusCode': 404,
        'headers': cors_headers(),
        'body': json.dumps({'success': False, 'message': 'Not found'})
    }
