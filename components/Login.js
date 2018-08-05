import React, {Component} from 'react';
import {StyleSheet, View, 
        TextInput, Image, 
        TouchableOpacity, Text,
        AsyncStorage} from 'react-native';
import {Button} from '../utility components';
import store, { setUser } from '../store';
import { hash } from '../utility functions';

const initialState = {
  username: "",
  password: "",
  passHide: "",
  reEnter: "",
  reEnterHide: "",
  login: true,
  salt: "",
};

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState(store.getState()))
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleClick = async ()=>{
    const {username, password, reEnter, salt} = this.state;
    const { navigate } = this.props.navigation;
    if(this.state.login){
      try {
        let {username,password} = this.state
        let user = await AsyncStorage.getItem(username);
        user = JSON.parse(user);
        console.log('login',user);
        if(user.hashedPass===hash(password, salt, 50)){
          store.dispatch(setUser(username, password, user));
          navigate('Menu');
        } else {
          this.setState(initialState);
          alert('Back, you fiend of Hell!!!');
        }
      }
      
      catch(error){
        this.setState(initialState);
        alert('User Does Not Exist');
      } 
    } else {
      try {
        let user = await AsyncStorage.getItem(username)
        user = JSON.parse(user);
        if (user===null){
          if(password===reEnter){
            let hashedPass = hash(password, salt, 50);
            user = {hashedPass,accounts:{}};
            store.dispatch(setUser(username, password, user));
            AsyncStorage.setItem(username, JSON.stringify(user))
            navigate('Menu');
          } else {
            this.setState(initialState);
            alert('Passwords Do Not Match');
          }
        } else {
          this.setState(initialState);
          alert('User already exists');
        }
      } 
      
      catch(error){
        alert(error);
      }   
    }
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

  hideReEnter = (text)=>{
    let {reEnter, reEnterHide} = this.state;
    if(text.length<reEnter.length){
      reEnter = reEnter.substr(0,text.length);
    } else {
      reEnter += text[text.length-1];
    }
    reEnterHide = "*".repeat(reEnter.length);
    this.setState({reEnterHide,reEnter});
  }

  toggleLogin = () =>{
    let status = this.state.login;
    this.setState({login: !status})
  }
  
  render(){
    const {username,login, passHide,reEnterHide, salt} = this.state;
    return (
      <View style={styles.container}>
        <Image resizeMethod='auto' style={styles.logo} 
               source={require('../public/images/combo.png')} />
        <TextInput onChangeText={(username)=>this.setState({username})} 
                   placeholder='Username'
                   value={username} 
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(text)=>this.hidePassword(text)}
                   value={passHide} 
                   placeholder='Password'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        <TextInput onChangeText={(salt)=>this.setState({salt})}
                   value={salt} 
                   placeholder='Salt'
                   underlineColorAndroid='transparent' 
                   style={styles.input}/>
        { login ? null : 
          <TextInput onChangeText={(text)=>this.hideReEnter(text)}
                     value={reEnterHide} 
                     placeholder='Re-Enter Pass'
                     underlineColorAndroid='transparent' 
                     style={styles.input}/>
        }
        <Button onPress={this.handleClick}style={styles.login} title={login? "Log In" : "Create Account"} />
        <TouchableOpacity style={styles.signup} onPress={this.toggleLogin}>
          <Text>{login? "Create Account" : "Log In"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup} onPress={()=>AsyncStorage.clear()}>
          <Text>Clear Storage</Text>
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
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 275,
    height: 50,
    textAlign: 'center',
    fontSize: 30,
  },
  login: {
    width: 200,
    height: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  logo: {
    width: 275,
    height: 450,
    position: 'absolute',
  },
  signup: {
    padding: 10
  }
});