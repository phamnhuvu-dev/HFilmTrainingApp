package com.phamnhuvu.android.hfilmtrainingapp

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.phamnhuvu.android.hfilmtrainingapp.features.film.film_list.FilmListFragment

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (savedInstanceState != null) return
        supportFragmentManager.beginTransaction()
                .replace(R.id.main_container, FilmListFragment())
                .commit()
    }
}
