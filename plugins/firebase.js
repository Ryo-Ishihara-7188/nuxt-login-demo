import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0O5gMdQgMJqhzqjsTnOhnU9V-vwrN4eI',
  authDomain: 'nuxt-login-19a46.firebaseapp.com',
  databaseURL: 'https://nuxt-login-19a46.firebaseio.com',
  projectId: 'nuxt-login-19a46',
  storageBucket: 'nuxt-login-19a46.appspot.com',
  messagingSenderId: '176098776992',
  appId: '1:176098776992:web:6f1f7086fac90b7bc936c5'
}
// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
