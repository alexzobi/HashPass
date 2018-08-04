import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity, Text, TextInput} from 'react-native';
import {Button} from '../utility components';
import {hash} from '../utility functions';

export default class Hash extends Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      salt: '',
      length: null
    }
  }

  handleClick = ()=>{
    let password = '';
    let {salt, length} = this.state;

    const key = hash(password, salt, length);
    alert(key);
  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text)=>this.setState({account: text})} 
                   placeholder='Account'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.setState({salt: text})} 
                   placeholder='Salt'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.setState({length: text})} 
                   placeholder='Length'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <Button style={styles.hash} 
                title="Hash It!" 
                onPress={this.handleClick}/>

        <TouchableOpacity style={styles.leave} 
                          onPress={()=>goBack()}>
          <Text>Back to Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leave} 
                          onPress={()=>navigate('Login')}>
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
  leave: {
    padding: 10
  }
});