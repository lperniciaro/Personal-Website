import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css';
import '../HeroSection.css';
import GoToTop from '../../GoToTop';

export default function AboutMe() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='about-me'>ABOUT ME</h1>
                <div className='smallcard'>I was born in New Orleans, Louisiana. I moved shortly after to Texas due to hurricane Katrina. After graduation, I moved
                    to the lovely city of San Diego, CA. 
                </div>
                
                <div className='smallcard'>
                        I gradauted in Computer Engineering. I chose this degree as it gave me both a taste of hardware and software development. I enjoy software development 
                        as it gives me a chance to create anything to my imagination. Thinking out of the box and creating a solution to a problem is one of my favorite
                        things to do, and software engineering allows me to accomplish that in many ways.
                </div>
                <div className='smallcard'>
                        My software experience lies in automation and DevOps methodologies combined with full stack development experience. I enjoy having a full plate of large scale problems
                        where I can show my abilities to think outside of the box and resolve problems.
                </div>
                <div className='smallcard'>
                    <div className='leftdiv'>

                        Outside of engineering I like to apply my problem solving towards cars. I participate in Rallycross, a time trial dirt racing series 
                        which emphasises motorsport competition on a budget. I bought a Mercury Grand Marquis off of craigslist for $600. Spent some
                        time tinkering to get it in running condition, and have been enjoying it ever since. I bought
                        the car solely for racing, but it has turned out to be an extremely reliable vehicle. I daily drive it to this day. Even with all the abuse
                        I put it through it still holds up as a great car with no issues.
                        I rallycross at <a href="https://www.lonestarrallycross.com/" className='a'>LoneStar Rallycross</a>
                    </div>
                        
                    <div className='rightdiv'>
                        <div class="polaroid">
                            <img src="VicDrifting.jpg" alt="Drifting" className="imgs"/>
                            <div class="container">
                                <p>Crown Vic Drift</p>
                            </div>
                        </div> 
                    </div>
                        
                </div>
                <div className='smallcard'>
                        
                        <div className='leftdiv'>

                            My other creative outlet outside of school is playing music. I started playing piano in elementary school, then I went on to play trumpet in band. 
                            Starting University, I picked up guitar.
                        </div>
                            
                        <div className='rightdiv'>
                            <div class="polaroid">
                                <img src="BandPic.jpg" alt="Band Picture" className="imgs"/>
                                <div class="container">
                                    <p>Glass Ribbon Concert</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}