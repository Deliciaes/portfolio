import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  align-self: flex-start;

  ul {
    padding: 0;
  }

  ul > li {
    display: inline-block;
    padding: 0px;
    margin: 3rem;
    font-size: 22px;
  }

  li a {
    color: orange;
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
