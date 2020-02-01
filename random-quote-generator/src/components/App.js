import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import QuoteGenerator from './QuoteGenerator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <QuoteGenerator />
      </Provider>
    );
  }
}

export default App;
