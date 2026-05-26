// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGvGm7LrNVSUeAuhXRwV9mhZD7zGBb4RI",
  authDomain: "netflixgpt-5980c.firebaseapp.com",
  projectId: "netflixgpt-5980c",
  storageBucket: "netflixgpt-5980c.firebasestorage.app",
  messagingSenderId: "480634263908",
  appId: "1:480634263908:web:6bb72e8e4fe9db41528271",
  measurementId: "G-K75X2P3JX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
