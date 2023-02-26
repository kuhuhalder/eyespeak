// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU4g8hA8c_ptjpD2PMSycXEu3wOLRAAKc",
  authDomain: "sylvan-terra-379003.firebaseapp.com",
  projectId: "sylvan-terra-379003",
  storageBucket: "sylvan-terra-379003.appspot.com",
  messagingSenderId: "473311467705",
  appId: "1:473311467705:web:0cb26fc35006bdfd2be368",
  measurementId: "G-7TKJF6JFGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);