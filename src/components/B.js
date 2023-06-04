import React from 'react';

const B = ({ cendol, handleIncrement }) => {
  const handleClick = () => {
    handleIncrement();
  };

  return (
    <div>
      <div>Value of cendol: {cendol}</div>
      <button onClick={handleClick}>Increment Value</button>
    </div>
  );
};

export default B;
