import React, { Component } from 'react';
import AllCards, {compare} from './data/AllCards';
import CardArea from './components/CardArea';
import Locations from './constants/Locations';
import 'bootstrap/dist/css/bootstrap.css';
import Helpers from './data/Helpers';
import 'react-select/dist/react-select.css';
import Stages from './constants/Stages';

class TwilightStruggle extends Component {
  constructor(props){
    super(props);
    this.move = this.move.bind(this);
    this.addMidWar = this.addMidWar.bind(this);
    this.addLateWar = this.addLateWar.bind(this);
    this.reshuffle = this.reshuffle.bind(this);
    this.state = {
      allCards: [...AllCards],
      midWarAdded: false,
      lateWarAdded: false
    };
  }
  
  move(toMove, newLocation){
    let newCards = Helpers.move.selected(toMove, this.state.allCards, newLocation);
    this.setState({allCards: newCards.sort(compare)});
  }
  
  addMidWar(){
    this.setState({
      allCards: Helpers.move.allOf('stage', Stages.MID_WAR, this.state.allCards, Locations.DECK).sort(compare),
      midWarAdded: true
    }); 
    console.log(AllCards);
  }
  
  addLateWar(){
    this.setState({
      allCards: Helpers.move.allOf('stage', Stages.LATE_WAR, this.state.allCards, Locations.DECK).sort(compare),
      lateWarAdded: true
    });
  }
  
  reshuffle(){
    this.setState({
      allCards: Helpers.move.allOf('location', Locations.DISCARD, this.state.allCards, Locations.DECK).sort(compare)
    });
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col-xl-3'>
            <CardArea name={Locations.DECK} cards={Helpers.get.cardsInLocation(Locations.DECK, this.state.allCards)} move={this.move}/>
          </div>
          <div className='col-xl-3'>
            <CardArea name={Locations.MY_HAND} cards={Helpers.get.cardsInLocation(Locations.MY_HAND, this.state.allCards)} move={this.move}/>
          </div>
          <div className='col-xl-3'>
            <CardArea name={Locations.OPP_HAND} cards={Helpers.get.cardsInLocation(Locations.OPP_HAND, this.state.allCards)} move={this.move}/>
          </div>
          <div className='col-xl-3'>
            <CardArea name={Locations.DISCARD} cards={Helpers.get.cardsInLocation(Locations.DISCARD, this.state.allCards)} move={this.move}/>
          </div>
        </div>
        <br/><br/>
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <button type='button' className='btn btn-primary btn-sm' onClick={this.reshuffle}>Reshuffle</button>
            {!this.state.midWarAdded &&
              <button type='button' className='ml-1 btn btn-primary btn-sm' onClick={this.addMidWar}>Add Mid-War</button>
            }
            {!this.state.lateWarAdded &&
              <button type='button' className='ml-1 btn btn-primary btn-sm' onClick={this.addLateWar}>Add Late-War</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TwilightStruggle;
