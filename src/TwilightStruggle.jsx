import React, { Component } from 'react';
import AllCards, {compare} from './data/AllCards';
import CardArea from './components/CardArea';
import Locations from './constants/Locations';
import 'bootstrap/dist/css/bootstrap.css';
import Helpers from './data/Helpers';
import 'react-select/dist/react-select.css';
import Stages from './constants/Stages';
import PreviousAction from './components/PreviousAction';
import AllCardsTable from './components/AllCardsTable'

class TwilightStruggle extends Component {
  constructor(props){
    super(props);
    this.move = this.move.bind(this);
    this.addStage = this.addStage.bind(this);
    this.reshuffle = this.reshuffle.bind(this);
    this.undo = this.undo.bind(this);
    let stagesAdded={};
    stagesAdded[Stages.MID_WAR] = false;
    stagesAdded[Stages.LATE_WAR] = false;
    this.state = {
      allCards: [...AllCards],
      stagesAdded: stagesAdded,
      actions: []
    };
  }

  move(toMove, fromLocation, newLocation){
    let newCards = Helpers.move.selected(toMove, this.state.allCards, newLocation);
    let newActions = this.state.actions;
    newActions.push({
      type: 'move',
      cards: toMove,
      fromLocation: fromLocation,
      newLocation: newLocation
    });
    this.setState({
      allCards: newCards.sort(compare),
      actions: newActions
    });
  }

  undo(action){
    let newCards = [];
    let newStagesAdded = this.state.stagesAdded;
    console.log(action);
    if(action.type === 'move'){
      newCards = Helpers.move.selected(action.cards, this.state.allCards, action.fromLocation).sort(compare);
    }else{
      newCards = Helpers.move.allOf('stage', action.type, this.state.allCards, Locations.NOT_IN_PLAY).sort(compare);
      newStagesAdded[action.type] = false;
    }
    let newActions = this.state.actions;
    newActions.pop();
    this.setState({
      allCards: newCards,
      actions: newActions,
      stagesAdded: newStagesAdded
    });
  }

  addStage(e){
    let newStagesAdded = this.state.stagesAdded;
    newStagesAdded[e.target.id] = true;
    let newActions = this.state.actions;
    newActions.push({type: e.target.id});
    this.setState({
      allCards: Helpers.move.allOf('stage', e.target.id, this.state.allCards, Locations.DECK).sort(compare),
      stagesAdded: newStagesAdded,
      actions: newActions
    });
  }

  reshuffle(){
    let cardsInDiscard = Helpers.get.cardsInLocation(Locations.DISCARD, this.state.allCards);
    if(cardsInDiscard.length > 0){
        this.move(cardsInDiscard, Locations.DISCARD, Locations.DECK);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <h1 className='col-xl-12 jumbotron text-center'>
            Twilight Struggle Card Tracker
          </h1>
        </div>
        <div className='row'>
          <div className='col-xl-12 text-center'>
            <button type='button' className='btn btn-primary btn-sm' onClick={this.reshuffle}>Reshuffle</button>
            {!this.state.stagesAdded[Stages.MID_WAR] &&
              <button type='button' id={Stages.MID_WAR} className='ml-1 btn btn-primary btn-sm' onClick={this.addStage}>Add Mid-War</button>
            }
            {!this.state.stagesAdded[Stages.LATE_WAR] &&
              <button type='button' id={Stages.LATE_WAR} className='ml-1 btn btn-primary btn-sm' onClick={this.addStage}>Add Late-War</button>
            }
          </div>
        </div>
        <br/>
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
        <br/>
        <div className='row'>
          <div className='col-xl-6'>
            {this.state.actions.length > 0 &&
              <PreviousAction action={this.state.actions[this.state.actions.length - 1]} undo={this.undo} />
            }
          </div>
          <div className='col-xl-6'>
            <AllCardsTable allCards={this.state.allCards}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TwilightStruggle;
