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
                <div className='smallcard2'>
                    <a href="https://www.amazon.com/gp/product/B01HZ8PBOY/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1">8x8x8 LED Cube Amazon Link</a>
                    This project was a true test of my soldering abilities. Over 1000 solder joints needed to form an 8x8x8 LED Cube. I had to make a template
                    wooden board in order to make the LED grid, then I made the grid 8 times. Put them all together, installed the LED controllers and I was good to go!
                    
                    
{/*                     <Player
                        playsInline
                        src={myVideo}
                        fluid={false}
                        width={1000}
                        height={500}
                    /> */}
                    <div class="ledwrapper">

                    
                        <div class="polaroidvid">
                                <video controls width="100%" muted className='led'>
                                    <source src="LEDCube.mp4" type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                                <div class="container">
                                    <p>LED Cube Video</p>
                                </div>
                        </div> 
                        <div class="polaroid4">
                            <img src="LEDCubePartial.jpg" alt="LED Cube Partial" className="imgs"/>
                            <div class="container">
                                <p>Cube Partially Complete</p>
                            </div>
                        </div> 
                        <div class="polaroid4">
                            <img src="LEDCubeComplete.png" alt="LED Cube Partial" className="imgs"/>
                            <div class="container">
                                <p>Complete Cube</p>
                            </div>
                        </div> 
                    </div>
               
                </div>
                
                <p1 className='paragraph'>
                    
                    
                </p1>
                
            </div>
        </div>
    )
}