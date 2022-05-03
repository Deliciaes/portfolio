import React from "react";
import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 5% 0px 5%;
  margin-bottom: 20px;
  max-width: 800px;
  background-color: #2d173b;
  margin-left: 1%;
  margin-right: 1%;

  img {
    border-radius: 0px 5% 0px 0px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  padding: 1%;
`;

const ProjectLinks = styled.div`
  display: flex;

  a {
    color: orange;
    margin-right: 2%;
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
        <img src={props.image} alt={props.imageAlt} />
        <Content>
          <h2>{props.title}</h2>
          <ProjectLinks>
            <a href={props.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={props.demo} target="_blank" rel="noreferrer">
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
        </Content>
      </Project>
    </>
  );
};

export default PortfolioCard;
