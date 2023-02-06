import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0xhp2h9X2gqSaVbFUq231R8Ny3bD9GDQ",
  authDomain: "reactnativetest-8e87d.firebaseapp.com",
  projectId: "reactnativetest-8e87d",
  storageBucket: "reactnativetest-8e87d.appspot.com",
  messagingSenderId: "1021003316086",
  appId: "1:1021003316086:web:5933451de4231735e99857",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
