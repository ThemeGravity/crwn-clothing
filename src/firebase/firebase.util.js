import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMtr2C5_IFXBDuzCmxRDSqqg_hddKkj6o",
  authDomain: "crwn-db-3c203.firebaseapp.com",
  databaseURL: "https://crwn-db-3c203.firebaseio.com",
  projectId: "crwn-db-3c203",
  storageBucket: "crwn-db-3c203.appspot.com",
  messagingSenderId: "360208674460",
  appId: "1:360208674460:web:a4e4c0184cc3c31b140759",
  measurementId: "G-H9H8M0VQM9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
