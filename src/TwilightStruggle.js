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
      </div>
    );
  }
}

export default TwilightStruggle;
