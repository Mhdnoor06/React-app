import React, { useState } from 'react';
import B from './B';

const A = () => {
  const [cendol, setCendol] = useState(2);

  const handleIncrement = () => {
    setCendol(cendol + 10);
  };

  return (
    <div>
      <B cendol={cendol} handleIncrement={handleIncrement} />
    </div>
  );
};

export default A;
