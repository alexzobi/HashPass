import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity, Text, TextInput} from 'react-native';
import {Button} from '../utility components';
import {hash} from '../utility functions';
import store from '../store';

export default class Check extends Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      hashedPass:'',
      user: store.getState()
    }
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState({user: store.getState()}));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleClick = ()=>{
    const { account, user } = this.state;
    const { salt, length } = user.details.accounts[account];
    const hashedPass = hash(user.password, salt, length);
    this.setState({hashedPass});
  }

  render(){
    const { navigate } = this.props.navigation;
    const { hashedPass } = this.state;
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text)=>this.setState({account: text})} 
                   placeholder='Account'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput style={[styles.input, {fontSize:15}]} 
                   value={hashedPass ? hashedPass:"Your Password"}
                   underlineColorAndroid='transparent' />
        <Button style={styles.hash} 
                title="Check It!" 
                onPress={this.handleClick}/>

        <TouchableOpacity style={styles.leave} 
                          onPress={()=>navigate('Menu')}>
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
    backgroundColor: '#E8423F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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