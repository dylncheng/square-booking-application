// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDokXV4DL7QILAwB_9YpUT171FxkZwIabM",
  authDomain: "square-77ebc.firebaseapp.com",
  projectId: "square-77ebc",
  storageBucket: "square-77ebc.appspot.com",
  messagingSenderId: "703369521236",
  appId: "1:703369521236:web:751a9195b1ec48ee9365c1",
  measurementId: "G-WQZ8DYFY3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db, app }

