/* eslint-disable import/no-cycle */
// import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder={0} />
      <Calculator value="A/C" />
      <Calculator value="+/-" />
      <Calculator value="%" />
      <Calculator value="/" />
      <Calculator value="7" />
      <Calculator value="8" />
      <Calculator value="9" />
      <Calculator value="*" />
      <Calculator value="4" />
      <Calculator value="5" />
      <Calculator value="6" />
      <Calculator value="-" />
      <Calculator value="1" />
      <Calculator value="2" />
      <Calculator value="3" />
      <Calculator value="+" />
      <Calculator value="0" />
      <Calculator value="." />
    </div>
  );
}

export default App;
