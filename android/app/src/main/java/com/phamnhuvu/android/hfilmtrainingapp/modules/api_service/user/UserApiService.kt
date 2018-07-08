package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service.user

import retrofit2.http.POST

interface UserApiService {

    @POST("user/login")
    fun login()

    @POST("user/registry")
    fun register()

    @POST("user/forgot-password")
    fun forgotPassword()
}