import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {


  render(){
    const {disabled, onPress, style, title} = this.props;
    return (
      <TouchableOpacity 
        disabled={disabled} 
        activeOpacity={0.5}
        onPress={onPress} >
        <View style={[styles.container, style]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b3ae8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    maxHeight: 45,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});