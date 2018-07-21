import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.style = props.style;
    this.onPress = props.onPress;
    }

  render(){
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onPress} >
        <View style={[styles.container, this.style]}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006FFF',
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