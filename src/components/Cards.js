import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='Atera2Autotask2.png'
                        text='Migration of agent to database using REST API'
                        label='Atera2Autotask'
                        path='/~perniciaro.lucian/atera2autotask'
                        />
                        <CardItem 
                        src='ClientChecker.png'
                        text='Data combing tool to audit software on a network'
                        label='Client Checker'
                        path='/~perniciaro.lucian/clientchecker'
                        />
                        <CardItem 
                        src='WakeOnLan.png'
                        text='Server and client to initialize Wake On LAN request over WAN'
                        label='WakeOnWan'
                        path='/~perniciaro.lucian/wakeonwan'
                        />
                        
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='LEDCubeComplete.png'
                        text="It's exactly what it sounds like"
                        label='8x8x8 LED Cube'
                        path='/~perniciaro.lucian/ledcube'
                        />
                        <CardItem 
                        src='PhoneExtender.jpg'
                        text='A concept for a 5 day phone battery life'
                        label='Bootleg Battery Extender'
                        path='/~perniciaro.lucian/dangerbattery'
                        />
                        <CardItem 
                        src='SmartHouse1.png'
                        text='Model house with bluetooth controlled lighting in each room'
                        label='Model Smart Home'
                        path='/~perniciaro.lucian/smarthome'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards