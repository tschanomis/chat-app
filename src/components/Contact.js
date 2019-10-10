import React from 'react';
import './Contact.css';

function Contact(props) {
  return(
    <div className="Contact">
    <img className="avatar" src={props.avatar}/>
    <div>
      <h4>{props.name}</h4>
      <div className="status"> 
        <p className="status-text">
          <div className={props.online ? "status-online" : 'status-offline'}></div>
          {props.online ? "Online" : 'Offline'}
        </p>
      </div>
     </div>
  </div>
  );
}

export default Contact;