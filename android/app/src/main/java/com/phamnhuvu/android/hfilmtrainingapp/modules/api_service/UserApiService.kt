package com.phamnhuvu.android.hfilmtrainingapp.modules.api_service

import io.reactivex.Observable
import okhttp3.ResponseBody
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST

interface UserApiService {

    @FormUrlEncoded
    @POST("user/login")
    fun login(@Field("email") email: String,
              @Field("password") password: String)
            : Observable<ResponseBody>

    @FormUrlEncoded
    @POST("user/registry")
    fun register(@Field("fullname") name: String,
                 @Field("email") email: String,
                 @Field("password") password: String)
            : Observable<ResponseBody>

    @FormUrlEncoded
    @POST("user/logout")
    fun logout()
            : Observable<ResponseBody>

    @FormUrlEncoded
    @POST("user/forgot-password")
    fun forgotPassword(@Field("email") email: String)
            : Observable<ResponseBody>
}