import React from 'react'
import '../../../App.css'

export default function WakeOnWan(){
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>Wake On Wan</h1>
                <div className='smallcard'>
                    This project was a great experience for me. I got to solve a mildly annoying problem that I had. I liked to remote into my 
                    PC using Teamviewer. However, sometimes I would forget to turn on my computer before I left my home. Leaving my computer running 24/7 was not a viable
                    solution. We gotta be energy conscience alright? It seemed that Wake On Lan was a solution to my problem. Wake On Lan is a networking standard that allows
                    a packet to be sent to a machine to turn it on. I tried all the free "Wake on Wan" solutions
                    on the internet. None of them worked. I also tried sending a Wake On Lan request from outside of the network, however my router blocked the request
                    as it is a security concern.
                </div>

                <div className='smallcard'>
                    I had recently purchased a raspberry pi, and I thought to myself "Hey, wouldn't it be cool if I could have the raspberry pi send the request?". So thats what I did.
                    I used a publicly available java library to send a Wake On Lan packet, and created a server that I could run on a raspberry pi. I was able to create a java client,
                    where I would input the relevant IP and MAC address information, and I could now initiate a Wake On Lan request from anywhere in the world. I also 
                    created an Android based client that did the same thing, because why not?
                </div>

                <div className='smallcard'>
                    The client looked nearly identical to a Wake On Lan packet sender you can find on the internet, however mine included a password phrase so random
                    people can't just turn on my computer.
                    <div class="polaroid">
                            <img src="WakeOnLan.png" alt="Wake On Lan" className="imgs"/>
                            <div class="container">
                                <p>WakeOnLan packet sender</p>
                            </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}