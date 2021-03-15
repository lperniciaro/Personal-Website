import React from 'react'
import '../../App.css'

export default function Service() {
    return (
        <div className='container'>
            <div>
                <h1 className='qualifications'>SERVICES</h1>
                <p1 className='paragraph'>
                    I volunteered to service and maintain the 3D printers at my local highschool. To my dismay, none of the Makerbot printers 
                    at our school were functional. I spent hours on end diagnosing and repairing issues the 3D printers had at my school. One of the printers had 
                    a malfunctioning power supply, which was easy to diagnose as they used the ATX standard, and I was able to use a PC power supply to verify 
                    this was the issue. Most of the other printers had extruder issues. If you've ever dealt with Makerbot printers you know what I'm talking about.
                    I would dissasemble the extruders, clean up the gears and remove the clogs. One of the printers had a failing thermistor, so it couldn't 
                    tell the temperature of the extruder. This was an easily swappable part. I would also help my peers on how to use the 3D printers. 
                    If someone needed help understanding how to export a 3D model into the slicer, I would be the one to teach them. There are so many 
                    settings for 3D printing, many of which will highly affect the quality of a print.
                </p1>
                <p1 className='paragraph'>
                    One major 3D printing project involved assisting anatomy class with a new project. They were studying prosthetics, and had to find
                    designs that would be helpful for those with disabilities, and print a functional prosthetic device. I assisted in logging a list of
                    students and their designs that would need to be printed, and getting those prints done. Essentially I managed a 3D printer farm for a 
                    few weeks. It was pretty fun.
                </p1>
                <p1 className='paragraph'>
                    I have a pretty dissapointing look for volunteer work compared to my peers. Throughout highschool I was obsessed with saving up to afford
                    university without going into debt, and spent most of my time studying and working. At A&M, I volunteered with the Fischer Engineering Design 
                    Center, which didn't last very long because I ended up breaking my ankle in a car accident (I love people that run stop signs). I spent a few
                    months in physical therapy, and right when I was back into shape COVID happened. I'm looking forward to volunteering at the EDC once we 
                    open back up to full capacity.
                </p1>
            </div>
        
        </div>
    )
}