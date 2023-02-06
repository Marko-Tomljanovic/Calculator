import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD0xhp2h9X2gqSaVbFUq231R8Ny3bD9GDQ",
  authDomain: "reactnativetest-8e87d.firebaseapp.com",
  projectId: "reactnativetest-8e87d",
  storageBucket: "reactnativetest-8e87d.appspot.com",
  messagingSenderId: "1021003316086",
  appId: "1:1021003316086:web:b8cd58b4eb8b0b54e99857",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
