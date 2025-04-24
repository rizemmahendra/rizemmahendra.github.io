import { FirebaseOptions, initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDuy1izP03AHsaBbpYNT1E1GJfQ7pSLauA",
  authDomain: "web-portofolio-50bd5.firebaseapp.com",
  projectId: "web-portofolio-50bd5",
  storageBucket: "web-portofolio-50bd5.firebasestorage.app",
  messagingSenderId: "668944595115",
  appId: "1:668944595115:web:3c7b7cb04361b1a1579fee",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const FirestoreDB = getFirestore(FirebaseApp);
const GraduationCollection = collection(FirestoreDB, "Graduation");

export { FirebaseApp, FirestoreDB, GraduationCollection };
