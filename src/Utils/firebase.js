// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsK1ZcmfKHO-1O8n57232zDGW1_Dc4RpQ",
  authDomain: "netflixgpt-676eb.firebaseapp.com",
  projectId: "netflixgpt-676eb",
  storageBucket: "netflixgpt-676eb.appspot.com",
  messagingSenderId: "606724861350",
  appId: "1:606724861350:web:c83efbab950a5518cef367",
  measurementId: "G-GCPVTP407L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();