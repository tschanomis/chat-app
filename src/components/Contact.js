import React from 'react';
import './Contact.css';

function Contact(props) {
  return(
    <div className="Contact">
      <img className="avatar" src={props.avatar}/>
      <div>
       <h4>{props.name}</h4>
       <div className="status">
          <span className={props.online ? "status-online" : "status-offline"}></span>
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
     </div>
  </div>
  );
}

export default Contact;