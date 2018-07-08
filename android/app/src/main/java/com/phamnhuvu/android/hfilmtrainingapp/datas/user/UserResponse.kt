package com.phamnhuvu.android.hfilmtrainingapp.datas.user

import com.google.gson.annotations.SerializedName

class UserResponse(@SerializedName("error")
                   val error: Boolean,

                   @SerializedName("code")
                   val code: Int,

                   @SerializedName("message")
                   val message: String,

                   @SerializedName("data")
                   val data: User)