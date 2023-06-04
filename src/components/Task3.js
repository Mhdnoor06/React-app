import React, { useState } from 'react';

const Task3 = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleButtonClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isTrue ? 'red' : 'blue', color: 'white' }}
        onClick={handleButtonClick}
      >
        Toggle Button
      </button>
    </div>
  );
};

export default Task3;
