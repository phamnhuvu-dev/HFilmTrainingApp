package com.phamnhuvu.android.hfilmtrainingapp

import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.View


open class BaseFragment: Fragment() {
  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
    view.setBackgroundResource(R.drawable.bg)
  }
}