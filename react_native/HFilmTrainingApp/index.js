/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
import FilmListScreen from './src/features/film/film_list/FilmListScreen'

const RootStack = createStackNavigator({
  FilmList: {
    screen: FilmListScreen,
    navigationOptions: { header: null }
  },
  initialRouteName: 'FilmList'
});

AppRegistry.registerComponent(appName, () => RootStack);
