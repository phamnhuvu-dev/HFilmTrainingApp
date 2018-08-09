import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from "../../../views/Button";

export default class LoginScreen extends Component{

  render() {
    return (
      <View style={[styles.parent, this.props.style]}>
        <Text style={styles.title}>{this.props.children}</Text>
        <Button style></Button>
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