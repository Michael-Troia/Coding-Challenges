import React from 'react';

const App = () => {

  const exampleText = 'Click Here!'
  return (
    <div>
      <h1>Hello World</h1>
      <h2 onClick={()=> alert('You have clicked!')}>
        {exampleText}
      </h2>
    </div>
  );
};

export default App;