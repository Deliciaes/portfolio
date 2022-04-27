import React from "react";
import './navigation.css';
import { Link } from "react-router-dom";


const Navigation = (props) => {
    return(
    <nav>
    <ul>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
    </nav>
    )
};

export default Navigation;