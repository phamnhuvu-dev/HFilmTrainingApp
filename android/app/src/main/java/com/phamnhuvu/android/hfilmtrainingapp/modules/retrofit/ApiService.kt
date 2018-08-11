package com.phamnhuvu.android.hfilmtrainingapp.modules.retrofit

import com.phamnhuvu.android.hfilmtrainingapp.BuildConfig
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor


class ApiService {

  companion object {
    var instance: Retrofit? = null
      get() {
        if (field != null) return field

        val httpClient = OkHttpClient.Builder()

        if (BuildConfig.DEBUG) {
          val logging = HttpLoggingInterceptor()
          logging.level = HttpLoggingInterceptor.Level.BODY
          httpClient.addInterceptor(logging)
        }

        field = Retrofit.Builder()
          .baseUrl("http://dev.bsp.vn:8081/training-movie/")
          .addConverterFactory(GsonConverterFactory.create())
          .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
          .build()
        return field
      }


    const val APP_TOKEN: String = "app_token: dCuW7UQMbdvpcBDfzolAOSGFIcAec11a"


    var Film: FilmApiService? = null
      get() = instance!!.create(FilmApiService::class.java)

    var User: UserApiService? = null
      get() = instance!!.create(UserApiService::class.java)
  }
}