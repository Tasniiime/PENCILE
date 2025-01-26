// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmi8dZ4DTxNw4CAJHDGe9vU_t0cX7pvCQ",
  authDomain: "pencile-9c1b0.firebaseapp.com",
  projectId: "pencile-9c1b0",
  storageBucket: "pencile-9c1b0.firebasestorage.app",
  messagingSenderId: "313374900807",
  appId: "1:313374900807:web:2dd8f7047bdd6cd6d46762",
  measurementId: "G-ZVHPJGSKNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };