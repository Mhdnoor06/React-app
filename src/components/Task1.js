import React, { useState } from 'react';

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [cicleColor, setCircleColor] = useState('');
  const [buttonColor, setButtonColor] = useState('#38d9c1');

  const handleClick = () => {
    setCount(count + 1);
    setCircleColor(buttonColor);
    setButtonColor('#' + Math.floor(Math.random() * 16777215).toString(16)); // Generate random color
  };

  return (
    <div class="main">
      <div class="square">
        <div class="circle" style={{ backgroundColor: cicleColor }}>
          <h1>{count}</h1>
          <a href="">Click Here</a>
        </div>
      </div>
      <button
        className="button"
        onClick={handleClick}
        style={{ backgroundColor: buttonColor }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Task1;
