import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const clickEvent = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  const { next, operation, total } = state;
  return (

    <div className="calcu">
      <p>Lets do some Math.</p>
      <div className="claculatorrr">
        <div className="calculator-screen">

          { total }
          { operation }
          { next }
        </div>
        <div className="calculator-keys">
          <button type="button" className="all-clear" value="all-clear" onClick={clickEvent}>AC</button>
          <button type="button" onClick={clickEvent}>+/-</button>
          <button type="button" onClick={clickEvent}>%</button>
          <button type="button" className="operator" value="/" onClick={clickEvent}>&divide;</button>
          <button type="button" value="7" onClick={clickEvent}>7</button>
          <button type="button" value="8" onClick={clickEvent}>8</button>
          <button type="button" value="9" onClick={clickEvent}>9</button>
          <button type="button" className="operator" value="×" onClick={clickEvent}>×</button>
          <button type="button" value="4" onClick={clickEvent}>4</button>
          <button type="button" value="5" onClick={clickEvent}>5</button>
          <button type="button" value="6" onClick={clickEvent}>6</button>
          <button type="button" className="operator" value="-" onClick={clickEvent}>-</button>
          <button type="button" value="1" onClick={clickEvent}>1</button>
          <button type="button" value="2" onClick={clickEvent}>2</button>
          <button type="button" value="3" onClick={clickEvent}>3</button>
          <button type="button" className="operator" value="+" onClick={clickEvent}>+</button>
          <button type="button" value="0" className="zero" onClick={clickEvent}>0</button>
          <button type="button" className="decimal" value="." onClick={clickEvent}>.</button>

          <button type="button" className="operator" value="=" onClick={clickEvent}>=</button>

        </div>
      </div>
    </div>
  );
};
export default Calculator;
