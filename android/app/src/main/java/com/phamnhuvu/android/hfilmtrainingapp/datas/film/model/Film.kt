package com.phamnhuvu.android.hfilmtrainingapp.datas.film.model

import io.realm.RealmObject
import io.realm.annotations.PrimaryKey

data class Film(
  @PrimaryKey
  var id: Int,
  var title: String,
  var image: String,
  var link: String,
  var description: String,
  var category: String,
  var actor: String,
  var director: String,
  var manufacturer: String,
  var duration: String,
  var views: Int,
  var like: Boolean
) : RealmObject()