import React from 'react';
import { CounterViewModel } from './components/CounterViewModel';
import './App.css'; 

const CounterApp = () => {
  const {
    count,
    isAutoIncrementEnabled,
    increase,
    decrease,
    reset,
    toggleAutoIncrement
  } = CounterViewModel();

  return (
    <div className="counter-app">
      <h1>Counter: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggleAutoIncrement}>
        {isAutoIncrementEnabled ? 'Disable Auto Increment' : 'Enable Auto Increment'}
      </button>
    </div>
  );
};

export default CounterApp;
