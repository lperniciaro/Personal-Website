import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'

export default function RecaptchaProject() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='about-me'>Google reCaptcha v3 Resume Authentication</h1>
                <div>11/30/2024</div>
                <h1 className='about-me'>Summary</h1>
                <div className='smallcard'>I wanted to have my personal information on my resume protected from web scrapers and bots using
                    my personal infromation to spam me. I decided to use Google reCaptcha v3 to protect my resume. This required me to set up a backend
                    for my previously static website. I chose Python Flask / Gunicorn with Nginx proxy to accomplish this task securely. When attempting to access the resume,
                    first a token is generated, which is sent to the backend to validate on Google's servers. Google returns a trust score from 0-1, and if the score is below 50%,
                    the request is blocked. This should provide a nice layer of security for my personal information.

                    <div class="polaroid3">
                        <img src="Pics/recaptcha_diagram.png" alt="reCAPTCHA technical diagram" className="imgs" />
                        <div class="container">
                            <p>Technical Diagram</p>
                        </div>
                    </div>
                </div>
                <div className='smallcard'>Update Jan 2026: I have since migrated the server to serverless shown in my latest project post. 
                    The diagram above is deprecated as the backend is now served via Lambda functions.

                </div>
                
            </div>
        </div>
    )
}