import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      {count === 10 && <p style={{ color: 'red', fontWeight: 'bold' }}>End of the count</p>}
      <button onClick={incrementCount} disabled={count === 10}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
