package com.phamnhuvu.android.hfilmtrainingapp.datas.film

data class FilmRepository(
  val Api: FilmApiDataSource,
  val Local: FilmLocalDataSource)