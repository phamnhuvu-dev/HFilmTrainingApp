package com.hfilmtrainingapp;

import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactMethod;

public class MainActivity extends ReactActivity {


    public static Boolean isLastScreen = false;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HFilmTrainingApp";
    }

    @Override
    public void onBackPressed() {
        if (isLastScreen) {
            moveTaskToBack(false);
        } else {
            super.onBackPressed();
        }
    }
}