package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service

import io.reactivex.Observable
import okhttp3.ResponseBody
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.Query

interface FilmApiService {

  @Headers(ApiService.APP_TOKEN)
  @GET("movie/list")
  fun getFilms(@Query("page") page: Int): Observable<ResponseBody>
}