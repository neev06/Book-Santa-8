import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBl_qPvnh7QHLtBUbmAy0GIE7Jb2e2JxxE",
  authDomain: "booksanta-f1519.firebaseapp.com",
  projectId: "booksanta-f1519",
  storageBucket: "booksanta-f1519.appspot.com",
  messagingSenderId: "462693601270",
  appId: "1:462693601270:web:9936ba41169cc6448681d7"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
