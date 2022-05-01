import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import profilePhoto from "../../assets/images/emma.jpeg";
import styled from "styled-components";
import DecoFunctionStart from "../../DecoFunctionStart";
import DecoFunctionEnd from "../../DecoFunctionEnd";

const HomeImage = styled.img.attrs({
  src: `${profilePhoto}`,
})`
  border-radius: 50%;
  width: 50%;
  margin: 10px;
`;

const Home = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

const HomeCard = (props) => {
  return (
    <>
      <DecoFunctionStart />
      <Home>
        <h1>{props.name}</h1>
        <HomeImage />
        <div>{props.role}</div>
        <div>
          <Link to="/portfolio">
            <Button></Button>
          </Link>
        </div>
      </Home>
      <DecoFunctionEnd />
    </>
  );
};

export default HomeCard;
