

import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './styles';

export default class App extends Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <Navigator  /> 
      </Provider>
    )
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});