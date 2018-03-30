import React, { Component } from 'react';
import './App.css';
import { Provider} from 'react-redux';
import store from './store';
import Game from './containers/Game';
class App extends Component {
  render() {
    return (
    <Provider store = {store}>
      <Game/>
    </Provider>
    );
  }
}

export default App;
