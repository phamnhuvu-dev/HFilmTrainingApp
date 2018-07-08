package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class ApiService {

    companion object {
        private lateinit var instance: Retrofit

        fun getInstance(): Retrofit {
            if (instance != null) return instance
            instance = Retrofit.Builder()
                    .baseUrl("http://dev.bsp.vn:8081/training-movie/")
                    .addConverterFactory(GsonConverterFactory.create())
                    .build()
            return instance
        }
    }
}