import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleNumberClick = (num) => {
    if (isNewCalculation || display === '0') {
      setDisplay(num.toString());
      setIsNewCalculation(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorClick = (operator) => {
    setDisplay(display + ' ' + operator + ' ');
    setIsNewCalculation(false);
  };

  const handleEqualsClick = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
      setIsNewCalculation(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setIsNewCalculation(true);
  };

  const handleMemoryClick = (action) => {
    switch (action) {
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setDisplay(memory.toString());
        break;
      case 'M+':
        setMemory(memory + parseFloat(display));
        break;
      case 'M-':
        setMemory(memory - parseFloat(display));
        break;
      case 'MS':
        setMemory(parseFloat(display));
        break;
      default:
        break;
    }
  };

  const handleSpecialFunction = (func) => {
    const num = parseFloat(display);
    let result;
    switch (func) {
      case 'sqrt':
        result = Math.sqrt(num);
        break;
      case 'square':
        result = num * num;
        break;
      case 'reciprocal':
        result = 1 / num;
        break;
      case 'percent':
        result = num / 100;
        break;
      case 'negate':
        result = -num;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setIsNewCalculation(true);
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    margin: '2px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  };

  const operatorStyle = {
    ...buttonStyle,
    backgroundColor: '#e0e0e0',
  };

  const equalsStyle = {
    ...buttonStyle,
    backgroundColor: '#0078d4',
    color: 'white',
  };

  return (
    <div style={{ width: '300px', margin: 'auto', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px' }}>
      <div style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px', textAlign: 'right', fontSize: '24px', height: '40px', overflow: 'hidden' }}>
        {display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        <button onClick={() => handleMemoryClick('MC')} style={operatorStyle}>MC</button>
        <button onClick={() => handleMemoryClick('MR')} style={operatorStyle}>MR</button>
        <button onClick={() => handleMemoryClick('M+')} style={operatorStyle}>M+</button>
        <button onClick={() => handleMemoryClick('M-')} style={operatorStyle}>M-</button>
        <button onClick={() => handleSpecialFunction('percent')} style={operatorStyle}>%</button>
        <button onClick={handleClearClick} style={operatorStyle}>CE</button>
        <button onClick={handleClearClick} style={operatorStyle}>C</button>
        <button onClick={() => handleSpecialFunction('negate')} style={operatorStyle}>+/-</button>
        <button onClick={() => handleSpecialFunction('reciprocal')} style={operatorStyle}>1/x</button>
        <button onClick={() => handleSpecialFunction('square')} style={operatorStyle}>x²</button>
        <button onClick={() => handleSpecialFunction('sqrt')} style={operatorStyle}>√x</button>
        <button onClick={() => handleOperatorClick('/')} style={operatorStyle}>÷</button>
        <button onClick={() => handleNumberClick(7)} style={buttonStyle}>7</button>
        <button onClick={() => handleNumberClick(8)} style={buttonStyle}>8</button>
        <button onClick={() => handleNumberClick(9)} style={buttonStyle}>9</button>
        <button onClick={() => handleOperatorClick('*')} style={operatorStyle}>×</button>
        <button onClick={() => handleNumberClick(4)} style={buttonStyle}>4</button>
        <button onClick={() => handleNumberClick(5)} style={buttonStyle}>5</button>
        <button onClick={() => handleNumberClick(6)} style={buttonStyle}>6</button>
        <button onClick={() => handleOperatorClick('-')} style={operatorStyle}>-</button>
        <button onClick={() => handleNumberClick(1)} style={buttonStyle}>1</button>
        <button onClick={() => handleNumberClick(2)} style={buttonStyle}>2</button>
        <button onClick={() => handleNumberClick(3)} style={buttonStyle}>3</button>
        <button onClick={() => handleOperatorClick('+')} style={operatorStyle}>+</button>
        <button onClick={() => handleNumberClick(0)} style={{ ...buttonStyle, gridColumn: 'span 2' }}>0</button>
        <button onClick={() => handleNumberClick('.')} style={buttonStyle}>.</button>
        <button onClick={handleEqualsClick} style={equalsStyle}>=</button>
      </div>
    </div>
  );
};

export default Calculator;