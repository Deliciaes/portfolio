import React from "react";
import LinkedIn from "../../assets/images/linkedin.png";
import GitHub from "../../assets/images/github.svg";
import styled from "styled-components";

const Contact = styled.div`
  background-color: antiquewhite;
  width: 580px;
  height: 280px;
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 2px;
`;

const Break = styled.div`
  flex-basis: 100%;
  width: 0;
  text-align: center;
`;

const Socials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 5px;
  a {
    color: black;
    text-decoration: 0;
  }
  a:hover {
    color: #fc50b2;
  }
  img {
    vertical-align: middle;
  }
`;

const ContactCard = (props) => {
  return (
    <Contact>
      <div>logo</div>
      <div>{props.name}</div>
      <Break>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div>{props.role}</div>
        <div>{props.location}</div>
      </Break>
      <Socials>
        <div>
          <a href={props.githubUrl} target="_blank">
            <img src={GitHub} width="20px" /> /Deliciaes
          </a>
        </div>
        <div>
          <a href={props.linkedinUrl} target="_blank">
            <img src={LinkedIn} width="20px" /> /in/emma.ramstedt
          </a>
        </div>
        <div>
          <a href="mailto:emma.ramstedt@gmail.com">{props.mailto}</a>
        </div>
      </Socials>
    </Contact>
  );
};

export default ContactCard;
