package com.phamnhuvu.android.hfilmtrainingapp.features.user.register


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
class RegisterFragment : Fragment() {

    private lateinit var mViewModel: RegisterViewModel

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_register, container, false)

        return view
    }


}
