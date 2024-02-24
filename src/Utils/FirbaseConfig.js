// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaxZQYHU5hFxi1_zwN9W04LX5jbrIQf38",
  authDomain: "netflixgpt-87f17.firebaseapp.com",
  projectId: "netflixgpt-87f17",
  storageBucket: "netflixgpt-87f17.appspot.com",
  messagingSenderId: "622424693400",
  appId: "1:622424693400:web:c8710e1feba9b2dc7c4eed",
  measurementId: "G-J765HE7G2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.warn('analytics::: ', analytics);
export const auth = getAuth();
