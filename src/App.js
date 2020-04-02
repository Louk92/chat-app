import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact
      name = "Mamed" 
      avatar = 'https://randomuser.me/api/portraits/men/39.jpg'
      online
      />
      <Contact
      name = "Mohamed" 
      avatar = 'https://randomuser.me/api/portraits/men/40.jpg'
      offline
      />
      <Contact
      name = "Aurelien" 
      avatar = 'https://randomuser.me/api/portraits/men/62.jpg'
      online 
      />
      <ContactList/>
    </div>
  );
}

export default App;
