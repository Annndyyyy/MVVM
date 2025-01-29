import { useState, useEffect } from 'react';

export const CounterViewModel = () => {
  const [count, setCount] = useState(0);
  const [isAutoIncrementEnabled, setIsAutoIncrementEnabled] = useState(false);

  const increase = () => {
    setCount(prevCount => (prevCount < 98 ? prevCount + 1 : 98));
  };

  const decrease = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  const toggleAutoIncrement = () => {
    setIsAutoIncrementEnabled(prevState => !prevState);
  };

  useEffect(() => {
    let interval;
    if (isAutoIncrementEnabled) {
      interval = setInterval(() => {
        setCount(prevCount => (prevCount < 98 ? prevCount + 1 : 98));
      }, 1100); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isAutoIncrementEnabled]);

  return {
    count,
    isAutoIncrementEnabled,
    increase,
    decrease,
    reset,
    toggleAutoIncrement
  };
};
