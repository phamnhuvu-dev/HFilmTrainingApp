package com.phamnhuvu.android.hfilmtrainingapp.datas.film

import com.phamnhuvu.android.hfilmtrainingapp.datas.Page
import com.phamnhuvu.android.hfilmtrainingapp.modules.retrofit.ApiService
import io.reactivex.Observable
import okhttp3.ResponseBody

class FilmApiDataSource {

  fun getFilms(page: Page): Observable<ResponseBody> {
    return ApiService.Film!!.getFilms(page.current)
  }
}