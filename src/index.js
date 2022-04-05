import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMLKia8vEbnLOCTiAB1q-sIw-__HhWSU",
  authDomain: "cart-9ee88.firebaseapp.com",
  projectId: "cart-9ee88",
  storageBucket: "cart-9ee88.appspot.com",
  messagingSenderId: "873502521711",
  appId: "1:873502521711:web:f7bb7ba7aaf9ef87cc509a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


