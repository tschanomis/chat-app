import React from 'react';
import Contact from './Contact.js';

const contacts = [
  {
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    name: "Alicia Young",
    online: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Kenzi Weaver",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Clyde Henry",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Gilbert Miller",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Clayton Lopez",
    online: false
  },
];

const ContactList = () => (
  <div>
    {contacts.map(item => (
  <Contact avatar={item.avatar} name={item.name} online={item.online} />
))}
    </div>
);

export default ContactList;
