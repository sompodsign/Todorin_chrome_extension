import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAeb3TYO8KKN3KD7FCPgqgOhHfhNw1Plck",
    authDomain: "todorin-32847.firebaseapp.com",
    projectId: "todorin-32847",
    storageBucket: "todorin-32847.appspot.com",
    messagingSenderId: "383952530965",
    appId: "1:383952530965:web:eacf94f32229a2774f681c",
    measurementId: "G-9K0W19N5GS"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;