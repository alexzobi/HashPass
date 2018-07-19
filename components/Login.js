import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {Button} from '../utility components';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      passHide: ""
    };
  }

  handleClick = ()=>{
    const {username, password} = this.state;
    console.log(username, password)
  }

  hidePassword = (text)=>{
    let {password, passHide} = this.state;
    if(text.length<password.length){
      password = password.substr(0,text.length);
    } else {
      password += text[text.length-1];
    }
    passHide = "*".repeat(password.length);
    this.setState({passHide,password});
  }
  
  render(){
    console.log(this.state.password);
    return (
      <View style={styles.container}>
        <Image resizeMethod='auto' style={styles.image} 
               source={require('../public/images/combo.png')} />
        <TextInput onChangeText={(text)=>this.setState({username: text})} 
                   placeholder='Username' 
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.hidePassword(text)}
                   value={this.state.passHide} 
                   placeholder='Password'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <Button onPress={this.handleClick}style={styles.button} title="Log In" />
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
    width: 200,
    height: 20,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    margin: 25,
    width: 175,
    height: 275
  }
});