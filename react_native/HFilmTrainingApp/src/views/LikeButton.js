import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
export default class LikeButton extends Component{

  render() {
    let image;
    let title;
    let style;
    if (this.props.like) {
      image = require('../assets/image/ic_like_orange.png');
      title = 'Đã thích';
      style = styles.liked_title;
    } else {
      image = require('../assets/image/ic_like.png');
      title = 'Thích';
      style = styles.like_title;
    }

    return (
        <TouchableOpacity
          style={[styles.parent, this.props.style]}
          onPress={this.props.onPress}>
          <Image
            source={image}
          />
          <Text style={style}>{title}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  like_title: {
    // fontSize: 13,
    marginLeft: 3,
    color: 'white',
  },

  liked_title: {
    marginLeft: 3,
    color: 'orange',
  }
});


// const mapStateToProps = (state, ownProps) => {
//   // console.log(state);
//   // return state
//   let s = {
//     like: state.film
//   };
//
//   console.log(s);
//   return s;
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   onclickLike: (like) => dispatch(onclickLike(like))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);
