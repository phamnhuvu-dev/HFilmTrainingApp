package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service

import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

class ApiService {

    companion object {
        var instance: Retrofit? = null
            get() {
                if (field != null) return field
                field = Retrofit.Builder()
                        .baseUrl("http://dev.bsp.vn:8081/training-movie/")
                        .addConverterFactory(GsonConverterFactory.create())
                        .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                        .build()
                return field
            }


        var Film: FilmApiService? = null
            get() = instance!!.create(FilmApiService::class.java)

        var User: UserApiService? = null
            get() = instance!!.create(UserApiService::class.java)
    }
}