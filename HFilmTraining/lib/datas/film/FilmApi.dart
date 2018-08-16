import 'dart:async';
import 'package:http/http.dart' as http;
import 'package:hfilmtrainingapp/datas/Repository.dart';


class FilmApi {

  final String _GET_FILM = 'movie/list';

  Future<http.Response> getFilms(page) {
    return http.get(Repository.HOST + _GET_FILM + '?page=${page}', headers: Repository.HEADERS);
  }

}