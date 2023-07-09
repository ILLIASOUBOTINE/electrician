
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABWAH5leOujkIin53opBqhSCHgfqnoFSY",
  authDomain: "doctor-helth.firebaseapp.com",
  projectId: "doctor-helth",
  storageBucket: "doctor-helth.appspot.com",
  messagingSenderId: "1002679651000",
  appId: "1:1002679651000:web:a03195a77cb3544d58424d",
  measurementId: "G-GGW4ZEXJ6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireStoreDataBase = getFirestore(app);

export default fireStoreDataBase;
