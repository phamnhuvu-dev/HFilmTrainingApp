package com.phamnhuvu.android.hfilmtrainingapp

import android.app.Application
import io.realm.Realm
import io.realm.RealmConfiguration

class App: Application() {

  override fun onCreate() {
    super.onCreate()
    setUpRealm()
  }

  private fun setUpRealm() {
    Realm.init(this)
    val config = RealmConfiguration.Builder().name("app.realm").build()
    Realm.setDefaultConfiguration(config);
  }
}