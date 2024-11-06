// App.jsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      {/* Render Greeting with a name and custom message */}
      <Greeting name="John">Welcome to our website!</Greeting>

      {/* Render Greeting without a name to show "Hello World" */}
      <Greeting>Thank you for visiting!</Greeting>
    </div>
  );
};

export default App;
