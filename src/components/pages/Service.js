import React from 'react'
import '../../App.css'
import GoToTop from '../../GoToTop';

export default function Service() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='qualifications'>SERVICES</h1>
                <div className='smallcard'>
                    I volunteered to service and maintain the 3D printers at my local highschool. To my dismay, none of the Makerbot printers 
                    at our school were functional. I spent hours on end diagnosing and repairing issues the 3D printers had at my school. One of the printers had 
                    a malfunctioning power supply, which was easy to diagnose as they used the ATX standard, and I was able to use a PC power supply to verify 
                    this was the issue. Most of the other printers had extruder issues. If you've ever dealt with Makerbot printers you know what I'm talking about.
                    I would dissasemble the extruders, clean up the gears and remove the clogs. One of the printers had a failing thermistor, so it couldn't 
                    tell the temperature of the extruder. This was an easily swappable part. I would also help my peers on how to use the 3D printers. 
                    If someone needed help understanding how to export a 3D model into the slicer, I would be the one to teach them. There are so many 
                    settings for 3D printing, many of which will highly affect the quality of a print.
                </div>
                <div className='smallcard'>
                    One major 3D printing project involved assisting anatomy class with a new project. They were studying prosthetics, and had to find
                    designs that would be helpful for those with disabilities, and print a functional prosthetic device. I assisted in logging a list of
                    students and their designs that would need to be printed, and getting those prints done. Essentially I managed a 3D printer farm for a 
                    few weeks. It was pretty fun.
                </div>

                <div className='smallcard'>
                <div className='leftdiv'>

                    I currently volunteer at StarForge Foundry, a student run makerspace in College Station, TX. It's a place where people have access to tools
                    and equipment to make things.

                    </div>

                    <div className='rightdiv'>
                        <div class="polaroid">
                            <img src="Pics/Starforge.png" alt="Starforge Foundry" className="imgs"/>
                            <div class="container">
                                <p><a href="https://www.starforgefoundry.com/" className='a'>Starforge Foundry</a></p>
                            </div>
                        </div> 

                    </div>
                </div>

            </div>
        
        </div>
    )
}