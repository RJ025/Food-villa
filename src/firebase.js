// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD23OiL2urDzv1wfMyBQTg5oRnOsAiZFeA",
  authDomain: "food-villa-ee7c1.firebaseapp.com",
  projectId: "food-villa-ee7c1",
  storageBucket: "food-villa-ee7c1.appspot.com",
  messagingSenderId: "96717647286",
  appId: "1:96717647286:web:bea1cd55a711a04187e517",
  measurementId: "G-3WBXSXMB7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;