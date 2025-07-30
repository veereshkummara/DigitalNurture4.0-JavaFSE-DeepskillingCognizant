import React from 'react';

function ClickHandler() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <h2>Event Handling in React</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickHandler;
