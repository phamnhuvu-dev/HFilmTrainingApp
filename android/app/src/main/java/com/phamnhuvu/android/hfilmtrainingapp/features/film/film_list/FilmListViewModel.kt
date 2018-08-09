package com.phamnhuvu.android.hfilmtrainingapp.features.film.film_list

import android.arch.lifecycle.ViewModel
import com.phamnhuvu.android.hfilmtrainingapp.datas.Page
import com.phamnhuvu.android.hfilmtrainingapp.datas.film.Film
import com.phamnhuvu.android.hfilmtrainingapp.features.film.FilmUseCase
import io.reactivex.Completable

class FilmListViewModel : ViewModel() {

  var films: ArrayList<Film> = ArrayList()
  var page: Page = Page()

  fun loadFilms(): Completable {
    if (page.isLoading) return Completable.never()
    page.current += 1
    return FilmUseCase.getFilm(films, page)
  }
}