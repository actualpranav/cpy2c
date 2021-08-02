import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWYB9dA7G-YiX_DsGHGGKhaW2C-vt6YT0",
  authDomain: "cpy2c-clipboard.firebaseapp.com",
  projectId: "cpy2c-clipboard",
  storageBucket: "cpy2c-clipboard.appspot.com",
  messagingSenderId: "1071064358433",
  appId: "1:1071064358433:web:e851568e825674bc3d0d60",
  measurementId: "G-BD9DZGFQ5N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

//export { auth };

export { db, auth };
