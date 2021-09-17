import React from 'react';

const App = () => {

  const exampleText = 'Click Here!';

  const handleClick = ()=> {
    alert('A named function was used to show this alert');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2 onClick={handleClick}>
        {exampleText}
      </h2>
    </div>
  );
};

export default App;

// React includes event handlers like onClick, onPress, and onSubmit