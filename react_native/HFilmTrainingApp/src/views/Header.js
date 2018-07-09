import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component{

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.title}>{this.props.children}</Text>
        <View style={styles.underline}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  parent: {
    height: 56,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  underline: {
    height: 1,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
  }
});