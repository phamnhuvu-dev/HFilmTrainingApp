import 'dart:async';
import 'package:http/http.dart' as http;
import 'package:hfilmtrainingapp/datas/Repository.dart';

class UserApi {

  final String _LOGIN           = 'user/login';
  final String _REGISTER        = 'user/registry';
  final String _FORGOT_PASSWORD = 'user/forgot-password';
  final String _LOGOUT          = 'user/logout';

  Future<http.Response> login(email, password) {
    Map<String, String> form = {
      'email': email,
      'password': password
    };
    return http.post(Repository.HOST + _LOGIN, headers: Repository.HEADERS, body: form);
  }

  Future<http.Response> register(name, email, password) {
    Map<String, String> form = {
      'fullname': name,
      'email': email,
      'password': password
    };
    return http.post(Repository.HOST + _REGISTER, headers: Repository.HEADERS, body: form);
  }

  Future<http.Response> forgotPassword(email) {
    Map<String, String> form = {
      'email': email
    };
    return http.post(Repository.HOST + _FORGOT_PASSWORD, headers: Repository.HEADERS, body: form);
  }

  Future<http.Response> logout() {
    return http.post(Repository.HOST + _LOGOUT, headers: Repository.HEADERS);
  }
}