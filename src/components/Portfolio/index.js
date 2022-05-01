import React from "react";
import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  padding: 10px;
  border-radius: 0px 5% 0px 5%;
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    color: orange;
  }

  a:hover {
    color: #fc50b2;
  }
`;

const Stack = styled.span`
  font-style: oblique;
`;

const PortfolioCard = (props) => {
  return (
    <>
      <Project>
        <h2>{props.title}</h2>
        <ProjectLinks>
          <a href={props.github} target="_blank">
            GitHub
          </a>
          <a href={props.demo} target="_blank">
            Demo
          </a>
        </ProjectLinks>
        <div>{props.description}</div>
        <div>
          <p>
            <Stack>Stack:</Stack> {props.stack}
          </p>
          {props.created}
        </div>
      </Project>
    </>
  );
};

export default PortfolioCard;
