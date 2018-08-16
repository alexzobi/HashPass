import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, 
        TouchableOpacity, View,
        Text, TextInput, 
        AsyncStorage, Image,
        Keyboard, BackHandler} from 'react-native';
import {Button} from '../utility components';
import { hash } from '../utility functions';
import store from '../store';

export default class Hash extends Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      salt: '',
      length: null,
      hashedPass: '',
      user: store.getState(),
      invalidLength: false,
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

  validateLength = (num) =>{
    let length = Number(num);
    if(!length || length<12){
      this.setState({invalidLength: true})
    } else {
      this.setState({length, invalidLength:false});
    }
  }

  render(){
    const { navigate } = this.props.navigation;
    const { hashedPass, invalidLength, account, length } = this.state;
    const isDisabled = invalidLength || !account.length || !length ? true : false;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image resizeMethod='scale' style={styles.logo} 
               source={require('../public/images/background.png')} />
        <TextInput onChangeText={(text)=>this.setState({account: text, salt: text})} 
                   placeholder='Account'
                   maxLength={14}
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        {
          invalidLength &&
          <Text style={styles.validate}>Please enter values 12-99</Text>
        }
        <TextInput onChangeText={this.validateLength} 
                   placeholder='Password Length'
                   maxLength={2}
                   keyboardType="numeric"
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput style={[styles.input, {fontSize:15}]} 
                   value={hashedPass}
                   multiline
                   placeholder="Result"
                   selectTextOnFocus
                   underlineColorAndroid='transparent' />
        <Button style={styles.hash} 
                title="Hash It!" 
                onPress={this.handleClick}
                disabled={isDisabled}/>
        <TouchableOpacity style={styles.leave} 
                          onPress={()=>navigate('Menu')}>
          <Text>Back to Menu</Text>
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
    minHeight: 50,
    textAlign: 'center',
    fontSize: 30,
    padding: 5,    
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
  },
  validate: {
    height: 50,
    width: 200,
    backgroundColor: '#ffafb3',
    borderColor: '#ff0000',
    fontSize: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#ff0000',
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center'
  },
});