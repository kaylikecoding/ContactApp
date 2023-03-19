import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email, phone} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        
      </div>
      
    </div>
  );
};

export default ContactCard;