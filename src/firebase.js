import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAphQU75uxFj5JukwEtMCKfRLzhg1rR6Tc",
  authDomain: "ecommerce-1bd5e.firebaseapp.com",
  projectId: "ecommerce-1bd5e",
  storageBucket: "ecommerce-1bd5e.appspot.com",
  messagingSenderId: "1014629449240",
  appId: "1:1014629449240:web:7e21a7f67704e8aab90d6d",
  measurementId: "G-J7YR85BV5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
