// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBp56IvlqOOo5gdu7m7tVLNmMWhtGKNoWM",
    authDomain: "e-commerce-3413d.firebaseapp.com",
    projectId: "e-commerce-3413d",
    storageBucket: "e-commerce-3413d.firebasestorage.app",
    messagingSenderId: "1080823401132",
    appId: "1:1080823401132:web:1e4ea5124f812a75b96d09",
    measurementId: "G-K984Z26M3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}