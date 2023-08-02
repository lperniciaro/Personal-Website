import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>PROJECTS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        <CardItem
                            src='Pics/PowerlineAIDiagram.png'
                            text="Fault Detection in Power Lines Using AI (Full stack)"
                            label='Power Line Fault Detection'
                            path='/powerlineAI'
                        />

                        <CardItem
                            src='Pics/datadogazure.png'
                            text="Azure DR triggered by Datadog monitor webhook"
                            label='Datadog Azure DR'
                            path='/datadog'
                        />

                        <CardItem
                            src='Atera2Autotask2.png'
                            text='Migration of agent to database using REST API'
                            label='Atera2Autotask'
                            path='/atera2autotask'
                        />

                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='Pics/TheServer.jpg'
                            text="It's serving you this site right now :D"
                            label='The Server'
                            path='/the_server'
                        />
                        <CardItem
                            src='ClientChecker.png'
                            text='Data combing tool to audit software on a network'
                            label='Client Checker'
                            path='/clientchecker'
                        />
                        <CardItem
                            src='WakeOnLan.png'
                            text='Server and client to initialize Wake On LAN request over WAN'
                            label='WakeOnWan'
                            path='/wakeonwan'
                        />

                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='LEDCubeComplete.png'
                            text="It's exactly what it sounds like"
                            label='8x8x8 LED Cube'
                            path='/ledcube'
                        />
                        <CardItem
                            src='PhoneExtender.jpg'
                            text='A concept for a 5 day phone battery life'
                            label='Bootleg Battery Extender'
                            path='/dangerbattery'
                        />
                        <CardItem
                            src='SmartHouse1.png'
                            text='Model house with bluetooth controlled lighting in each room'
                            label='Model Smart Home'
                            path='/smarthome'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
