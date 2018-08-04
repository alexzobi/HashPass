import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Login, Menu,Hash  } from './components';
import { createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator(
  {
    Login,
    Menu,
    Hash
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
