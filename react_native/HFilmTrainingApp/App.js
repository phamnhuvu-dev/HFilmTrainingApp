/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import FilmListScreen from './src/features/film/film_list/film-list-screen'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/features/film/redux/reducers'

const RootStack = createStackNavigator({
  FilmList: {
    screen: FilmListScreen,
    navigationOptions: { header: null }
  },
  initialRouteName: 'FilmList'
});

let store = createStore(reducers);

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <RootStack/>
        </Provider>
    );
  }
}