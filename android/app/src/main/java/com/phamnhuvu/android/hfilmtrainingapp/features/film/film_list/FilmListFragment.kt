package com.phamnhuvu.android.hfilmtrainingapp.features.film.film_list


import android.arch.lifecycle.ViewModelProviders
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import com.bumptech.glide.Glide

import com.phamnhuvu.android.hfilmtrainingapp.R
import com.phamnhuvu.android.hfilmtrainingapp.datas.film.Film
import com.phamnhuvu.android.hfilmtrainingapp.views.Header

/**
 * A simple [Fragment] subclass.
 *
 */
class FilmListFragment : Fragment() {

  private lateinit var _header: Header
  private lateinit var _recycler: RecyclerView
  private lateinit var _viewModel: FilmListViewModel

  override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                            savedInstanceState: Bundle?): View? {
    _viewModel = ViewModelProviders.of(this).get(FilmListViewModel::class.java)

    val view = inflater.inflate(R.layout.fragment_film_list, container, false)
    _header = view.findViewById(R.id.header_FilmList)
    _header.title = "Hfilm"

    _recycler = view.findViewById(R.id.recycler_FilmList)
    _recycler.layoutManager = LinearLayoutManager(context)
    _recycler.setHasFixedSize(true)
    _recycler.adapter = object : RecyclerView.Adapter<RecyclerView.ViewHolder>() {
      override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return FilmItem(LayoutInflater.from(parent.context)
          .inflate(R.layout.recycler_item_film, parent, false))
      }

      override fun getItemCount(): Int {
        return _viewModel.films.size
      }

      override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        (holder as FilmItem).bind(_viewModel.films.get(position))
      }
    }

    if (_viewModel.films.size == 0) loadFilms()
    return view
  }

  private fun loadFilms() {
    _viewModel.loadFilms().subscribe({
      _recycler.adapter.notifyDataSetChanged()
    }, { t: Throwable ->
      Log.d("error", t.message)
    })
  }

  companion object {
    class FilmItem(itemView: View?) : RecyclerView.ViewHolder(itemView) {

      private var imgPoster: ImageView

      private var tvEnglishTitle: TextView
      private var tvVietNamTitle: TextView
      private var tvView: TextView
      private var tvDescription: TextView

      init {
        itemView!!
        imgPoster      = itemView.findViewById(R.id.imgPoster_FilmItem)
        tvEnglishTitle = itemView.findViewById(R.id.tvEnglishTitle_FilmItem)
        tvVietNamTitle = itemView.findViewById(R.id.tvVietNamTitle_FilmItem)
        tvView         = itemView.findViewById(R.id.tvView_FilmItem)
        tvDescription  = itemView.findViewById(R.id.tvDescription_FilmItem)
      }

      fun bind(film: Film) {
        Glide.with(itemView).load(film.image).into(imgPoster)
        val titles = film.title.split(" / ")
        tvEnglishTitle.text = titles[0]
        tvVietNamTitle.text = titles[1]
        tvView.text = film.views.toString()
        tvDescription.text = film.description
      }
    }
  }
}
