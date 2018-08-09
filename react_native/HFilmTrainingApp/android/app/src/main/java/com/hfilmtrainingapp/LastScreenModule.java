package com.hfilmtrainingapp;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LastScreenModule extends ReactContextBaseJavaModule {


    public LastScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
        Log.d("Create", "OK");
    }

    @Override
    public String getName() {
        return "LastScreen";
    }

    @ReactMethod
    public void setIsLastScreen(){
        MainActivity.isLastScreen = true;
    }

    @ReactMethod
    public void setIsNotLastScreen(){
        MainActivity.isLastScreen = false;
    }
}
