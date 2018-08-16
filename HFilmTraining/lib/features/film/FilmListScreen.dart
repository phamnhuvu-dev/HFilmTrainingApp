import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:hfilmtrainingapp/app_state.dart';
import 'package:hfilmtrainingapp/datas/film/Film.dart';
import 'package:hfilmtrainingapp/features/film/FilmDetailScreen.dart';
import 'package:hfilmtrainingapp/features/film/film_reducers.dart';
import 'package:hfilmtrainingapp/views/Header.dart';
import 'package:hfilmtrainingapp/views/LikeButton.dart';
import 'package:hfilmtrainingapp/views/MainView.dart';

class FilmListScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _State();
  }
}

class _State extends State<FilmListScreen> {
  ScrollController controller;
  var store;

  @override
  void initState() {
    print("init");
    controller = ScrollController()..addListener(_scrollListener);
    super.initState();
  }

  @override
  void dispose() {
    controller.removeListener(_scrollListener);
    super.dispose();
  }

  void _scrollListener() {
    if (controller.position.extentAfter == 0) {
      store.dispatch(FetchFilmsAction());
    }
  }

  @override
  Widget build(BuildContext context) {

    return MainView(
      child: Column(
        children: <Widget>[
          Header(isHideBackButton: Platform.isIOS? true: false,),
          StoreConnector<AppState, List<Film>>(
            onInit: (store) {
              this.store = store;
              if (store.state.films.length == 0) {
                store.dispatch(FetchFilmsAction());
                print("load more");
              }
            },
            converter: (store) => store.state.films,
            builder: (context, list) => Flexible(
                child: ListView.builder(
                    controller: controller,
                    scrollDirection: Axis.vertical,
                    itemCount: list.length,
                    itemBuilder: (context, index) {
                      return FilmRow(list[index], index, this.store);
                    })),
          )
        ],
      ),
    );
  }
}

class FilmRow extends StatelessWidget {
  final Film _film;
  final int _index;
  final _store;

  FilmRow(this._film, this._index, this._store);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Image.network(
            _film.image,
            height: 160.0,
            width: 100.0,
            fit: BoxFit.fill,
          ),
          Flexible(
              child: Container(
                  padding: EdgeInsets.only(left: 10.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(_film.englishTitle, maxLines: 1),
                          Text(
                            _film.vietnamTitle,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.justify,
                          ),
                          Text(_film.views.toString()),
                          Text(
                            _film.description,
                            maxLines: 5,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.justify,
                          )
                        ],
                      ),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          LikeButton(
                            like: _film.like,
                            onTap: () {
                              _store.dispatch(LikeFilmAction(_film));
                            },
                          ),
                          FlatButton(
                            color: Colors.orange,
                            child: Text(
                              "Xem phim",
                              style: TextStyle(color: Colors.white),
                            ),
                            onPressed: () {
                              Navigator.push(
                                context,
                                PageRouteBuilder(
                                  opaque: false,
                                  pageBuilder: (BuildContext context, _, __) =>
                                      FilmDetailScreen(_index, _store),
                                ),
                              );
                            },
                          )
                        ],
                      )
                    ],
                  )
              )
          )
        ],
      ),
    );
  }
}
