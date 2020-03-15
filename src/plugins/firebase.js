import Vue from 'vue'

import firebase from "firebase/app"
import "firebase/firebase-auth"

import * as firebaseui from "firebaseui"

const firebaseConfig = {
    apiKey: "AIzaSyDH9dFKdybz6dxLAcGmVEtQ1NYrZAMr-pY",
    authDomain: "moviesdb-ea52e.firebaseapp.com",
    databaseURL: "https://moviesdb-ea52e.firebaseio.com",
    projectId: "moviesdb-ea52e",
    storageBucket: "moviesdb-ea52e.appspot.com",
    messagingSenderId: "802221054255",
    appId: "1:802221054255:web:85bee6af7d717e9eeee9da",
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui