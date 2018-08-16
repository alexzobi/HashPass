import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, 
        TouchableOpacity, 
        Text, TextInput, 
        AsyncStorage, Image,
        Keyboard, BackHandler} from 'react-native';
import {Button} from '../utility components';
import { hash } from '../utility functions';
import store, { logOut } from '../store';

export default class Hash extends Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      salt: '',
      length: null,
      hashedPass: '',
      user: store.getState()
    }
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState({user: store.getState()}));
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    this.unsubscribe();
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Menu');
    return true;
  }

  handleLogOut = () =>{
    store.dispatch(logOut());
    this.props.navigation.navigate('Login');
  }
  
  handleClick = async ()=>{
    Keyboard.dismiss();
    const {salt, length, account, user} = this.state;
    const hashedPass = hash(user.password, salt, length);
    this.setState({hashedPass})
    user.details.accounts[account] = {salt, length};
    try {
      await AsyncStorage.setItem(user.username, JSON.stringify(user.details));
    } catch(error){
      alert(error);
    }   
  }

  render(){
    const { navigate } = this.props.navigation;
    const { hashedPass } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image resizeMethod='scale' style={styles.logo} 
               source={require('../public/images/background.png')} />
        <TextInput onChangeText={(text)=>this.setState({account: text, salt: text})} 
                   placeholder='Account'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.setState({length: text})} 
                   placeholder='Password Length'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput style={[styles.input, {fontSize:15}]} 
              value={hashedPass}
              placeholder="Result"
              underlineColorAndroid='transparent' />
        <Button style={styles.hash} 
                title="Hash It!" 
                onPress={this.handleClick}/>

        <TouchableOpacity style={styles.leave} 
                          onPress={()=>navigate('Menu')}>
          <Text>Back to Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leave} 
                          onPress={this.handleLogOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  logo: {
    position: 'absolute',
  },
  leave: {
    padding: 10
  }
});