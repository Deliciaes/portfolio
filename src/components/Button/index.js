import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MyButton = styled.button`
  font-size: 18px;
  padding: 6px 20px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  color: white;
  font-weight: bold;
  display: inline-block;
  width: max-content;
  margin: 20px;
  cursor: pointer;

  :hover {
    border-color: orange;
    color: orange;
  }
`;

const Button = (props) => {
  return <MyButton>{props.buttonText}</MyButton>;
};

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonText: "Portfolio",
};

export default Button;
