package com.phamnhuvu.android.hfilmtrainingapp.features.film

import com.phamnhuvu.android.hfilmtrainingapp.datas.Page
import com.phamnhuvu.android.hfilmtrainingapp.datas.Repository
import com.phamnhuvu.android.hfilmtrainingapp.datas.film.Film
import io.reactivex.Completable
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers
import okhttp3.ResponseBody
import org.json.JSONObject

class FilmUseCase {

  companion object {

    fun getFilm(films: ArrayList<Film>, page: Page): Completable {
      return Repository.Film!!.Api.getFilms(page)
        .flatMapCompletable { response: ResponseBody ->
          val jsonResult = JSONObject(response.string())
          if (jsonResult.getBoolean("error")) {
            Completable.error(Throwable("Error"))
          } else {

            //Handle Page data
            val jsonPage = jsonResult.getJSONObject("paging")
            page.max = jsonPage.getInt("total_pages")

            //Handle Films data
            val jsonData = jsonResult.getJSONArray("data")
            val length = jsonData.length()
            var jsonFilm: JSONObject
            for (index in 0 until length) {
              jsonFilm = jsonData.getJSONObject(index)
              films.add(
                Film(
                  id           = jsonFilm.getInt("id"),
                  title        = jsonFilm.getString("title"),
                  image        = jsonFilm.getString("image"),
                  link         = jsonFilm.getString("link"),
                  description  = jsonFilm.getString("description"),
                  category     = jsonFilm.getString("category"),
                  actor        = jsonFilm.getString("actor"),
                  director     = jsonFilm.getString("director"),
                  manufacturer = jsonFilm.getString("manufacturer"),
                  duration     = jsonFilm.getString("duration"),
                  views        = jsonFilm.getInt("views")
                )
              )
            }
            Completable.complete()
          }
        }
        .subscribeOn(Schedulers.computation())
        .observeOn(AndroidSchedulers.mainThread())
    }
  }
}