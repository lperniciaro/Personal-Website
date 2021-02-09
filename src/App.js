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



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          /**Fix this so you can refresh the page */
          <Route path='/' exact component={Home}/>
          <Route path='/about-me' component={AboutMe} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/qualifications' component={Qualifications} />
          <Route path='/service' component={Service} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
