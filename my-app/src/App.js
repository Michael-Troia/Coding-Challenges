import React, { useState } from 'react';
import ContactCard from './Components/ContactCard';
import './style.css';

const App = () => {

  const exampleText = 'Click Here!';

  const handleClick = ()=> {
    alert('A named function was used to show this alert');
  }

  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pann", email: "peter.pan@neverland.com", age: 100 }
  ];

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar="https://via.placeholder.com/150"
          name={contact.name}
          email={contact.email}
          age={contact.age}
        />
      ))};
    </>
  );
};

export default App;

// React includes event handlers like onClick, onPress, and onSubmit
// event handlers can use functions previously stored as variables by using curly braces onClick={handleClick}