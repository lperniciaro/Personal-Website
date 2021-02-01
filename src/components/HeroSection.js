
import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/vidoes/video-2.mp4" autoPlay loop muted /> 
            <h1>SAMPLE TEXT</h1>
            <p>SAMPLE TEXT</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>Button 1</Button>
                <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>Button 2<i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;
