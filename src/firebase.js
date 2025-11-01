// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// NEW: Import Firebase Auth functions
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZY7amP73gKB0VfPKID_bsUq0z0VurGvU",
  authDomain: "genzguff-26958.firebaseapp.com",
  projectId: "genzguff-26958",
  storageBucket: "genzguff-26958.firebasestorage.app",
  messagingSenderId: "435491903041",
  appId: "1:435491903041:web:36a08969b5845b4eb318c0",
  measurementId: "G-3PQQXM4G88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Create the Google Sign-in provider
const provider = new GoogleAuthProvider();

// Create and export the function that will run when the button is clicked
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      
      // We can log this to the console to see it work!
      console.log("Google Sign-In Successful:", user);
      
      // Show a welcome message
      alert(`Welcome, ${user.displayName}!`);

      // TODO: Here you would redirect the user to the main app (swiping page)
      // window.location.href = "/app"; 

    }).catch((error) => {
      // Handle Errors here.
      console.error("Google Sign-In Error:", error);
      alert(`Sign-in failed: ${error.message}`);
    });
};