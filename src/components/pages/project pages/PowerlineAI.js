import React from 'react'
import '../../../App.css'
import GoToTop from '../../../GoToTop'

export default function PowerlineAI() {
    return (
        <div className='container'>
            <GoToTop />
            <div>
                <h1 className='about-me'>Fault Detection in Power Lines Using AI</h1>
                <h1 className='about-me'>Summary</h1>
                <div className='smallcard'>The purpose of this project is to address the need for transmission line fault detection to
                    improve grid reliability and repair time. The solution proposed is to develop a controller to
                    read voltage and current sensor data from all phases of the line and utilize a deep neural
                    network to understand and display the fault information. Specifically, the phase activity will
                    be read with a microcontroller, and a trained model will understand and let the user know
                    what fault type is happening and where on the transmission line it happened. The data will
                    then be fed to an online database for storage and display. This ensures the grid operators
                    have a full view of the health of the grid. For the purposes of this project, we will be focusing
                    on creating a simulated environment in which we can produce accurate and clean data to
                    train our neural network. This data will then be verified and deployed on the physical
                    controller for testing of the physical model.

                    <div class="polaroid3">
                        <img src="Pics/PowerlineAIDiagram.png" alt="Powerline AI Diagram" className="imgs" />
                        <div class="container">
                            <p>Block Diagram of Fault Detection System</p>
                        </div>
                    </div>
                </div>

                <h1 className='about-me'>Neural Network Subsystem</h1>
                <h1 className='about-me'>Summary</h1>
                <div className='smallcard'>
                    The Simulation and Neural Network subsystem is a crucial component of our device that has two primary functions.
                    The first function is to simulate power line fault data, while the second function is to use a neural network model
                    to predict the fault type and location based on measured voltages and currents. The simulation process involves using
                    a combination of A, B, and C phase VRMS and IRMS values, as well as zero-sequence voltage and current values to generate
                    the fault data. The neural network model then analyzes the simulated data to predict the fault type and location with high accuracy.
                    The methodology, process, and validation of this subsystem have been carefully designed and implemented to ensure the accuracy and reliability of the predictions.
                </div>
                <h1 className='about-me'>Training the Neural Network</h1>
                <div className='smallcard'>
                    For the fault model system, we designed a simple Line-to-Line model to evaluate the
                    performance of a transmission line system under various fault conditions.
                    This model consists of two 60Hz source feeders running at 11kV and 30MVA.
                    These are then connected to an 11kv bus which represents a substation that gets the voltage
                    ready for transmission over long distances. A Pi transition line model was used for the accurate
                    representation of real-world transmission lines and the ability to adjust the distance, inductance,
                    and various parameters of the line model. A load is also introduced to the model to allow
                    for a more accurate representation of a simple line model with a load induced on it.
                    Below is an image of the Transmission line Fault Model used in our project.
                    <div class="polaroid3">
                        <img src="Pics/FaultSimulation.png" alt="Fault Simulation" className="imgs" />
                        <div class="container">
                            <p>Line-to-Line Transmission Fault System</p>
                        </div>
                    </div>
                </div>
                <div className='smallcard'>
                    The simulation model we presented above gives us the flexibility to adjust several parameters,
                    including the line length of the pi line pre-
                    and post-fault, as well as the fault type, switching times, and fault resistance.
                    Throughout the simulation, we took advantage of the RMS current,
                    voltage, and zero sequence measurements across all three phases.
                    By customizing the simulation and collecting such detailed data,
                    we can gain a comprehensive understanding of the system's behavior during fault conditions,
                    leading to more informed decision-making and better system performance

                </div>
                <div className='smallcard'>

                    By utilizing the Huber loss function and Adam optimizer, along with 1000 epochs of training,
                    We were able to create an accurate model that could predict fault types with 100% accuracy and distances
                    with a maximum error of only 0.2 km. Further evaluation of the model with other parameters helped to
                    understand the robustness of the model as well as its performance. The r^2 value of 0.9998804 in the
                    distance scatterplot demonstrated the high accuracy of the model.

                    Overall, with careful selection of features and proper training, it was possible to
                    create an accurate model using a relatively small dataset. The model meets all the
                    requirements set in the validation plan and can be embedded in the ESP32 MCU to predict
                    fault types and distances with a high degree of accuracy.

                </div>
                <h1 className='about-me'>Front & Backend Subsystem</h1>
                <h1 className='about-me'>Summary</h1>
                <div className='smallcard'>
                    <p>
                        The backend/frontend subsystem of the project is designed to communicate processed information from the
                        Microcontroller Unit (MCU) to grid operators for effective monitoring and decision-making.
                        The backend is developed using Django, a Python-based framework that incorporates SQLite for
                        database management, while the front end employs the Vue.js JavaScript framework to create a seamless user interface.</p>
                    <br></br>
                    <p>
                        The backend system stores vital MCU details such as its location, IP address, and MAC address
                        for relevant internet communication, as well as power line fault data like GPS location of the
                        fault, distance from the MCU, and identification of the affected lines. This information is then
                        presented to grid operators through a frontend Control Panel, which they can access by logging in.
                        The front end is able to access information from the database through a RESTful API, which allows other
                        subsystems such as the Mobile Application subsystem to communicate with the database.</p>
                    <br></br>
                    <p>
                        Upon accessing the Control Panel, grid operators are presented with a list of alerts on the main dashboard.
                        They can delve into detailed information about each fault, including its GPS location displayed on Google Maps.
                        Additionally, operators can access comprehensive information about the MCUs, allowing them to diagnose and address potential issues effectively.</p>

                </div>
                <h1 className='about-me'>Backend Overview</h1>
                <div className='smallcard'>
                    <p>
                        The backend system for this project is built using Django, a Python-based framework that incorporates SQLite for efficient database management.
                        Serving as the central communication hub, the backend connects both the web application and the mobile application frontends,
                        ensuring seamless information exchange between them.
                    </p>
                    <br></br>
                    <p>
                        To enable cross-platform communication, the backend employs a RESTful API, which facilitates interactions with
                        other systems via the HTTP interface on the internet. This approach allows for a versatile and
                        scalable solution that can effectively cater to diverse requirements.
                    </p>
                    <br></br>
                    <p>
                        Although the backend system exhibits characteristics similar to a 'cloud' server,
                        it is intentionally hosted locally, providing greater control over potential usage restrictions
                        and costs. By leveraging the Django framework, SQLite, and RESTful API, the backend ensures robust
                        and reliable communication between the web and mobile frontends, ultimately contributing to the efficient
                        detection and management of power line faults.
                    </p>
                    <div class="polaroid">
                        <img src="Pics/FrontBackendDiagram.png" alt="Diagram" className="imgs" />
                        <div class="container">
                            <p>Frontend Backend Block Diagram</p>
                        </div>
                    </div>
                </div>
                <h1 className='about-me'>REST API</h1>
                <div className='smallcard'>
                    <p>
                        The REST (Representational State Transfer) API serves as an essential component
                        for enabling seamless communication between the backend system, web application,
                        and mobile application frontends. It allows for effective data exchange and
                        real-time updates on power line faults detected by the MCUs.
                    </p>
                    <br></br>
                    <p>
                        The REST API is built on standard HTTP methods, such as GET, POST,
                        PUT, and DELETE, which facilitate the creation, retrieval, updating,
                        and deletion of resources. These methods allow the frontend applications
                        to interact with the backend system and access the stored data on power line
                        faults and MCU information. It also allows the MCUs to communicate with the
                        database directly to create Alerts.
                    </p>
                    <br></br>
                    
                    <b>Name:</b> Put alert
                    <br/>
                    <b>URL:</b> PUT http://lucianp.com:8000/api/alert<br/>
                    <b>Body</b> (json):<br/>
                    <br/>
                    "name" : "Fault Detected",<br/>
                    "a" : "0.00",<br/>
                    "b": "1.00",<br/>
                    "c": "0.00",<br/>
                    "gnd": "1.00",<br/>
                    "distance": "132",<br/>
                    "wire_type": "aluminum",<br/>
                    "mcu_id": 4,<br/>
                    "latitude": "30.61159121",<br/>
                    "longitude": "-96.34013638"<br/>
                    <br/>
                    <b>Description:</b> Creates an Alert entity in the database with information provided in body<br/>
                    <br/>
                    <b>Name:</b> Get Alerts<br/>
                    <b>URL:</b> GET http://lucianp.com:8000/api/alert<br/>
                    <b>Body:</b> N/A<br/>
                    <b>Description:</b> Returns a list of alerts and fields<br/>
                    <br/>

                    <b>Name:</b> Get MCUs<br/>
                    <b>URL:</b> GET http://lucianp.com:8000/api/mcu<br/>
                    <b>Body:</b> N/A<br/>
                    <b>Description:</b> Returns list of all MCUs and fields<br/>
                    <br/>
                    <b>Name:</b> Get an MCU<br/>
                    <b>URL:</b> GET http://lucianp.com:8000/api/mcu/(MCU ID)/<br/>
                    <b>Body:</b> N/A<br/>
                    <b>Description:</b> Returns a specific MCU<br/>
                    <br/>
                    <b>Name:</b> Add an MCU<br/>
                    <b>URL:</b> PUT http://lucianp.com:8000/api/mcu<br/>
                    <b>Body:</b><br/>
                    <br/>
                    "name": "This MCU has a name",<br/>
                    "ip_addr": "127.0.0.1",<br/>
                    "mac_addr": "00:00:00:00:00",<br/>
                    "location": "Somewhere"<br/>
                    <br/>
                    <b>Description:</b> Creates a new MCU in the database<br/>
                    
                </div>
                <h1 className='about-me'>Frontend Overview</h1>
                <div className='smallcard'>
                    <p>
                        The frontend web application is built using the Vue.js JavaScript framework, offering
                        a responsive and user-friendly interface for grid operators to monitor and manage
                        power line faults. The Control Panel dashboard serves as the central hub for
                        accessing and navigating various features and functionalities.
                    </p>
                    <br></br>
                    <p>
                        Upon accessing the dashboard, grid operators are presented with a visual
                        graphical representation of fault information. They can choose to view more
                        detailed data on the main page, with options to explore specifics about each fault.
                        The web application also includes a Maps tab, which integrates with Google Maps to
                        display the precise location of each fault, enabling operators to better understand
                        the geographic context of the issues.
                    </p>
                    <br></br>
                    <p>
                        In addition to these features, the front end provides a data table that allows
                        grid operators to directly extract relevant information from the backend database,
                        facilitating the diagnosis and resolution of potential issues. Overall, the Vue.
                        js-based frontend web application ensures an efficient and seamless experience for
                        grid operators to effectively manage power line faults.
                    </p>
                    <div class="polaroid3">
                        <img src="Pics/PowerlineDashboard.png" alt="Dashboard" className="imgs" />
                        <div class="container">
                            <p>Dashboard View</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}