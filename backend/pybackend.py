import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Replace with your actual project details
load_dotenv(dotenv_path="./.env")
API_KEY = os.getenv("RECAPTCHA_API_KEY")
PROJECT_ID = os.getenv("RECAPTCHA_PROJECT_ID")
SITE_KEY = os.getenv("RECAPTCHA_SITE_KEY")
FLASK_PORT = os.getenv("FLASK_PORT")


CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/*": {"origins": "http://lucianp.com:443"}})

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
    # Extract `token` and `user_action` from the incoming client request
    data = request.json
    token = data.get("token")
    user_action = data.get("user_action")

    if not token or not user_action:
        return jsonify({"success": False, "message": "Missing token or user action"}), 400

    # Call the reCAPTCHA verification function
    verification_result = verify_recaptcha(token, user_action)

    # If there's an error, return it to the client
    if "error" in verification_result:
        return jsonify({"success": False, "error": verification_result["error"]}), verification_result["status_code"]
    
    score = verification_result.get("riskAnalysis", {}).get("score", 0)
    action_match = verification_result.get("event", {}).get("expectedAction") == user_action

    if score >= 0.5 and action_match:
        print(verification_result)
        return jsonify({"success": True, "data": verification_result}), 200
    else:
        print(f"Failed because of low score or action mismatch {score}, {action_match}")
        print(verification_result)
        return jsonify({"success": False, "message": "Verification failed or low score"}), 403
    

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=FLASK_PORT)