// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDpVQHLot4JNLr8W8p4QHdq1nFq-RT8Ls",
  authDomain: "e-talenta.firebaseapp.com",
  projectId: "e-talenta",
  storageBucket: "e-talenta.appspot.com",
  messagingSenderId: "172739807559",
  appId: "1:172739807559:web:cfc767991abf2f36846462"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;