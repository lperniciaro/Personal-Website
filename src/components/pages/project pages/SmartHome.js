import React from 'react'
import '../../../App.css'

export default function SmartHome(){
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>Model Smart Home</h1>
                <div className='smallcard'>
                    
                    <div className='leftdiv'>

                        The model smart home was a project for my highschool physics class. The home as multiple rooms
                        with individual lighting, attached to an arduino with a bluetooth controller module.
                        I developed an android app that would connect to the arduino and switch the LEDs to my choosing.
                        I did not document this project very well, but I have
                        a photo of the early construction, and a screenshot of the app that I developed.
                        <div class="polaroid2">
                            <img src="SmartHouse2.jpg" alt="Smart House Model" className="imgs2"/>
                            <div class="container">
                                <p>Model Home</p>
                            </div>
                        </div> 
                    </div>

                    

                    
                        
                    <div className='rightdiv'>
                        <div class="polaroid">
                            <img src="SmartHouse1.png" alt="App" className="imgs"/>
                            <div class="container">
                                <p>Android App Control Panel</p>
                            </div>
                        </div> 
                        
                    </div>
                    
                    
                </div>

                
                
            </div>
        </div>
    )
    
}