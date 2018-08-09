/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import React, { Component } from 'react';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';

import FilmListScreen from './src/features/film/film_list/FilmListScreen'
import FilmDetailScreen from "./src/features/film/film_detail/FilmDetailScreen";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Reducers from "./src/Reducers";

const RootStack = createStackNavigator({
  FilmList: {
    screen: FilmListScreen,
    navigationOptions: { header: null }
  },

  FilmDetail: {
    screen: FilmDetailScreen,
    navigationOptions: {header: null}
  },

  initialRouteName: 'FilmList'
});

let store = createStore(Reducers);

const App = () => (
  <Provider store={store}>
    <RootStack/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
