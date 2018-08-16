import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';
import 'package:hfilmtrainingapp/app_state.dart';
import 'package:hfilmtrainingapp/features/film/FilmListScreen.dart';
import 'package:hfilmtrainingapp/features/film/film_reducers.dart';
import 'package:hfilmtrainingapp/features/film/film_middleware.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark.copyWith(
      statusBarIconBrightness: Brightness.dark,
      statusBarColor: Colors.transparent,
    ));

    final store = new Store<AppState>(filmReducers, initialState: new AppState(), middleware: [filmMiddleware]);
    return StoreProvider<AppState>(
        store: store,
        child: WidgetsApp(
          color: Colors.blue,
          initialRoute: "/",
          onGenerateRoute: generateRoute,
        ));
  }

  Route<dynamic> generateRoute(RouteSettings r) {
    Route<dynamic> page;
    switch (r.name) {
      case "/":
        page = PageRouteBuilder(pageBuilder: (BuildContext context, _, __) {
          return FilmListScreen();
        });
        break;

//      case "/2":
//        page = PageRouteBuilder(pageBuilder: (BuildContext context, _, __) {
//          return SecondScreen();
//        });
//        break;
    }

    return page;
  }
}
