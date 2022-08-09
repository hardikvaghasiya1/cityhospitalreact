// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT51w2n3l9aQIdF1bBgEpPZb26aeOs-CE",
  authDomain: "cityhospital-84e76.firebaseapp.com",
  projectId: "cityhospital-84e76",
  storageBucket: "cityhospital-84e76.appspot.com",
  messagingSenderId: "651954369820",
  appId: "1:651954369820:web:4cd8a2183768ea589436d9",
  measurementId: "G-PT8NPVSYMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);