import React from 'react';
import { Login, Menu, Hash, Check } from './components';
import { createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator(
  {
    Login,
    Menu,
    Hash,
    Check
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
