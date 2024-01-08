import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkQiiNqBLioyyFoe2Aahsl0-Zaa4sIhJ4",
    authDomain: "anbd-c3100.firebaseapp.com",
    projectId: "anbd-c3100",
    storageBucket: "anbd-c3100.appspot.com",
    messagingSenderId: "180900833965",
    appId: "1:180900833965:web:48107f127ab62a73f53424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
