import React from 'react'
import '../../../App.css'

export default function DangerBattery(){
    return(
        <div className='container'>
            <div>
                <h1 className='about-me'>Bootleg Battery Concept</h1>
                
                
                <div className='smallcard'>

                    <div className='leftdiv'>

                        This project was just for laughs, which is why I dub it the "bootleg battery". The bootleg battery is 4x Samsung 3500mAH 18650 battery cells in series forming
                        a whopping total of 14,000mAH! Unfortunately, I never took a photo of the final project and I have since thrown this project away.
                        For the final revision, I cut a hole in the back shell of the phone to run the wires through, and hotglued the batteries on a battery holder to the back of the phone.
                        Theoretically, with 14,000mAH you would have a battery life of up to 5 days without recharging. 
                        
                    </div>
                        
                    <div className='rightdiv'>
                        <div class="polaroid">
                            <img src="PhoneExtender.jpg" alt="Phone Battery" className="imgs"/>
                            <div class="container">
                                <p>Does this look dangerous to you?</p>
                            </div>
                        </div> 
                        
                    </div>
                </div>
                <div className='smallcard'>
                    
                    
                    The original battery had communication lines. Without them, the phone
                    has no idea what the battery percentage is, and would turn off every 15 minutes. I was truly dreaming
                    that I could have a 14,000mAH hot swappable battery bank attached to the back of my phone. Although the project was not a success, I'm
                    glad I learned what I did and I'm glad I at least got the phone to turn on. So that's why I call it a concept, because it's technically still
                    possible to achieve such a ridiculous design.
                    <a href="https://en.wikipedia.org/wiki/Battery_management_system">More info on how BMS works</a>
                </div>
                <div className='smallcard'>
                    
                    This phone had water damage and was unable to charge prior to me hacking it all up. So 
                    really I didn't waste anything by "ruining" the phone in the end. I'm going to revisit this project one day.
                </div>
            </div>
        </div>
    )
}