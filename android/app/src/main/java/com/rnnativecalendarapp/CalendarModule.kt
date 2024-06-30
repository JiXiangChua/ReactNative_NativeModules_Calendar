package com.rnnativecalendarapp
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import android.util.Log

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    // add to CalendarModule.kt
    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String, onSuccess: Callback, onFailure: Callback) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        try {
            val eventId = 123123
            onSuccess.invoke(eventId)
        } catch (e: Throwable) {
            onFailure.invoke(e)
        }
    }

    @ReactMethod
    fun createCalendarEventPromise(name: String, location: String, promise: Promise) {
        try {
            val eventId = 123123
            promise.resolve(eventId)
        } catch (e: Throwable) {
            promise.reject("Create Event Error", e)
        }
    }
}