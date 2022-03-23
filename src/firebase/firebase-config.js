import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCIaHzR-U68ssOrayhJ9PLA_w188lWBo",
  authDomain: "react-journal-app-550fc.firebaseapp.com",
  projectId: "react-journal-app-550fc",
  storageBucket: "react-journal-app-550fc.appspot.com",
  messagingSenderId: "518754417397",
  appId: "1:518754417397:web:32259635d4a5c4dacf63bc"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};