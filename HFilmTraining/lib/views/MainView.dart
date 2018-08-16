import 'package:flutter/material.dart';

class MainView extends StatelessWidget {

  final Widget child;

  MainView({Key key, @required this.child}): super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.orange,
        child: SafeArea(
          bottom: false,
          child: Container(
            decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage("assets/images/bg@3x.png"),
                    fit: BoxFit.fill)),
            child: child
          ),
        )
    );
  }
}
