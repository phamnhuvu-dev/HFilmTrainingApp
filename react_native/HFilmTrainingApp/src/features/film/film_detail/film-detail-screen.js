import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  NativeModules,
  WebView,
  Dimensions,
  ScrollView
} from 'react-native';

import Header from "../../../views/Header";
import Button from "../../../views/Button";
import MainView from "../../../views/MainView";
import LikeButton from "../../../views/LikeButton";
import {clickLike, syncData} from "../film-reducers";
import {connect} from 'react-redux';

class FilmDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBacking: false,
      film: this.props.navigation.getParam('film'),
      width: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      NativeModules.LastScreen.setIsNotLastScreen();
    }
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.screenProps.dispatch(syncData(this.state, "FILM_DETAIL"));
      this.props.navigation.goBack();
      return true;
    });
  }

  componentWillUnmount() {

    if (Platform.OS === 'android') {
      NativeModules.LastScreen.setIsLastScreen();
    }
    this.backHandler.remove();
  }

  render() {

    let item = this.state.film;
    if (item === undefined) return (
      <MainView style={{flex: 1}}>

      </MainView>
    );
    console.log("render");
    return (
      <MainView style={{flex: 1, alignItems: 'baseline'}}>
        <Header>{item.englishTitle}</Header>
        <ScrollView style={{padding: 10}}>
          <View style={styles.container}>
            <Image
              style={styles.poster}
              source={{uri: item.image}}
            />
            <View style={styles.content}>
              <Text numberOfLines={1} style={styles.title}>{item.vietnamTitle}</Text>
              <Text style={[styles.text, {fontStyle: 'italic'}]}>Lượt view: {item.views}</Text>
              <Text numberOfLines={5} style={styles.text}>{item.description}</Text>
              <View style={styles.buttons_parent}>
                <LikeButton
                  onPress={() => {
                    item.like = !item.like;
                    this.setState({});
                    // this.props.screenProps.dispatch(clickLike(item.id))
                    // this.props.clickLike(item.id);
                  }}
                  style={styles.like_button}
                  like={item.like}>Thích</LikeButton>
                <Button
                  onPress={() => {
                    this.props.navigation.push('FilmDetail', {id: item.id})
                  }}
                  style={styles.watch_button}>Xem phim</Button>
              </View>
            </View>
          </View>
          <Text style={styles.text}>{item.description}</Text>
          <Text style={[styles.text, {alignSelf: 'flex-end', textDecorationLine: 'underline',}]}>Xem thêm</Text>
          <View style={styles.separator}/>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>XEM TRAILER</Text>
          <WebView
            javaScriptEnabled
            domStorageEnabled
            style={{height: this.state.width * (315 / 560), width: this.state.width, backgroundColor: 'transparent'}}
            source={{html: `<iframe width="${this.state.width}" height="${this.state.width * (315 / 560)}" style="margin: -8px" src="https://www.youtube.com/embed/UGDMPazbrP4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}/>
        </ScrollView>
      </MainView>
    )
  }
}


const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    item: (state.FilmReducers.films.filter(film => film.id === props.navigation.getParam('id')))[0]
  }
};

const mapDispatchToProps = (dispatch) => ({
  clickLike: (id) => dispatch(clickLike(id)),
});

export default connect(null, null)(FilmDetailScreen);

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
  },

  poster: {
    height: 160,
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
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
    backgroundColor: '#ffffff99'
  }
});