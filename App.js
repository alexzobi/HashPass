import React from 'react';
import { Login, Menu, Hash, Check, Help } from './components';
import { createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator(
  {
    Login,
    Menu,
    Hash,
    Check,
    Help
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  setScreenOrientation() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }
  render() {
    this.setScreenOrientation();
    return <RootStack />
  }
}
