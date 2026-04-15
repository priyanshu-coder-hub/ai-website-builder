// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "website-builder-d5f45.firebaseapp.com",
  projectId: "website-builder-d5f45",
  storageBucket: "website-builder-d5f45.firebasestorage.app",
  messagingSenderId: "780593478067",
  appId: "1:780593478067:web:123f54082848a9e50633c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
