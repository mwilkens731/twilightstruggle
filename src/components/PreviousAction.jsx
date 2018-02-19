import React from 'react';
import PropTypes from 'prop-types';

class PreviousAction extends React.Component {
  constructor(props){
    super(props);
  }

  //TODO add popover for other moved cards. add undo button.

  render(){
    if(this.props.action.type === 'move'){
      return (
        <div className='row text-center'>
          <div className='col-xl-12'>
            Previous Action: Moved {this.props.action.cards[0].name} to {this.props.action.newLocation}
          </div>
        </div>
      );
    }
    else{
      return(
        <div className='row text-center'>
          <div className='col-xl-12'>
            Previous Action: {this.props.action.type} cards added.
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
