import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFT3OvSkd4W_zoglcptJtn3pe5DJwj8T8",
    authDomain: "create-website-twitter.firebaseapp.com",
    projectId: "create-website-twitter",
    storageBucket: "create-website-twitter.appspot.com",
    messagingSenderId: "967172364575",
    appId: "1:967172364575:web:f302d2aa603378e0ba382a",
    measurementId: "G-WRX6J7P7RK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

