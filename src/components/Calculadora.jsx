import React, { useState } from 'react';
import './Calculadora.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator === null) {
      setCurrentValue(display);
      setOperator(op);
      setDisplay('0');
    }
  };

  const handleEqualsClick = () => {
    if (operator && currentValue !== '') {
      const result = calculate(parseFloat(currentValue), parseFloat(display), operator);
      setDisplay(result.toString());
      setCurrentValue('');
      setOperator(null);
    }
  };

  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 0;
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '='].map((value, index) => (
          <button key={index} onClick={() => {
            if (typeof value === 'number') {
              handleNumberClick(value.toString());
            } else if (value === '=') {
              handleEqualsClick();
            } else {
              handleOperatorClick(value);
            }
          }}>{value}</button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
