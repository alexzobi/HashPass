import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity, Text} from 'react-native';
import {Button} from '../utility components';

export default class Menu extends Component{

  render(){
    const { navigate } = this.props.navigation;
    const password = this.props.navigation.getParam('password','');
    const user = this.props.navigation.getParam('user','');
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Button style={styles.hash} 
                  title="Hash A Pass" 
                  onPress={()=>navigate('Hash',{user, password})}/>
          <Button style={styles.check} 
                  title="Check A Pass" 
                  onPress={()=>navigate('Check',{user, password})}/>
          <Button style={styles.help} 
                  title="Explain To Me" 
                  onPress={()=>console.log("HALLLPPPP")}/>
          <TouchableOpacity style={styles.logout} 
                            onPress={()=>navigate('Login')}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
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
  menu: {
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