/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import React, { Component } from 'react';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';

import FilmListScreen from './src/features/film/film_list/film-list-screen'
import FilmDetailScreen from "./src/features/film/film_detail/film-detail-screen";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from "./src/reducers";
import FilmState from "./src/features/film/film-state";
import Page from "./src/datas/page";

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

let store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <RootStack screenProps={store}/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
