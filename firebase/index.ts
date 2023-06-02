// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
} from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYP0N-DkHGIIy0gG66LCiY76XA9pKP3IY",
  authDomain: "website-8cd0a.firebaseapp.com",
  projectId: "website-8cd0a",
  storageBucket: "website-8cd0a.appspot.com",
  messagingSenderId: "670113076156",
  appId: "1:670113076156:web:6684c31b106c5cf19311b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {
  db,
  storage,
  auth
}