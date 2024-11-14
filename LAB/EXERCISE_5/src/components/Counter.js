import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // State to keep track of the counter value and step input
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Handler functions for increment and decrement
  const handleIncrement = () => {
    setCount(count + Number(step));
  };

  const handleDecrement = () => {
    setCount(count - Number(step));
  };

  // Handler to update the step value based on user input
  const handleStepChange = (event) => {
    const value = event.target.value;
    setStep(value ? parseInt(value, 10) : 1); // Default to 1 if input is empty
  };

  return (
    <div className="counter">
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="counter-controls">
        <button className="btn decrement" onClick={handleDecrement}>-</button>
        <input
          type="number"
          className="step-input"
          value={step}
          onChange={handleStepChange}
          placeholder="Enter step"
        />
        <button className="btn increment" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Counter;
 