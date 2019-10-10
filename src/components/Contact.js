import React from 'react';
import './Contact.css';

function Contact(props) {
  return(
    <div className="Contact">
      <img className="avatar" src={props.avatar}/>
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <p className="status-text">
            <span className={props.online ? "status-online" : "status-offline"}></span>
            {props.online ? "online" : "offline"}
          </p>
        </div>
     </div>
  </div>
  );
}

export default Contact;