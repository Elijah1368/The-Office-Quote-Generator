import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import CardMenu from './CardMenu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CardMenu />
      </Provider>
    );
  }
}

export default App;
