// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCNRi56pCKpUVWZqs577rJ-RwkGOPykl_k",
  // authDomain: "genius-car-services-100d1.firebaseapp.com",
  // projectId: "genius-car-services-100d1",
  // storageBucket: "genius-car-services-100d1.appspot.com",
  // messagingSenderId: "647224338481",
  // appId: "1:647224338481:web:4f6ededf7297b7440a0d10"
  
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;