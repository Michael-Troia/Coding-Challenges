import React, { useState } from 'react';
import ContactCard from './Components/ContactCard';
import './style.css';

const App = () => {

  const exampleText = 'Click Here!';

  const handleClick = ()=> {
    alert('A named function was used to show this alert');
  }

  return (
    <>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
    </>
  );
};

export default App;

// React includes event handlers like onClick, onPress, and onSubmit
// event handlers can use functions previously stored as variables by using curly braces onClick={handleClick}