import './App.css';
import React from 'react';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import Notfound from './routes/Notfound';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
