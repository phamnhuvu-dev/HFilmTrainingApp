import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, StatusBar, BackHandler, NativeModules} from 'react-native';

import Header from "../../../views/Header";
import Button from "../../../views/Button";
import FilmListViewModel from "./FilmListViewModel";
import MainView from "../../../views/MainView";
import LikeButton from "../../../views/LikeButton";
import connect from "react-redux/es/connect/connect";
import {addFilm, clickLike} from "../FilmReducers";



class FilmListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBacking: true,
      viewmodel: new FilmListViewModel(),
    }
  }

  _loadMore = () => {
    this.state.viewmodel
      .loadFilms()
      .then((result) => {
        this.props.addFilm(result)
      })
  };

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


  render() {
    if (this.props.films.length === 0) {
      this._loadMore();
    }
    return (
      <MainView style={{flex: 1}}>
        <Header>HFilm</Header>
        <FlatList
          data={this.props.films}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={this._loadMore}
        />
      </MainView>
    )
  }

  _keyExtractor = (item, index) => index.toString();

  // _onItemClickLike = (item) => this.props.onclickLike(item.like);

  _renderItem = ({item, index}) => {
    return (
      <View style={itemStyles.container}>
        <StatusBar backgroundColor="orange" />
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
                this.props.clickLike(item.id)
              }}
              style={itemStyles.like_button}
              index={index}
              like={item.like}>Thích</LikeButton>
            <Button
              onPress={() => {
                this.props.navigation.navigate('FilmDetail', {id: item.id})
              }}
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
  return {
    films: state.FilmReducers
  };
};

const mapDispatchToProps = (dispatch) => ({
  addFilm: (films) => dispatch(addFilm(films)),
  clickLike: (id) => dispatch(clickLike(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);