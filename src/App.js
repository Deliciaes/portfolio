import './App.css';
import React, { useState } from 'react';
import { Router, Link, Redirect } from "@gatsbyjs/reach-router";
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';

function App() {
  const NotFound = () => <div>This page does not exist</div>;
  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">   
        <Router>
        <Home path="/"/>
        <Portfolio path="/portfolio"/>
        <Contact path="/contact"/>
        <NotFound default />
        </Router>
        </nav>
      </header>
    </div>
  );
}

export default App;
