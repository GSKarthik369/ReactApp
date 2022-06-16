// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMd60xFpJPkVHft5jPyoTFYYEP1Dv2tp8",
  authDomain: "react-app-7e74f.firebaseapp.com",
  projectId: "react-app-7e74f",
  storageBucket: "react-app-7e74f.appspot.com",
  messagingSenderId: "923282028084",
  appId: "1:923282028084:web:5896d762c91be709e97c61",
  measurementId: "G-7B5365937Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
