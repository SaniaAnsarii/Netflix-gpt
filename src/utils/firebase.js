// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAujE57BNT1ige2ypjzYKowVcy7jY7geBs",
  authDomain: "netflixgpt-f1c43.firebaseapp.com",
  projectId: "netflixgpt-f1c43",
  storageBucket: "netflixgpt-f1c43.appspot.com",
  messagingSenderId: "601637095987",
  appId: "1:601637095987:web:d48851d5d3f8fdebfc3146",
  measurementId: "G-E600HGFPFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);