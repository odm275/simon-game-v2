function getPlayerIndex(turn, action){
    switch(action.type) {
        case 'ADD_TURN': {
            return turn.findIndex(
                (t) => t.player === action.player
            );
        }
        default : {
            return turn
        }
    }
}


function playerTurnReducer(state = [
    {
        player: 'human',
        turns: turnReducer(undefined, []), 
        active: true

    },
    {
        player:'computer',
        turns: turnReducer(undefined, []),
    }
], action){
    switch(action.type){
        case 'ADD_TURN': {
            //find index of player to pick correct object.
            const playerTurn = getPlayerIndex(state, action);
            const oldTurns  = state[playerTurn];
            const active = action.player;
            console.log(active);

        
            const newTurn = {
                ...oldTurns,
                turns: turnReducer(oldTurns.turns, action),
                active:(active==='human') ? true : false,
            };
            console.log(newTurn.active);
            return [
             ...state.slice(0, playerTurn),
            newTurn,
             ...state.slice(
                 playerTurn + 1, state.length
             ),  
            ];
        }
        default: {
            return state;
        }
    }
}

function turnReducer(state = [], action){
    switch(action.type) {
        case 'ADD_TURN': {
            const newTurn = calculateTurn(action);
            return state.concat(newTurn);
        }
        default: {
            return state;
        }
    }
}

function calculateTurn(action){
    let newTurn;
    switch(action.player){
        case "human" :{
            //console.log(action)
            newTurn = action.id; //Human turn doesn't need a function, too simple.
            return newTurn
        }
        case "computer" : {
            newTurn = calculateComputerTurn();
            return newTurn            
        }
        default:{
            return 'error';
        }
        
    }
    
}

//Calculates Computer Turn.
function calculateComputerTurn() {
    let Turn;
    switch(Math.floor((Math.random() * 4))){
        case 0:
        Turn = 'green';
        return Turn;
        
        case 1:
        Turn = 'red';
        return Turn;
        
        case 2:
        Turn = 'blue'
        return Turn;
        
        default:
        Turn = 'yellow'
        return Turn;        
    }

}
export default playerTurnReducer;
