import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVh0DLrN26XLuMQ03VWkl3TeqGuJvU_kY",
    authDomain: "shark-8ab57.firebaseapp.com",
    projectId: "shark-8ab57",
    storageBucket: "shark-8ab57.appspot.com",
    messagingSenderId: "105989767421",
    appId: "1:105989767421:web:497c0190e296cc5dbafe94"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)