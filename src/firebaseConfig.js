 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDrILgsaqeVNURAlOKYwTrX9oSFWPcOvZE",
  authDomain: "campusconnect-468e9.firebaseapp.com",
  projectId: "campusconnect-468e9",
  storageBucket: "campusconnect-468e9.firebasestorage.app",
  messagingSenderId: "385857406798",
  appId: "1:385857406798:web:47da99c0cdf5493050401f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };