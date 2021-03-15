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
import Atera2Autotask from './components/pages/project pages/Atera2Autotask'
import ClientChecker from './components/pages/project pages/ClientChecker'
import WakeOnWan from './components/pages/project pages/WakeOnWan'
import LEDCube from './components/pages/project pages/LEDCube'
import DangerBattery from './components/pages/project pages/DangerBattery'
import SmartHome from './components/pages/project pages/SmartHome'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          /**Fix this so you can refresh the page */
          <Route path='/~perniciaro.lucian/' exact component={Home}/>
          <Route path='/~perniciaro.lucian/about-me' component={AboutMe} />
          <Route path='/~perniciaro.lucian/portfolio' component={Portfolio} />
          <Route path='/~perniciaro.lucian/qualifications' component={Qualifications} />
          <Route path='/~perniciaro.lucian/service' component={Service} />
          <Route path='/~perniciaro.lucian/atera2autotask' component={Atera2Autotask} />
          <Route path='/~perniciaro.lucian/clientchecker' component={ClientChecker} />
          <Route path='/~perniciaro.lucian/wakeonwan' component={WakeOnWan} />
          <Route path='/~perniciaro.lucian/ledcube' component={LEDCube} />
          <Route path='/~perniciaro.lucian/dangerbattery' component={DangerBattery} />
          <Route path='/~perniciaro.lucian/smarthome' component={SmartHome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
