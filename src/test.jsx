import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const name = "John Doe"; // Replace this with the name you want to display

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

// Render the React component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
