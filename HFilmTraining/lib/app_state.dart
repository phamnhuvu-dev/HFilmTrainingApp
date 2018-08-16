import 'package:hfilmtrainingapp/datas/film/Film.dart';

class AppState {
  final bool isLoading;
  final List<Film> films;

  AppState({this.isLoading = false, this.films = const []});

  AppState copyWith({bool isLoading, List<Film> films}) {
    return new AppState(
        isLoading: isLoading ?? this.isLoading,
        films: films ?? this.films
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AppState &&
          runtimeType == other.runtimeType &&
          isLoading == other.isLoading &&
          films == other.films;

  @override
  int get hashCode => isLoading.hashCode ^ films.hashCode;
}
