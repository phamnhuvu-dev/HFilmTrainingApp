import {Component} from "react";
import {BackHandler, StyleSheet, Text, View} from "react-native";
import Button from "../views/Button";
import React from "react";

export default class LoginScreen extends Component{

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!this.state.isBacking) {
        this.state.isBacking = true;
        this.props.navigation.exitApp(); // works best when the goBack is async
      }
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
}