package com.phamnhuvu.testapp

import android.os.Bundle

import io.flutter.app.FlutterActivity
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugins.GeneratedPluginRegistrant

class MainActivity(): FlutterActivity() {

  private var isLastScreen: Boolean = true

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    GeneratedPluginRegistrant.registerWith(this)
    addLastScreenChannel()
  }

  override fun onBackPressed() {
    if (isLastScreen) {
      moveTaskToBack(false)
    } else {
      super.onBackPressed()
    }
  }

  private fun addLastScreenChannel() {
    MethodChannel(flutterView, LAST_SCREEN_CHANNEL).setMethodCallHandler { call, result ->
      if (call?.method.equals(IS_LAST_SCREEN)) {
        isLastScreen = true
      } else if (call?.method.equals(IS_NOT_LAST_SCREEN)) {
        isLastScreen = false
      }
      result.notImplemented()
    }
  }

  companion object {
    private const val LAST_SCREEN_CHANNEL: String = "last_screen"
    private const val IS_LAST_SCREEN: String = "is_last_screen"
    private const val IS_NOT_LAST_SCREEN: String = "is_not_last_screen"
  }
}
