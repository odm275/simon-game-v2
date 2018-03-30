import React from 'react';
import Buttons from '../constants/Buttons';

const GameButtons = (props) => {
    const styleButtons = Buttons.map((button,index) =>{
       const id = button[0].props.id; 
        return (
            <div
            key={index} 
            className = {props.checkHumanTurn ? 'active button' : 'button'}
            onMouseDown={() => props.onMouseDown(id)}
            onMouseUp = {() => props.onMouseUp()}
            >
                {button}
            </div>
        );
    });
    return(
        styleButtons
    )
};

export default GameButtons;