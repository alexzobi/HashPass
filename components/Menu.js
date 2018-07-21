import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity, Text} from 'react-native';
import {Button} from '../utility components';

export default class Menu extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Button style={styles.hash} 
                title="Hash A Pass" 
                onPress={()=>console.log("Hash that shizz")}/>
        <Button style={styles.check} 
                title="Check A Pass" 
                onPress={()=>console.log("check")}/>
        <Button style={styles.help} 
                title="Explain To Me" 
                onPress={()=>console.log("HALLLPPPP")}/>
        <TouchableOpacity style={styles.logout} 
                          onPress={()=>console.log('logout')}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  hash: {
    backgroundColor: '#2EE826',
    margin: 10
  },
  check: {
    backgroundColor: '#E8D207',
    margin: 10
  },
  help: {
    backgroundColor: '#E8423F',
    margin: 10
  },
  logout: {
    padding: 10
  }
});