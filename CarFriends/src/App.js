/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppContent from './AppContent';

import configureStore from './store';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
    );
  }
}
