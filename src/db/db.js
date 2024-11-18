import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCohzgBu2egc670-E0BTkvbaYXzOT7qIC8",
    authDomain: "bytepoint-60812.firebaseapp.com",
    projectId: "bytepoint-60812",
    storageBucket: "bytepoint-60812.firebasestorage.app",
    messagingSenderId: "754125917776",
    appId: "1:754125917776:web:eb88027aba9e15a479cb55"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db