import React from 'react'
import '../../../App.css'

export default function SmartHome(){
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>Model Smart Home</h1>
                <p1 className='paragraph'>
                    The model smart home was a project for my highschool physics class. The home as multiple rooms
                    with individual lighting, attached to an arduino with a bluetooth controller module.
                    I developed an android app that would connect to the arduino and switch the LEDs to my choosing.
                    I did not document this project very well at the time, but I have
                    a photo of the early construction, and a screenshot of the app that I developed.
                    <img src="SmartHouse1.png" alt="Smart House" className="imgsSmall"/>
                    <img src="SmartHouse2.jpg" alt="Smart House" className="imgs"/>
                </p1>
                
            </div>
        </div>
    )
    
}