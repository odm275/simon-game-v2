import { createStore, combineReducers } from 'redux';
import playersTurns  from './reducers/playersReducer';
const reducer = combineReducers({
    playersTurns,
});

export default createStore(reducer);

