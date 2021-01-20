import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './utils/configureStore';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
