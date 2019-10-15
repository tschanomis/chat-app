import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online, 
    };
  }
  render () {
  return(
    <div className="Contact">
      <img className="avatar" src={this.props.avatar}/>
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status">
          <p className="status-text">
            <span className={this.state.online ? "status-online" : "status-offline"} 
              onClick={event => {
              const newVal = !this.state.online;
              this.setState({online: newVal});
              }}></span>
            {this.state.online ? "online" : "offline"}
          </p>
        </div>
     </div>
  </div>
  );
  }
}

export default Contact;