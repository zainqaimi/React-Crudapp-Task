import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXPnMCzgm36SNJDD-q_Z-z0oBOFwlLpP0",
  authDomain: "apprex-practice.firebaseapp.com",
  projectId: "apprex-practice",
  storageBucket: "apprex-practice.appspot.com",
  messagingSenderId: "776216721034",
  appId: "1:776216721034:web:530cec631b77f8ff1a1f73",
  measurementId: "G-52M17V0V86",
  databaseURL: "https://apprex-practice-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);
