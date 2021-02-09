
import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Lucian Perniciaro</h1>
            <p>Texas A&M University</p>
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
