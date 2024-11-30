import requests
from flask import Flask, request, jsonify, send_file, session
from flask_cors import CORS
import os
from dotenv import load_dotenv
from flask_session import Session
import secrets

app = Flask(__name__)

# Load environment variables
load_dotenv(dotenv_path=r"C:\Users\LP\Documents\Repos\Personal-Website\backend\.env")
API_KEY = os.getenv("RECAPTCHA_API_KEY")
PROJECT_ID = os.getenv("RECAPTCHA_PROJECT_ID")
SITE_KEY = os.getenv("RECAPTCHA_SITE_KEY")
FLASK_PORT = os.getenv("FLASK_PORT")
RESUME_PATH = os.getenv("RESUME_PATH")  # Path to the resume file

# Configure Flask session
app.config['SECRET_KEY'] = secrets.token_hex(32)
app.config['SESSION_TYPE'] = 'filesystem'
app.config.from_object(__name__)
# Dynamically generate a secret key for development
Session(app)

# CORS configuration
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])
CORS(app, supports_credentials=True, origins=["http://lucianp.com:443"])

def verify_recaptcha(token, user_action):
    """Send a reCAPTCHA Enterprise assessment request to Google."""
    url = f"https://recaptchaenterprise.googleapis.com/v1/projects/{PROJECT_ID}/assessments?key={API_KEY}"

    # Request payload to Google reCAPTCHA Enterprise
    payload = {
        "event": {
            "token": token,
            "expectedAction": user_action,
            "siteKey": SITE_KEY
        }
    }

    headers = {
        'Content-Type': 'application/json'
    }

    # Make the request to Google API
    response = requests.post(url, headers=headers, json=payload)

    # Handle the response
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": response.json(), "status_code": response.status_code}

@app.route('/verify-recaptcha', methods=['POST'])
def verify():
    """API endpoint to handle reCAPTCHA verification."""
    session['test'] = 'sneads'
    session['verified'] = 'NOPE'
    data = request.json
    token = data.get("token")
    user_action = data.get("user_action")

    if not token or not user_action:
        return jsonify({"success": False, "message": "Missing token or user action"}), 400

    # Call the reCAPTCHA verification function
    verification_result = verify_recaptcha(token, user_action)

    if "error" in verification_result:
        return jsonify({"success": False, "error": verification_result["error"]}), verification_result["status_code"]
    
    score = verification_result.get("riskAnalysis", {}).get("score", 0)
    action_match = verification_result.get("event", {}).get("expectedAction") == user_action

    if score >= 0.5 and action_match:
        # Store verification status in the session
        session['verified'] = True
        return jsonify({"success": True, "data": verification_result}), 200
    else:
        return jsonify({"success": False, "message": "Verification failed or low score", "score": score}), 403

@app.route('/download-resume', methods=['GET'])
def download_resume():
    """API endpoint to send the resume file."""
    test = session.get('verified')
    test2 = session.get('test')
    # Check if the user has been verified
    if not session.get('verified'):
        return jsonify({"success": False, "message": "Unauthorized access. Please complete CAPTCHA first."}), 403

    try:
        # Clear verification status after sending the file
        session.pop('verified', None)
        return send_file(
            RESUME_PATH,
            mimetype='application/pdf',
            as_attachment=False,  # Ensure the file is displayed inline
            download_name='ResumeLucianPerniciaro.pdf',  # Optional for browsers that support it
        )
    except FileNotFoundError:
        return jsonify({"success": False, "message": "Resume file not found"}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=FLASK_PORT)
