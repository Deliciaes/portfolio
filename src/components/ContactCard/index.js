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
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 2px;
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
`;

const ContactCard = (props) => {
  return (
    <Contact>
      <Title>
        <div>
          <h2>{props.name}</h2>
          <div>{props.role}</div>
          <div>{props.location}</div>
        </div>
      </Title>
      <Socials>
        <div>
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            <img src={GitHub} width="20px" alt="github icon" /> /Deliciaes
          </a>
        </div>
        <div>
          <a href={props.linkedinUrl} target="_blank" rel="noreferrer">
            <img src={LinkedIn} width="20px" alt="linkedin icon" />{" "}
            /in/emma.ramstedt
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
