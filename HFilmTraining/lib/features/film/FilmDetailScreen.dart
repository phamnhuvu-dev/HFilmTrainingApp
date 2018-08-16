import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:hfilmtrainingapp/app_state.dart';
import 'package:hfilmtrainingapp/datas/film/Film.dart';
import 'package:hfilmtrainingapp/features/film/film_reducers.dart';
import 'package:hfilmtrainingapp/views/DescriptionMore.dart';
import 'package:hfilmtrainingapp/views/Header.dart';
import 'package:hfilmtrainingapp/views/LikeButton.dart';
import 'package:hfilmtrainingapp/views/MainView.dart';
import 'package:hfilmtrainingapp/views/VideoWidget.dart';

class FilmDetailScreen extends StatelessWidget {
  final int _index;
  final _store;
  static const platform = const MethodChannel('last_screen');

  FilmDetailScreen(this._index, this._store) {
    platform.invokeMethod('is_not_last_screen').then((value) => print(value));
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
        child: MainView(
            child: StoreConnector<AppState, Film>(
                converter: (store) => store.state.films[_index],
                builder: (context, film) =>
                    Container(
                      child: Column(
                        children: <Widget>[
                          Header(
                            title: film.englishTitle,
                          ),
                          Expanded(
                              child: ListView(
                            shrinkWrap: true,
                            children: <Widget>[
                              Container(
                                margin: EdgeInsets.all(10.0),
                                child: Column(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: <Widget>[
                                    Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: <Widget>[
                                        Image.network(
                                          film.image,
                                          height: 160.0,
                                          width: 100.0,
                                          fit: BoxFit.fill,
                                        ),
                                        Flexible(
                                            child: Container(
                                                padding:
                                                    EdgeInsets.only(left: 10.0),
                                                child: Column(
                                                  mainAxisAlignment:
                                                      MainAxisAlignment
                                                          .spaceBetween,
                                                  children: <Widget>[
                                                    Column(
                                                      crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .stretch,
                                                      children: <Widget>[
                                                        Text(film.vietnamTitle,
                                                            maxLines: 1),
                                                        Text(
                                                          "Lượt xem: ${film.views}",
                                                          maxLines: 1,
                                                          overflow: TextOverflow
                                                              .ellipsis,
                                                          textAlign:
                                                              TextAlign.justify,
                                                        ),
                                                        Text(
                                                            "Genres: ${film.category}"),
                                                        Text(
                                                            "Actor: ${film.actor}"),
                                                        Text(
                                                            "Director: ${film.director}"),
                                                        Text(
                                                            "Manufacturer: ${film.manufacturer}"),
                                                        Text(
                                                            "Thời lượng phim: ${film.duration} phút"),
                                                      ],
                                                    ),
                                                    Row(
                                                      crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .center,
                                                      mainAxisAlignment:
                                                          MainAxisAlignment
                                                              .spaceBetween,
                                                      children: <Widget>[
                                                        LikeButton(
                                                          like: film.like,
                                                          onTap: () =>
                                                              _store.dispatch(
                                                                  LikeFilmAction(
                                                                      film)),
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                )))
                                      ],
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(top: 20.0),
                                      child: DescriptionMore(
                                          data: film.description),
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(
                                          top: 20.0, bottom: 20.0),
                                      height: 1.0,
                                      color: Colors.white70,
                                    ),
                                    Container(
                                      margin: EdgeInsets.only(bottom: 10.0),
                                      child: Text(
                                        "XEM TRAILER",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Colors.orange),
                                      ),
                                    ),
                                    VideoWidget(
                                      link: film.link,
                                    )
                                  ],
                                ),
                              )
                            ],
                          )),
                        ],
                      ),
                    ))),
        onWillPop: () {
          platform.invokeMethod('is_last_screen');
          Navigator.pop(context);
        });
  }
}
