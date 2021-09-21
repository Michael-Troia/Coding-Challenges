import React, { useState } from 'react';
import ContactCard from './Components/ContactCard';
import './style.css';

const App = () => {

  const exampleText = 'Click Here!';

  const handleClick = ()=> {
    alert('A named function was used to show this alert');
  }

  const [contacts, setContacts] = useState([]);

  fetch("https://randomuser.me/api/?results=3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setContacts(data.results);
  });

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))};
    </>
  );
};

export default App;

// React includes event handlers like onClick, onPress, and onSubmit
// event handlers can use functions previously stored as variables by using curly braces onClick={handleClick}