import 'dart:io';

import 'package:flutter/material.dart';

class Header extends StatelessWidget {

  final bool isHideBackButton;
  final String title;

  Header({Key key, this.title = "HFilm", this.isHideBackButton = false}): super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 48.0,
      color: Colors.orange,
      child: Stack(
        children: <Widget>[
          Center(
            child: Text(
              title,
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                  fontSize: 16.0
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Container(
              height: 2.0,
              color: Colors.white,
            ),
          ),
          Align(
              alignment: Alignment.centerLeft,
              child: isHideBackButton || Platform.isAndroid? null: GestureDetector(
                onTap: () => Navigator.pop(context),
                child: Icon(Icons.keyboard_arrow_left, color: Colors.white, size: 36.0,),
              )
          ),
        ],
      ),
    );
  }
}
