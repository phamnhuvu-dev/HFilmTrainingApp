package com.phamnhuvu.android.hfilmtrainingapp.features.film.film_detail


import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

import com.phamnhuvu.android.hfilmtrainingapp.R

/**
 * A simple [Fragment] subclass.
 *
 */
class FilmDetailFragment : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_film_detail, container, false)
    }


}
