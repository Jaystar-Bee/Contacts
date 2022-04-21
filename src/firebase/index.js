
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDe7sspDKi4krhDY3Spq-Nm1_RBmFv2_JY",
    authDomain: "contacts-8b9b7.firebaseapp.com",
    databaseURL: "https://contacts-8b9b7-default-rtdb.firebaseio.com",
    projectId: "contacts-8b9b7",
    storageBucket: "contacts-8b9b7.appspot.com",
    messagingSenderId: "760745989277",
    appId: "1:760745989277:web:9ca2759b5b8ca4bb5b7074",
    measurementId: "G-9YTCC7TWR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(app)

export { auth }
