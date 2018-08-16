import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity,
        Text, Image} from 'react-native';
import {Button} from '../utility components';

export default class Menu extends Component{

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image resizeMethod='scale' style={styles.logo} 
               source={require('../public/images/background.png')} />
        <View style={styles.menu}>
          <Button style={styles.hash} 
                  title="Hash A Pass" 
                  onPress={()=>navigate('Hash')}/>
          <Button style={styles.check} 
                  title="Check A Pass" 
                  onPress={()=>navigate('Check')}/>
          <Button style={styles.help} 
                  title="Explain To Me" 
                  onPress={()=>navigate('Help')}/>
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
    backgroundColor: '#2620eb',
    margin: 10
  },
  check: {
    backgroundColor: '#115fff',
    margin: 10
  },
  help: {
    backgroundColor: '#1eb7ff',
    margin: 10
  },
  logo: {
    position: 'absolute',
  },
  logout: {
    padding: 10
  }
});