import React, {Component, PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, StatusBar, BackHandler, NativeModules} from 'react-native';

import Header from "../../../views/Header";
import Button from "../../../views/Button";
import MainView from "../../../views/MainView";
import LikeButton from "../../../views/LikeButton";
import connect from "react-redux/es/connect/connect";
import {addFilm, clickLike, fetchFilm, requestFilms} from "../film-reducers";
import Repository from "../../../datas/Repository";
import {fetchFilms} from "./film-list-controller";



class FilmListScreen extends Component {

  constructor(props) {
    super(props);
    // let filmState = this.props.screenProps.getState().FilmReducers;
    this.state = {
      isBacking: false,
      films: this.props.filmState.films,
      page: this.props.filmState.page,
    };

    console.log(this.state);
  }



  _loadMore = () => {
    fetchFilms(this.state)
      .then(films => this.setState({}))
      .catch(error => console.log());
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      NativeModules.LastScreen.setIsLastScreen();
    }
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!this.state.isBacking) {
        this.state.isBacking = true;
        this.props.navigation.goBack(); // works best when the goBack is async
      }
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }


  render() {
    console.log(this.props.screenProps.getState());
    this.state.films = this.props.filmState.films;
    if (this.state.films.length === 0) {
      this._loadMore();
    }
    // console.log(this.state);
    return (
      <MainView style={{flex: 1}}>
        <StatusBar backgroundColor="orange" />
        <Header>HFilm</Header>
        <FlatList
          data={this.state.films}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={this._loadMore}
          onEndReachedThreshold={1/this.state.films.length}
        />
      </MainView>
    )
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => {
    return (
      <View style={itemStyles.container}>
        <Image
          style={itemStyles.poster}
          source={{uri: item.image}}
        />
        <View style={itemStyles.content}>
          <Text numberOfLines={1} style={itemStyles.title} >{item.englishTitle}</Text>
          <Text numberOfLines={1} style={itemStyles.title} >{item.vietnamTitle}</Text>
          <Text style={[itemStyles.text, {fontStyle: 'italic'}]}>Lượt view: {item.views}</Text>
          <Text numberOfLines={5} style={itemStyles.text}>{item.description}</Text>
          <View style={itemStyles.buttons_parent}>
            <LikeButton
              onPress={() => {
                item.like = !item.like;
                this.setState({})
              }}
              style={itemStyles.like_button}
              index={index}
              like={item.like}>Thích</LikeButton>
            <Button
              onPress={() => this.props.navigation.push('FilmDetail', {film: item})}
              style={itemStyles.watch_button}>Xem phim</Button>
          </View>
        </View>
        <View style={itemStyles.separator}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

const itemStyles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    margin: 10
  },

  poster: {
    height:160,
    width: 100,
  },

  content: {
    marginLeft: 10,
    flex: 1,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  text: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 14,
  },

  buttons_parent: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center'
  },

  like_button: {
    position: 'absolute',
  },

  watch_button: {
    height: 40,
    backgroundColor: 'orange',
    alignSelf: 'flex-end'
  },

  separator: {
    height: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff99'
  }
});

const mapStateToProps = (state) => {
  console.log("state");
  console.log(state.FilmReducers);
  return {
    filmState: state.FilmReducers,
  };
};

export default connect(mapStateToProps, null)(FilmListScreen);