import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Login, Menu,Hash  } from './components';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Login,
    Menu,
    Hash
  },
  {
    initialRouteName: 'Login'
  }
);

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RootStack />
//       </View>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8423F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
