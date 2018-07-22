import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity, Text, TextInput} from 'react-native';
import {Button} from '../utility components';

export default class Hash extends Component{
  constructor(props){
    super(props);
    this.state = {
      salt: "",
    }
  }

  handleClick = ()=>{
    let password = 'Ang3lpup';
    let salt = this.state.salt;
    // const key = pbkdf2Sync(password, salt, 100000, 24, 'sha512');
    // alert(key.toString('hex'));
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text)=>this.setState({salt: text})} 
                   placeholder='Add Salt'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <Button style={styles.hash} 
                title="Hash It!" 
                onPress={this.handleClick}/>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 275,
    height: 50,
    textAlign: 'center',
    fontSize: 30,
    
  },
  hash: {
    width: 200,
    height: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
});