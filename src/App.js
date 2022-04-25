import './App.css';
import React, { useState, useEffect } from 'react';
import { Router, Link, Redirect } from "@gatsbyjs/reach-router";
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import FourOhFour from './components/404/FourOhFour';

function App() {
  const NotFound = () => <div>This page does not exist <FourOhFour/></div>;
  return (
    <div className="App">
      <nav>

      </nav>
        <div className="appContent">  
        <Router>
        <Home path="/"/>
        <Portfolio path="/portfolio"/>
        <Contact path="/contact"/>
        <NotFound default />
        </Router> 
        </div>
    </div>
  );
}

export default App;
