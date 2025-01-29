import React, { useState, useEffect } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0); 
  const [autoIncrement, setAutoIncrement] = useState(false); 

  useEffect(() => {
    let timer;
    if (autoIncrement) {
      
      timer = setInterval(() => {
        setCount((prevCount) => (prevCount < 98 ? prevCount + 1 : prevCount));
      }, 1100);
    } else {
      clearInterval(timer); 
    }

    return () => clearInterval(timer); 
  }, [autoIncrement]);

  const increment = () => {
    if (count < 98) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleAutoIncrement = () => {
    setAutoIncrement((prev) => !prev);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggleAutoIncrement}>
        {autoIncrement ? 'Disable Auto Increment' : 'Enable Auto Increment'}
      </button>
    </div>
  );
};

export default CounterApp;
