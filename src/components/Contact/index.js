import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';

const ContactCard = (props) => {
return (
        <div className="contact">
          {props.contactInfo} hej
        </div>
        )
  };


export default ContactCard;
