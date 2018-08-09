import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class TitleFrame extends Component{

  render() {
    return (
      <View style={[styles.parent, this.props.style]}>
        <Text style={styles.title}/>
        <View style={styles.line}/>
        {this.props.children}
        <View style={styles.line}/>
        <Image
          style={styles.close_button}
          source={require('../assets/image/btnClose.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {

  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },

  line: {
    height: 1,
    width: '100%',
    color: 'white'
  },

  close_button: {
    height: 30,
    width: 30,
  }
});