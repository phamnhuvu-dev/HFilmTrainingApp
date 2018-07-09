import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class MainView extends Component{

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/image/bg.png')}>
        <SafeAreaView style={{flex: 1}}>
          {this.props.children}
        </SafeAreaView>
      </ImageBackground>)
  }
}