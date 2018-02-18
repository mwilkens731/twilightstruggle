import React from 'react';
import PropTypes from 'prop-types';
import { optionize } from '../data/AllCards';
import Select from 'react-select';
import MoveButtons from './MoveButtons';

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
      <div className='container border border-primary'>
        <div className='row'>
          <div className='text-center col-xl-12'><strong>{this.props.name}</strong></div>
        </div>
        <br/>
        <div className='row'>
          <div className='col-xl-8'>
            <Select autosize={false} placeholder='Click To Expand...' multi closeOnSelect={false} value={this.state.selectedCards} options={optionize(this.props.cards)} onChange={this.handleSelectionChange} />
          </div>
          <div className='col-xl-4'>
            <MoveButtons area={this.props.name} move={this.move} />
          </div>
          <br/><br/><br/>
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
