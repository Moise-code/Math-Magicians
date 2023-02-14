/* eslint-disable import/no-cycle */
// import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <input type="text" value={0} />
      <div className="calcu">
        <Calculator class="all-clear" value="A/C" />
        <Calculator value="+/-" />
        <Calculator value="%" />
        <Calculator class="operator" value="/" />
        <Calculator value="7" />
        <Calculator value="8" />
        <Calculator value="9" />
        <Calculator class="operator" value="*" />
        <Calculator value="4" />
        <Calculator value="5" />
        <Calculator value="6" />
        <Calculator class="operator" value="-" />
        <Calculator value="1" />
        <Calculator value="2" />
        <Calculator value="3" />
        <Calculator class="operator" value="+" />
        <Calculator value="0" />
        <Calculator class="decimal" value="." />
        <Calculator class="equal-sign" value="=" />
      </div>

    </div>
  );
}

export default App;
