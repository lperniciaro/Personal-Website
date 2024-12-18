
import React from 'react';
import { Button } from './Button';
import { Button2 } from './Button';
import { Button3 } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='profile-picture-container'>
                <img 
                    src="Pics/Lucian Headshot Zoom.png" 
                    alt="Profile" 
                    className='profile-picture'
                />
            </div>
            <h1>Lucian Perniciaro IV</h1>
            <p>San Diego, CA</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>Resume</Button>
                <Button2 className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>Project Portfolio</Button2>
                {/* LinkedIn Button */}
                <Button3 className='btns' buttonStyle='btn--linkedin' 
                buttonSize='btn--large'>
                    <i className="fab fa-linkedin" style={{ marginRight: '8px' }}></i>
                    LinkedIn
                </Button3>
            </div>
        </div>
    )
}


export default HeroSection;
