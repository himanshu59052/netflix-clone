import firebase from "firebase/compat/app";
 import "firebase/compat/auth";
 import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCilm7Pj__aVvcdWyOZtvORO-Zfe26Ou_g",
    authDomain: "netflix-clone-21758.firebaseapp.com",
    projectId: "netflix-clone-21758",
    storageBucket: "netflix-clone-21758.appspot.com",
    messagingSenderId: "1060416694525",
    appId: "1:1060416694525:web:9f9357f20dc66578d43694"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
   export { auth };
   export default db;