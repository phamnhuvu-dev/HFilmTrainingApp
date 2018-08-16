import 'dart:async';
import 'dart:convert';

import 'package:hfilmtrainingapp/datas/Repository.dart';
import 'package:hfilmtrainingapp/datas/film/Film.dart';

class FilmUseCase {

  static Future<List<Film>> getFilm(page) async {
    final response = await Repository.film.getFilms(page);
    final films = List<Film>();
    print("request: " + response.body);
    if (response.statusCode == 200) {
      // If server returns an OK response, parse the JSON
      Map result = json.decode(response.body);
      final data = result['data'] as List;
      for (var item in data) {
        Film film = Film.fromJson(item);
        film.title = film.title;
        film.like = false;
        films.add(film);
      }
      print("request: Success");
      return films;
    } else {
      print("request: Fail");
      throw Exception('Failed to load film');
    }
  }
}