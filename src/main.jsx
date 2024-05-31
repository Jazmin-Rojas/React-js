import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhPA-WcRrqYS-1eklqEKYbf9LZFM-KizI",
  authDomain: "house-clean-react.firebaseapp.com",
  projectId: "house-clean-react",
  storageBucket: "house-clean-react.appspot.com",
  messagingSenderId: "651569762327",
  appId: "1:651569762327:web:be2e5cea2f1fbf932c8c52"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render( <App />);
