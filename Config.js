import * as firebase from 'firebase'
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkL5R1_rEuV9mA70RkxaQAT4tDtjos6nc",
    authDomain: "barter-system-app-406c1.firebaseapp.com",
    databaseURL: "https://barter-system-app-406c1.firebaseio.com",
    projectId: "barter-system-app-406c1",
    storageBucket: "barter-system-app-406c1.appspot.com",
    messagingSenderId: "760694950940",
    appId: "1:760694950940:web:a09e0d77aff2fde71023d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();