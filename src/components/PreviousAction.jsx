import React from 'react';
import PropTypes from 'prop-types';

class PreviousAction extends React.Component {
  constructor(props){
    super(props);
    this.processUndo = this.processUndo.bind(this);
    this.getOtherCardNames = this.getOtherCardNames.bind(this);
  }

  processUndo(){
    this.props.undo(this.props.action);
  }

  getOtherCardNames(){
    let otherCards = "";
    this.props.action.cards.forEach((card) =>{
      otherCards += card.name;
    });
    return otherCards;
  }

  //TODO add popover for other moved cards.

  render(){
    if(this.props.action.type === 'move'){
      let otherCardName = this.getOtherCardNames();
      return (
        <div className='row text-center'>
          <div className='col-xl-12'>
            <span>Previous Action: Moved <strong>{this.props.action.cards[0].name}</strong></span>
              {this.props.action.cards.length > 1 &&
                <span>
                  &nbsp;and <a tabIndex='0' role='button' data-toggle="popover" data-trigger="focus" data-content={otherCardName}>
                        {this.props.action.cards.length - 1} other</a>
                </span>
              }
            <span>&nbsp;to <strong>{this.props.action.newLocation}</strong></span>
            <button type='button' className='ml-1 btn btn-primary btn-sm' onClick={this.processUndo}>Undo</button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className='row text-center'>
          <div className='col-xl-12'>
            <span>Previous Action: <strong>{this.props.action.type}</strong> cards added.</span>
            <button type='button' className='ml-1 btn btn-primary btn-sm' onClick={this.processUndo}>Undo</button>
          </div>
        </div>
      );
    }
  }
}

PreviousAction.propTypes = {
  action: PropTypes.object,
  undo: PropTypes.func
};

export default PreviousAction;
