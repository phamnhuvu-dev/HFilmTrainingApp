package com.phamnhuvu.android.hfilmtrainingapp.datas.user

import com.phamnhuvu.android.hfilmtrainingapp.modules.retrofit.ApiService
import io.reactivex.Observable
import okhttp3.ResponseBody

class UserApiDataSource {

  fun login(email: String, password: String): Observable<ResponseBody> {
    return ApiService.User!!.login(email, password)
  }

  fun register(name: String, email: String, password: String): Observable<ResponseBody> {
    return ApiService.User!!.register(name, email, password)
  }

  fun logout(): Observable<ResponseBody> {
    return ApiService.User!!.logout()
  }

  fun forgotPassword(email: String): Observable<ResponseBody> {
    return ApiService.User!!.forgotPassword(email)
  }
}