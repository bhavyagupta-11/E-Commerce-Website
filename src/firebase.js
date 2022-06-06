// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// npm cache clean --force to clear the cache
//dlt node modules and install firebase
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser to start firebase login
//then deployment is done on firebase
//npm install @stripe/stripe-js is done then
//npm i @stripe/react-stripe-js
//npm i axios
//functions folder is entire backend and now download in the functions folder
//firebase init emulators in functions 
// firebase emulators:start --only functions to run the cloud functions emulators and get the api
// npm install moment-js for orders
//firebase deploy --only functions to deploy the backend
//after deployment copy the api from firebase functions
//npm run build is to deploy the frontend
//firebase deploy --only hosting to deploy the final app and create the final link

//link,firestore,cloud functions api,react flip,firebase deploy,frontend deploy

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqBDXMHVwnsk-munU5sifwuo8Eti41doA",
    authDomain: "clone-1dc84.firebaseapp.com",
    projectId: "clone-1dc84",
    storageBucket: "clone-1dc84.appspot.com",
    messagingSenderId: "631905697301",
    appId: "1:631905697301:web:13976318ddaf31ab94181c",
    measurementId: "G-63Z3VM2KZQ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  
  const db = getFirestore();
  //const db = firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};