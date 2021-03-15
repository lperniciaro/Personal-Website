import React from 'react'
import '../../../App.css'

export default function WakeOnWan(){
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>Wake On Wan</h1>
                <p1 className='paragraph'>
                    This project was a great experience for me. I got to solve a mildly annoying problem that I had. You see, back in highschool, I liked to remote into my 
                    PC using Teamviewer. However, sometimes I would forget to turn on my computer before I left for school. Leaving my computer running 24/7 was not a viable
                    solution. We gotta be energy conscience alright? It seemed that Wake On Lan was a solution to my problem. Wake On Lan is a networking standard that allows
                    a packet to be sent to a machine to turn it on. Only problem was, at school I wasn't on my local network. I tried all the free "Wake on Wan" solutions
                    on the internet. None of them worked. Also, I didn't really want to have my laptop running 24/7 to accomplish this, as another machine still had to be
                    on the local network to send the request. I also tried sending a Wake On Lan request from outside of the network, however my router blocked the request
                    as it is a security concern.
                </p1>

                <p1 className='paragraph'>
                    I had recently purchased a raspberry pi, and I thought to myself "Hey, wouldn't it be cool if I could have the raspberry pi send the request?". So thats what I did.
                    I used a publicly available java library to send a Wake On Lan packet, and created a server that I could run on a raspberry pi. I was able to create a java client,
                    where I would input the relevant IP and MAC address information, and I could now initiate a Wake On Lan request from anywhere in the world. I also 
                    created an Android based client that did the same thing, because why not?
                </p1>
                <h1 className='about-me'>The Bad News</h1>
                <p1 className='paragraph'>
                    Unfortunately, back in highschool when I did this project, I didn't really understand the importance of backing up your data. Guess what happened to that
                    HDD? A whole lot of noises that an HDD shouldn't be making. I no longer have anything to show for the project as it is now stuck on a drive than can't 
                    be read from. :( Good news is I still learned a lot from the experience. So if you don't already... BACK UP YOUR DATA
                </p1>

                <p1 className='paragraph'>
                    The client looked nearly identical to a Wake On Lan packet sender you can find on the internet, however mine included a password phrase so random
                    people can't just turn on my computer.
                    <img src="WakeOnLan.png" alt="Wake On Lan" className="imgsSmall"/>
                    <a href="https://en.wikipedia.org/wiki/Wake-on-LAN">More info on Wake On Lan Packets</a>
                </p1>

                
                
            </div>
        </div>
    )
}