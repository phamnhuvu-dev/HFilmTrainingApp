package com.phamnhuvu.android.hfilmtrainingapp.datas.user

import com.google.gson.annotations.SerializedName

data class User(
  @SerializedName("id")
  var id: Int,

  @SerializedName("email")
  var email: String
) {
}