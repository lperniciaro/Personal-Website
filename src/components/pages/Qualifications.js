import React, { useState, useEffect } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import '../../App.css';

const ResumeAccess = ({ setVerified }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [error, setError] = useState('');

    useEffect(() => {
        const verifyCaptcha = async () => {
            if (!executeRecaptcha) {
                setError('Auto reCAPTCHA v3 loading...');
                return;
            }

            try {
                // Execute the reCAPTCHA with the action 'view_resume'
                const token = await executeRecaptcha('view_resume');
                // Send the token to the backend for verification
                const response = await fetch(`${process.env.REACT_APP_RECAPTCHA_URL}/verify-recaptcha`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token, user_action: 'view_resume' }),
                    credentials: 'include',
                });

                const data = await response.json();

                if (data.success) {
                    setVerified(true); // Allow access to the resume
                    console.log('CAPTCHA verification successful');
                } else {
                    const invalidReason = (data && data.tokenProperties && data.tokenProperties.invalidReason) || "No invalid reason specified";
                    setError('CAPTCHA verification failed. Please refresh the page and try again. Reason: ' + invalidReason);
                }
                console.log(data);
            } catch (err) {
                console.error('Error verifying CAPTCHA:', err);
                setError('An error occurred. Please try again later.');
            }
        };

        verifyCaptcha(); // Automatically run CAPTCHA verification when the component mounts
    }, [executeRecaptcha, setVerified]);

    return (
        <div>
            <p>Please wait while we verify your access...</p>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default function Qualifications() {
    const [verified, setVerified] = useState(false); // State to track if CAPTCHA is verified
    const [error, setError] = useState('');

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use environment variable for the site key
        >
            <div className="container">
                <div>
                    <h1 className="qualificationsmod">QUALIFICATIONS</h1>
                </div>
                {!verified ? (
                    <ResumeAccess setVerified={setVerified} />
                ) : (
                    <>
                        <iframe
                            className="pdf"
                            src={`${process.env.REACT_APP_RECAPTCHA_URL}/download-resume`}
                            title="Resume"
                            onError={() => setError('Failed to load resume. Please try again later.')}
                        ></iframe>
                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}
                    </>
                )}
            </div>
        </GoogleReCaptchaProvider>
    );
}
