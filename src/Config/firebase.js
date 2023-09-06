import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmtAEBQ1w8ziDPIV2k9dt1FSYTX8rQnyA",
  authDomain: "curso-react-ea442.firebaseapp.com",
  projectId: "curso-react-ea442",
  storageBucket: "curso-react-ea442.appspot.com",
  messagingSenderId: "456507229441",
  appId: "1:456507229441:web:3d75083e747fae8cf20700"
};

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();
export default firebase;