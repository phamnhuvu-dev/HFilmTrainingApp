import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

import Header from "../../../views/Header";
import {SafeAreaView} from "react-navigation";
import Button from "../../../views/Button";
import FastImage from "react-native-fast-image";
import FilmListViewModel from "./FilmListViewModel";
import MainView from "../../../views/MainView";


export default class FilmListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewmodel: new FilmListViewModel(),
      loadmore: "fail"
    }
  }

  componentDidMount() {
    this.state.viewmodel
      .loadFilms()
      .then((result) => {
        if (result === 0) {
          this.setState({
            loadmore: "fail"
          });
          console.log("fail load")
        } else {
          this.setState({
            loadmore: "success"
          });
          console.log("success");
          console.log(this.state.viewmodel.films)
        }
      })
  }


  render() {
    return (
      <MainView style={{flex: 1}}>
        <Header>HFilm</Header>
        <FlatList
          data={this.state.viewmodel.films}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </MainView>
    )
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = () => (
    <View style={{flexDirection: 'row'}}>
      <FastImage style={itemStyles.poster} source={{
        uri: 'http://dev.bsp.vn:8081/training-movie/upload/movie/sdasdasda.jpg',
        priority: FastImage.priority.normal
      }}/>
      <View style={itemStyles.content}>
        <Text>Title English</Text>
        <Text>Title VietNam</Text>
        <Text>Views</Text>
        <Text>Description</Text>
        <View style={itemStyles.buttons_parent}>
          <Text style={itemStyles.like_button}>Thích</Text>
          <Button style={itemStyles.watch_button}>Xem phim</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

const itemStyles = StyleSheet.create({
  poster: {
    height:160,
    width: 100,
  },

  content: {
    flex: 1,
  },

  buttons_parent: {
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
  }
});
