import React from 'react'
import '../../App.css'

export default function Qualifications() {
    return(
        <div className='container'>
            <div>
                <h1 className='qualifications'>QUALIFICATIONS</h1>
                <p1 className='paragraph'>
                I am very fond of automation. When it comes to software development, this peaks my interest the most so far. Being able
                to programatically reduce the amount of effort I have to expend in my day to day activies is really enjoyable for me. I also
                enjoy Verilog programming, however I am still learning and have not developed any personal projects with it yet.
                    
                </p1>
                
            </div>
            <iframe className="pdf" src="ResumeLP.pdf">

            </iframe>
        </div>
        
    )
}