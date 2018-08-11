package com.phamnhuvu.android.hfilmtrainingapp.datas.film.model

import io.realm.RealmObject
import io.realm.annotations.PrimaryKey


data class FilmLike(
  @PrimaryKey
  val id: Int,
  val like: Boolean
): RealmObject()