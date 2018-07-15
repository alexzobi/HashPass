import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from '../utility components'

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render(){
    console.log(styles.button)
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text)=>this.setState({username: text})} 
                   placeholder='Username' 
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.setState({password: text})} 
                   placeholder='Password' 
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <Button title="Log In" />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 275,
    height: 50,
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    color: 'white',
    width: 100,
    height: 20,
    margin: 10,
    borderRadius: 10,
  }
});