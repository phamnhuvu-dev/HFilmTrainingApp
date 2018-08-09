package com.phamnhuvu.android.hfilmtrainingapp.views

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.widget.FrameLayout
import android.widget.TextView
import com.phamnhuvu.android.hfilmtrainingapp.R

class Header : FrameLayout {

  lateinit var _title: TextView

  var title: String
    get() = _title.text.toString()
    set(value) {
      _title.text = value
    }

  constructor(context: Context?) : super(context) {
    init(context)
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    init(context)
  }

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(context, attrs, defStyleAttr) {
    init(context)
  }

  private fun init(context: Context?) {
    val view = LayoutInflater.from(context).inflate(R.layout.view_header, this, false)
    addView(view)
    _title = view.findViewById(R.id.title_Header);
  }
}