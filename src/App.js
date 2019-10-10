import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/53.jpg"
        name="Brandy Murray"
        online="true"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/71.jpg"
        name="Lonnie Hernandez"
        online="false"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/27.jpg"
        name="Stephanie Armstrong"
        online="false"
      />
    </div>
  );
}

export default App;
