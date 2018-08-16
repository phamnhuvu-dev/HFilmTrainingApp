import 'dart:async';

import 'package:redux/redux.dart';
import 'package:hfilmtrainingapp/app_state.dart';
import 'package:hfilmtrainingapp/features/film/FilmUseCase.dart';
import 'package:hfilmtrainingapp/features/film/film_reducers.dart';

Future filmMiddleware(Store<AppState> store, action, NextDispatcher next) async {
  next(action);
  if (action is FetchFilmsAction) {
    FilmUseCase.getFilm(1)
        .then((films) => store.dispatch(AddFilmsAction(films)));
  }
}