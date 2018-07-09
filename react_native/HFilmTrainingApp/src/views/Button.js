import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Button extends Component{

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View style={[styles.parent, this.props.style]}>
        <Text style={styles.title}>{this.props.children}</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  parent: {
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