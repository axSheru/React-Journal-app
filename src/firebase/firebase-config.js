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

const firebaseConfigTesting = {
  apiKey: "AIzaSyAhYGdrY9O_b9zHHNbHRhlI67BHzZpLypI",
  authDomain: "journal-testing-50809.firebaseapp.com",
  projectId: "journal-testing-50809",
  storageBucket: "journal-testing-50809.appspot.com",
  messagingSenderId: "110314677172",
  appId: "1:110314677172:web:2358dc0261ac614e9448e1"
};

// Initialize Firebase conditionally by checking the environment.

( process.env.NODE_ENV === 'test' )
  ? firebase.initializeApp( firebaseConfigTesting )
  : firebase.initializeApp( firebaseConfig );


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};