import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBZHLlipqFpqhl-AGcrUl2wsTbD8yPtbwI",
    authDomain: "clone-aacba.firebaseapp.com",
    projectId: "clone-aacba",
    storageBucket: "clone-aacba.appspot.com",
    messagingSenderId: "892569699057",
    appId: "1:892569699057:web:06287ab4a0e8fd0e831f50"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 