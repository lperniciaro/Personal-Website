import React from 'react'
import '../../../App.css'
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import myVideo from "./LEDCube.mp4"

export default function LEDCube(){
    return(
        <div className='container'>
            <div>
                <h1 className='about-me'>8x8x8 LED Cube</h1>
                <p1 className='paragraph'>
                    <a href="https://www.amazon.com/gp/product/B01HZ8PBOY/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1">8x8x8 LED Cube Amazon Link</a>
                    This project was a true test of my soldering abilities. Over 1000 solder joints needed to form an 8x8x8 LED Cube. I had to make a template
                    wooden board in order to make the LED grid, then I made the grid 8 times. Put them all together, installed the LED controllers and I was good to go!
                    (for some reason the video only works on fullscreen)
                    
                    <Player
                        playsInline
                        src={myVideo}
                        fluid={false}
                        width={1000}
                        height={500}
                    />
                    
                 
                    <img src="LEDCubePartial.jpg" alt="LED Cube Partial" className="imgsSmall"/>
                    <img src="LEDCubeComplete.png" alt="LED Cube Partial" className="imgsSmall"/>
                </p1>
                
                <p1 className='paragraph'>
                    
                    
                </p1>
                
            </div>
        </div>
    )
}