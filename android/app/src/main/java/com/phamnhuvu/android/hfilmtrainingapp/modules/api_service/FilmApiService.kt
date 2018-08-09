package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service

import com.phamnhuvu.android.hfilmtrainingapp.modules.api_service.ApiService
import io.reactivex.Observable
import okhttp3.ResponseBody
import retrofit2.http.GET
import retrofit2.http.Query

interface FilmApiService {

    @GET("movie/list")
    fun getFilms(@Query("page") page: Int): Observable<ResponseBody>
}