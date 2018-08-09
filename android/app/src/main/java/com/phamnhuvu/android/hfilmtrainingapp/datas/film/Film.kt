package com.phamnhuvu.android.hfilmtrainingapp.datas.film

data class Film(
        var id: Int,
        var title: String,
        var image: String,
        var link : String,
        var description: String,
        var category: String,
        var actor: String,
        var director: String,
        var manufacturer: String,
        var duration: String,
        var views: Int
)