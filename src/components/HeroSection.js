
import React from 'react';
import { Button } from './Button';
import { Button2 } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Lucian Perniciaro IV</h1>
            <p>Texas A&M University</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>Resume</Button>
                <Button2 className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>Project Portfolio</Button2>
            </div>
        </div>
    )
}

export default HeroSection;
