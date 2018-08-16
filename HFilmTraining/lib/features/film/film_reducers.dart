
import 'package:hfilmtrainingapp/app_state.dart';
import 'package:hfilmtrainingapp/datas/film/Film.dart';

class AddFilmsAction {
  final List<Film> films;

  AddFilmsAction(this.films);
}

class LikeFilmAction {
  final Film film;
  LikeFilmAction(this.film);
}

class FetchFilmsAction {
}


AppState filmReducers (AppState state, dynamic action) {

  if (action is AddFilmsAction) {
    return new AppState(films: List.from(state.films)..addAll(action.films));

  } else if (action is LikeFilmAction) {
    int id = action.film.id;
    return new AppState(films: state.films.map((film) {
      if (film.id == id) {
        film.like = !film.like;
        print(film.id);
      }
      return film;
    }).toList());
  }

  return state;

}