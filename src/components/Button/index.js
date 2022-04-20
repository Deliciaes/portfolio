import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
return (
        <button onClick={props.onClick} className="button">
          {props.buttonText}
        </button>)
  };

// Set which props this component takes
Button.propTypes = {
    buttonText: PropTypes.string,
  };
  
  // Set default props in case no props were passed to the component
  Button.defaultProps = {
    buttonText: "Portfolio",
  };


export default Button;
