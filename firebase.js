// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84Use_nVHgkc_s_mp-G7rXvzGk9Ry7SQ",
  authDomain: "react-notes-28eb3.firebaseapp.com",
  projectId: "react-notes-28eb3",
  storageBucket: "react-notes-28eb3.appspot.com",
  messagingSenderId: "315056199634",
  appId: "1:315056199634:web:f3cf6e572f9632db17da0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")