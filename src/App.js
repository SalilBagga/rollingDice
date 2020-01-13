import React, { Component } from 'react';
import './App.css';
// import Clicker from './Clicker.js';
import Die from './Die.js';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clicker /> */}
        <RollDice />
      </div>
    );
  }
}

export default App;
