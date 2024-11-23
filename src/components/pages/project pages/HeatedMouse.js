import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'

export default function HeadedMouse() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='about-me'>Heated Gaming Mouse</h1>
                <div>11/23/2024</div>
                <h1 className='about-me'>Summary</h1>
                <div className='smallcard'>I wanted a heating gaming mouse. I just recently moved to San Diego, and was enjoying the fact that it
                    was in the low 60s in the early morning. I only had one problem. When my room was this cold, by hands would get too cold and they
                    would move annoyingly slowly. So, the logical solution is to purchase a heated mouse! Unfortunately, the market does not have any
                    high quality options for heated mice. While, I was able to find a ~$30 model that seemed pretty decent. It clearly did not have an
                    expensive/accurate sensor that would be acceptable for my quick mouse movements. So, my solution was to buy the cheapest heated mouse on amazon,
                    gut the internals, and place them inside of a good mouse.

                    <div class="polaroid3">
                        <img src="Pics/cheap_heated_mouse.png" alt="The Cheap Heated Mouse" className="imgs" />
                        <div class="container">
                            <p>Cheap heated mouse</p>
                        </div>
                    </div>
                </div>

                <h1 className='about-me'>The Finalmouse 2015</h1>
                <div className='smallcard'>
                    Back in 2015 I had purchased a Finalmouse 2015 (back then known as simply the 'finalmouse'). It had served me well for a very long time,
                    however the left click button had started to go out and I ended up replacing it. I still kept it for the day I knew would come when I would fix it.
                     That didn't end up happening for another 5-6 years or so. In 2016 I had the mouse signed by the professional CS:GO team Cloud9. In my infinite teenage wisom,
                      I decided that clear scotch tape would be the best way to protect the signatures. That didn't work at all, and after 8 years it left permanent damage
                      on the plastic of the mouse. So, it looks absolutely disgusting. I had to use a bunch of chemicals to get the sticky feeling off, so it finally feels clean,
                       but the chemicals did their damage on the finish.

                    <div class="polaroid3">
                    <img src="Pics/signed_finalmouse.jpg" alt="Finalmouse" className="imgs" />
                        <div class="container">
                            <p>The Finalmouse after signing (2016)</p>
                        </div>
                    </div>
                </div>
                <h1 className='about-me'>Getting the heatpad</h1>
                <div className='smallcard'>
                    So basically long story short I took the heat pad out of the cheap mouse and fit it perfectly in my finalmouse. Here's some pics.
                    <div class="polaroid3">
                        <img src="Pics/Finalmouse/1.jpg" alt="Pic 1" className="imgs" />
                        <div class="container">
                            <p>Final Product with heatpad installed. You can see the thermal pad in the finalmouse logo.</p>
                        </div>
                    </div>
                    <div class="polaroid3">
                        <img src="Pics/Finalmouse/2.jpg" alt="Pic 2" className="imgs" />
                        <div class="container">
                            <p>Cheap heated mouse disassembled</p>
                        </div>
                    </div>
                    <div class="polaroid3">
                        <img src="Pics/Finalmouse/3.jpg" alt="Pic 3" className="imgs" />
                        <div class="container">
                            <p>The heat pad</p>
                        </div>
                    </div>
                    <div class="polaroid3">
                        <img src="Pics/Finalmouse/4.jpg" alt="Pic 4" className="imgs" />
                        <div class="container">
                            <p>After transferring power cord</p>
                        </div>
                    </div>
                    <div class="polaroid3">
                        <img src="Pics/Finalmouse/timelapse.gif" alt="Timelapse" className="imgs" />
                        <div class="container">
                            <p>Wiring time lapse</p>
                        </div>
                    </div>
                </div>
                <div className='smallcard'>
                    It works great and gets plenty of warm for those cold morning days.

                </div>
                
            </div>
        </div>
    )
}