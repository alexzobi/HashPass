import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Login, Menu,Hash  } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login /> */}
        {/* <Menu /> */}
        <Hash />
      </View>
    );
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
