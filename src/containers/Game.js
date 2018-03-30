import React, { Component } from 'react';
import GameButtons from '../components/GameButtons';
import { connect } from 'react-redux';

class Game extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <DisplayGameButtons/>
        )
    }
}

const mapStateToGameButtonsProps = (state) => {
    //Computer History of Turns.
    const checkHumanTurn = state.playersTurns[0].player;
    console.log(state);

    return checkHumanTurn;
};

const mapDispatchToGameButtonsProps = (dispatch) => (
    {
      onMouseDown: (id) => (
        dispatch({
            type: 'ADD_TURN',
            player: 'human',
            id: id
          })
      ),
      onMouseUp: () => (
          dispatch({
            type: 'ADD_TURN',
            player: 'computer',
          })
      ),
    }
  );

  const DisplayGameButtons = connect(
    mapStateToGameButtonsProps,
    mapDispatchToGameButtonsProps
  )(GameButtons);

export default Game;