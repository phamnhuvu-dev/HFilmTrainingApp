
import 'package:hfilmtrainingapp/datas/film/FilmApi.dart';

class Repository {
  static const String HOST = 'http://dev.bsp.vn:8081/training-movie/';
  static const Map<String, String> HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'app_token': 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
  };

  static FilmApi _filmApi;

  static FilmApi get film {
    if (_filmApi == null) {
      _filmApi = FilmApi();
    }
    return _filmApi;
  }
}