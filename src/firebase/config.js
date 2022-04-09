import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA7rofqnS3AO3W9C8jGXZrf-LrthCTDzsc",
    authDomain: "muso-ninjas-38411.firebaseapp.com",
    projectId: "muso-ninjas-38411",
    storageBucket: "muso-ninjas-38411.appspot.com",
    messagingSenderId: "93294157253",
    appId: "1:93294157253:web:2b6fb3bb1bc6e54d433fac"
  };

firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectStorage = firebase.storage()

export {projectAuth,projectFirestore,projectStorage, timestamp}