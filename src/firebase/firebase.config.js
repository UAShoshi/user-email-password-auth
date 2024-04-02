// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3LVCqKUT5_sB_29v1ySivdG3DOWEWG4U",
  authDomain: "user-email-password-auth-eca70.firebaseapp.com",
  projectId: "user-email-password-auth-eca70",
  storageBucket: "user-email-password-auth-eca70.appspot.com",
  messagingSenderId: "510379893482",
  appId: "1:510379893482:web:9cecd2f0c7a6ba40d6ad93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;