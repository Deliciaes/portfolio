
import React from "react";
import './homecard.css';
import { Link } from "react-router-dom";
import Button from "../Button";


const HomeCard = (props) => {
    return(
        <div className="home">
        <h1>EMMA RAMSTEDT</h1>
        <div>Full Stack Developer</div>
        <div><Link to="/portfolio"><Button>hej</Button></Link></div>
        </div>
    )
};

export default HomeCard;