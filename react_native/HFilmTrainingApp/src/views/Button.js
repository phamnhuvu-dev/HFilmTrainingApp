import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component{

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.parent, this.props.style]}>
        <Text style={styles.title}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  }
});