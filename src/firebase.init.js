// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBItcYhz8EYjKzCcZb3Uggfx5uMnv3ICjQ",
  authDomain: "apple-nationwide-distributor.firebaseapp.com",
  projectId: "apple-nationwide-distributor",
  storageBucket: "apple-nationwide-distributor.appspot.com",
  messagingSenderId: "626976879381",
  appId: "1:626976879381:web:ca96a427ed7b310414af1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;