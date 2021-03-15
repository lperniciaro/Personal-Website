import React from 'react'
import '../../../App.css'

export default function Atera2Autotask(){
    return (
        <div className='container'>
            <div>
                <h1 className='about-me'>Atera2Autotask</h1>
                <p1 className='paragraph'>Atera2Autotask is a web based application that uses REST APIs to gather data from an agent, Atera, and push the data
                to Autotask's database. I developed this application for TNTechnologies, an RMM* IT consultant company. We provide
                support and management of businesses IT solutions. We aquired a new PSA* software, Autotask, which will assist helpdesk employees in scheduling tickets.
                One issue arose, autotask has no agent*, which means we had to manually insert all network information for a given client. This saves a lot
                of time as there are thousands of machines and servers to insert into the database.
                <a href="https://www.datto.com/products/autotask-psa">Autotask PSA Link</a>
                    
                </p1>
                
                <p2 className='paragraph'>
                        This is where I stepped in. We already have an agent installed on customers' machines. Atera is RMM software to help automate certain IT tasks. In addition, Atera provides
                        a REST API to collect data from a network. The data that is gathered is as follows:
                        Machine name, IP Address, MAC address, domain name, OS name, OS version, Machine Manufacturer, Machine Model, etc. 
                        <a href="https://www.atera.com/">Atera Website Link</a>
                </p2>
                <p3 className='paragraph'>
                    Fortunately, although Autotask did not come with an agent to easily gather information, they did also provide a REST API to insert data into the database.
                    Both services provided excellent developer documentation on the functions for their APIs, and I was able to construct a JavaScript based web application
                    that works as follows. First a list of clients is shown on the screen, then the user can select a client and will be presented with a list of machines. 
                    The user can then select a machine, and all data for selected machines will be pushed into Autotask, in the proper client group. Obviously, I have
                    omitted sensitive information in the images below, but I think you can still get a better idea of the scope of this project with them.
                        <img src="Atera2Autotask.png" alt="Atera2Autotask Client" className="imgsSmall"/>
                </p3>
                <p4 className='paragraph'>
                    The biggest challenge in this project involved manipulating the data to work for different objects in Autotask. Atera sorted all of the data into two objects, 
                    "workstation" and "client", however autotask more objects. While they did have workstation and clients, autotask also had a seperate object to track
                    model and make number for an individual machine. So I had to implement the push request in the following steps. First, check for existing client. If client does not exist, 
                    create it. If the does exist, use the gathered client ID to initiate the proper requests. This process is repeated for machine make and model. Then once this is done,
                    it can finally insert a workstation, in the proper group, with its system information in place, with the make and model object attached. Autotask will 
                    now let our staff know the exact make and model of the computer they are providing support on, as well as other useful workstation information to provide remote IT support.
                    There's many other little details I had to put into this project, such as distinguishing between a server and a workstation. As well as further logic to ensure
                    the reduction of erroneous duplicate entries. 
                        <img src="Atera2Autotask2.png" alt="Autotask" className="imgs"/>
                </p4>
                <p4 className='paragraph'>
                    I had plans to fully automate this process. To have the application run as a server that would automatically make sure all the data was up to date.
                    I had an algorithm planned out, however I ran into a brick wall. Both APIs had a request limit that would boot your access after a certain amount of requests in a 
                    certain time frame. I decided
                    that the cost-benifit of attempting to reduce the amount of requests to make this work was simply not worth it. I believe I could have implemented a delay
                    that would wait for requests to become available, then continue checking for up-to-dateness. However, it would take me a lot of time and trial of error
                    to implement such a solution, and I wouldn't know if this concept would be functional before I started. 
                    Since the current working version already resulted in a great cost-benifit, I decided
                    that this goal should be scrapped.
                </p4>
                <p5 className='paragraphSmall'>
                    *Definitions  <br></br>
                    RMM - Remote Monitoring and Management <br></br>
                    PSA - Professional Serices Automation  <br></br>
                    Agent - a computer program that performs various actions continuously and autonomously on behalf of an individual or an organization  <br></br>
                </p5>
            
            </div>
        </div>
    )
}