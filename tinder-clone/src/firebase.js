import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkUCNJ6C9fEUsDXb5JxZ6uw7ICKBGDLJM",
  authDomain: "tinder-clone-982b3.firebaseapp.com",
  databaseURL: "https://tinder-clone-982b3.firebaseio.com",
  projectId: "tinder-clone-982b3",
  storageBucket: "tinder-clone-982b3.appspot.com",
  messagingSenderId: "787258107294",
  appId: "1:787258107294:web:8da5a2290a580b2d2f228f",
  measurementId: "G-PHL8VS3WM9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;