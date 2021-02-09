import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css';

export default function AboutMe() {
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>ABOUT ME</h1>
                <p1 className='paragraph'>I was born in New Orleans, Louisiana. I moved shortly after to Texas due to hurricane Katrina. As I grew up I had
                    an interest in wanting to understand how "things" work. Not too long into highschool I decided I wanted to become an engineer.
                    
                    
                </p1>
                
                <p2 className='paragraph'>
                        I chose Computer Engineering as my degree path, as it gives me both a taste of hardware and software development. I enjoy software development 
                        as it gives me a chance to create anything to my imagination. Thinking out of the box and creating a solution to a problem is one of my favorite
                        things to do, and software engineering allows me to accomplish that in many ways.
                </p2>
                <p3 className='paragraph'>
                        Outside of school, I like to apply my problem solving skills towards Rallycross, a form of off-road racing. Racing vehicles
                        puts a lot of stress on drivetrain components, and oftentimes things will break. On my journey to become a better driver I've had to repair my
                        vehicle plenty of times in various different ways, and I love to be able to get things working again. 
                        <img src="VicDrifting.jpg" alt="Drifting" className="imgs"/>
                </p3>
            </div>
        </div>
    )
}