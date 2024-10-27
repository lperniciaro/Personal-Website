import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'


export default function TheServer(){
    return (
        <div className='container'>
            <GoToTop />
            <div>
            <h1 className='qualifications'>The Server</h1>
            <div className='smallcard'>
                <div className='leftdiv'>

                    <p>
                    I use an HP ProLiant DL 380 G7 as my homelab setup. This is where I play with Linux and learn new technologies and frameworks. I self host this website for the fun of learning the challenges of maintaining uptime on a 
                    physical server. I believe having a physical deployment where I get to experience the hardware level issues on a server give me a broader scope
                    of understanding infrastructure as a whole.
                    </p>
                    <br />
                    <p>
                    I run a seperate machine with PfSense as my firewall/router combo. This allows me to port forward as I please and maintain an 
                    extra layer of network security. For example, keeping my roomates (or whatever viruses they download) out of my SMB server :P 
                    </p>

                </div>
                <div className='rightdiv'>
                    <h1 className='the_specs'>The Specs</h1>
                        <ul class="list">
                            <li>
                                CPU: 2x Intel(R) Xeon(R) CPU X5680
                            </li>
                            <li>
                                RAM: 64GB DDR3 EEC
                            </li>
                            <li>
                                Networking: Many gigabit networking cards
                            </li>
                            <li>
                                Storage: 8x 500GB (Raid 5 with 7 drives, 1 as hot swappable replacement)
                            </li>
                        </ul>
                    </div>
                    
                </div>
            
            </div>

            <h1 className='qualifications'>The Operating System</h1>
            <div className='smallcard'>
                <p>
                    Red Hat Linux 7.9.
                    Why I chose this you may ask? Because that's what I have work experience with.
                </p>
                <br></br>
                <p>
                    My very first experiences with linux were always on Ubuntu messing around with game servers, as well as personal projects with a Raspberry Pi.
                    At my internship I worked heavily with RHEL and deeply engrained all the troubleshooting steps I was used to on the Windows environment. For example, troubleshooting
                    open/closed ports, software firewall to open/close ports, network config, cpu usage, memory usage, etc. You know, all the sysadmin stuff.  Using RHEL on my personal server allows me to further expand on what I already know.
                </p>

            </div>

            <h1 className='qualifications'>Services</h1>
            <div className='smallcard'>
                    So what all is the server doing? Of course, I've hinted at this earlier, but it is currently running the nginx web server that is 
                    serving you this epic React based website. (2024 UPDATE: Due to security and financial considerations, I now host the website on a free teir AWS EC2 instance) I run a variety of other services as well.

                    We got the good ol' 'Powerline AI' Senior design project (shameless frontend webserver, with django SQLite backend).

                    Using Samba I share the ~3TB network drive on LAN. (SMB server)

                    That's actually about it... I'll run a Minecraft or a Gmod server on it from time to time. It's my server. I do what I want
                    when I want and it's always ready for a good ol' ssh connection to do some work.
            </div>
            
            </div>

            
    )
}