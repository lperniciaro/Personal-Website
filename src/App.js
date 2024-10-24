import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Qualifications from './components/pages/Qualifications';
import Service from './components/pages/Service';
import Cars from './components/pages/Cars';
import Atera2Autotask from './components/pages/project pages/Atera2Autotask'
import ClientChecker from './components/pages/project pages/ClientChecker'
import WakeOnWan from './components/pages/project pages/WakeOnWan'
import LEDCube from './components/pages/project pages/LEDCube'
import DangerBattery from './components/pages/project pages/DangerBattery'
import SmartHome from './components/pages/project pages/SmartHome'
import TheServer from './components/pages/project pages/TheServer'
import Datadog from './components/pages/project pages/Datadog'
import PowerlineAI from './components/pages/project pages/PowerlineAI'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about-me' component={AboutMe} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/cars' component={Cars} />
          <Route path="/the_server" component={TheServer} />
          <Route path='/qualifications' component={Qualifications} />
          <Route path='/service' component={Service} />
          <Route path='/atera2autotask' component={Atera2Autotask} />
          <Route path='/clientchecker' component={ClientChecker} />
          <Route path='/wakeonwan' component={WakeOnWan} />
          <Route path='/ledcube' component={LEDCube} />
          <Route path='/dangerbattery' component={DangerBattery} />
          <Route path='/smarthome' component={SmartHome} />
          <Route path='/datadog' component={Datadog} />
          <Route path='/powerlineAI' component={PowerlineAI} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
