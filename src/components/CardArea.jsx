import React from 'react';
import PropTypes from 'prop-types';
import { optionize } from '../data/AllCards';
import Select from 'react-select';
import MoveButtons from './MoveButtons';
import Sides from '../constants/Sides';
import Helpers from '../data/Helpers';

class CardArea extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.move = this.move.bind(this);
    this.state = {
      selectedCards: []
    }
  }

  handleSelectionChange(e){
    this.setState({selectedCards: e});
  }

  move(destination){
    this.props.move(this.state.selectedCards, destination);
    this.setState({selectedCards: [] });
  }

  render(){
    return (
      <div className='container border border-secondary'>
        <div className='row'>
          <div className='text-center col-xl-12 mt-2'><strong>{this.props.name}</strong></div>
        </div>
        <br/>
        <div className='row'>
          <div className='col-xl-8'>
            <Select autosize={false} placeholder='Click To Expand...' multi closeOnSelect={false} value={this.state.selectedCards} options={optionize(this.props.cards)} onChange={this.handleSelectionChange} />
          </div>
          <div className='col-xl-4'>
            <MoveButtons area={this.props.name} move={this.move} />
          </div>
          </div>
          <div className='row pt-4 pb-4'>
            <div className='col-xl-12'>
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                  Total Cards
                  <span className="badge badge-info badge-light">{this.props.cards.length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Scoring Cards
                  <span className="badge badge-info">{Helpers.get.cardsOnSide(Sides.SCORE, this.props.cards).length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  US Events
                  <span className="badge badge-info">{Helpers.get.cardsOnSide(Sides.US, this.props.cards).length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  USSR Events
                  <span className="badge badge-info">{Helpers.get.cardsOnSide(Sides.USSR, this.props.cards).length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Dual Events
                  <span className="badge badge-info">{Helpers.get.cardsOnSide(Sides.BOTH, this.props.cards).length}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

CardArea.propTypes= {
  name: PropTypes.string,
  cards: PropTypes.array,
  move: PropTypes.func
}

export default CardArea;
