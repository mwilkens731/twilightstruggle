import React, { Component } from 'react';
import AllCards from './data/AllCards';

class TwilightStruggle extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: AllCards
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default TwilightStruggle;
