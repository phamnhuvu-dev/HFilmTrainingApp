import 'package:flutter/material.dart';

class LikeButton extends StatelessWidget {

  final bool like;
  final onTap;
  LikeButton({Key key, @required this.like, @required this.onTap}): super(key: key);

  @override
  Widget build(BuildContext context) {
    var image;
    var text;

    if (like) {
      image = Image.asset("assets/images/ic_like_orange@3x.png", height: 15.0, width: 15.0);
      text = Container(
        margin: EdgeInsets.only(left: 3.0),
        child: Text("Đã thích", style: TextStyle(color: Colors.orange),),
      );
    } else {
      image = Image.asset("assets/images/ic_like@3x.png", height: 15.0, width: 15.0);
      text = Container(
        margin: EdgeInsets.only(left: 3.0),
        child: Text("Thích", style: TextStyle(color: Colors.white),),
      );
    }

    return
      GestureDetector(
        onTap: onTap,
        child: Row(
          children: <Widget>[
            image,
            text
          ],
        ),
      );

  }
}