import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxbrJg-FhK3dW1dlcuyrjbds2E8lJ6fjw",
  authDomain: "petwise-4df3f.firebaseapp.com",
  projectId: "petwise-4df3f",
  storageBucket: "petwise-4df3f.appspot.com",
  messagingSenderId: "808480468670",
  appId: "1:808480468670:web:25ecbc5781e71c25d278ef",
  measurementId: "G-Z6BB555482"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
