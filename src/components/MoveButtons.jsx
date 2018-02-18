import React from 'react';
import PropTypes from 'prop-types';
import Locations from '../constants/Locations';

class MoveButtons extends React.Component{
  constructor(props){
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(e){
    this.props.move(e.target.id);
  }

  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Move To...
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.props.area !== Locations.DECK &&
            <a href='#nogo' className="dropdown-item" id={Locations.DECK} onClick={this.handleMove}>Deck</a>
          }
          {this.props.area !== Locations.MY_HAND &&
            <a href='#nogo' className="dropdown-item" id={Locations.MY_HAND} onClick={this.handleMove}>My Hand</a>
          }
          {this.props.area !== Locations.OPP_HAND &&
            <a href='#nogo' className="dropdown-item" id={Locations.OPP_HAND} onClick={this.handleMove}>Opponent Hand</a>
          }
          {this.props.area !== Locations.DISCARD &&
            <a href='#nogo' className="dropdown-item" id={Locations.DISCARD} onClick={this.handleMove}>Discard</a>
          }
          {this.props.area !== Locations.RFG &&
            <a href='#nogo' className="dropdown-item" id={Locations.RFG} onClick={this.handleMove}>Removed From Game</a>
          }
        </div>
      </div>

    );


  }
}

MoveButtons.propTypes = {
  area: PropTypes.string,
  move: PropTypes.func
};

export default MoveButtons;
