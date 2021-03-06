import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class MainView extends Component{

  render() {
    return (
      <SafeAreaView
        forceInset={{bottom: 'never'}}
        style={{flex: 1, backgroundColor: 'orange'}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/image/bg.png')}>
          {this.props.children}
        </ImageBackground>
      </SafeAreaView>)
  }
}