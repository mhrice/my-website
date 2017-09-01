var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDZGQHbzHC50UabJKRXbEt3jVL1Ll3A2J8",
    authDomain: "rice-website.firebaseapp.com",
    databaseURL: "https://rice-website.firebaseio.com",
    projectId: "rice-website",
    storageBucket: "rice-website.appspot.com",
    messagingSenderId: "95107576656"
  };
  module.exports = firebase.initializeApp(config);
