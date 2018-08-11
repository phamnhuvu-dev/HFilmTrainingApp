package com.phamnhuvu.android.hfilmtrainingapp.datas

import com.phamnhuvu.android.hfilmtrainingapp.datas.film.FilmApiDataSource
import com.phamnhuvu.android.hfilmtrainingapp.datas.film.FilmLocalDataSource
import com.phamnhuvu.android.hfilmtrainingapp.datas.film.FilmRepository
import com.phamnhuvu.android.hfilmtrainingapp.datas.user.UserApiDataSource
import com.phamnhuvu.android.hfilmtrainingapp.datas.user.UserRepository

class Repository {

  companion object {
    var Film: FilmRepository? = null
      get() {
        if (field != null) return field
        field = FilmRepository(
          FilmApiDataSource(),
          FilmLocalDataSource())
        return field
      }

    var User: UserRepository? = null
      get() {
        if (field != null) return field
        field = UserRepository(
          UserApiDataSource())
        return field
      }
  }
}