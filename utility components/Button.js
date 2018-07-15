import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state ={
      style: {},
    }
    // console.log('props keys', Object.keys(props))


    // this.color = style.color || 'white'
    // this.backgroundColor = style.backgroundColor || 
    // this.color = style.color;
    // this.borderRadius = style.borderRadius;
    // this.margin =style.margin || 0;
    // this.width = style.width || 100;
    // this.height = style.height || 5;
    
    // this.title = props.title;

  }
  componentDidMount(props){
    console.log('style keys', props)

  }

  render(){
    console.log('styles at button', this.state.style)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006FFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    width: 250,
    maxHeight: 45,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});