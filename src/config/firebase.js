// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdNSyclXT4mMb5ctYWv0VAf3baHCnH1i0",
  authDomain: "dts-movie-d6a45.firebaseapp.com",
  projectId: "dts-movie-d6a45",
  storageBucket: "dts-movie-d6a45.appspot.com",
  messagingSenderId: "139403943745",
  appId: "1:139403943745:web:a5ff2f82ede887f171cbc0",
  measurementId: "G-SR0GZ6DBFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };
