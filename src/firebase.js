import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMjGJeeGmCZNVS0GU-LLnIyb8MGXd1_tc",
    authDomain: "covid-19-tracker-72720.firebaseapp.com",
    projectId: "covid-19-tracker-72720",
    storageBucket: "covid-19-tracker-72720.appspot.com",
    messagingSenderId: "190648672791",
    appId: "1:190648672791:web:b24e3947d515c57fa53252",
    measurementId: "G-KHKTKYFJ9M"
});

var db = firebaseApp.firestore();

export { db };