// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7WwCjMUymZT8zVyt9Gb48Zx-FmcinjYE",
    authDomain: "dragon-news-bddb4.firebaseapp.com",
    projectId: "dragon-news-bddb4",
    storageBucket: "dragon-news-bddb4.appspot.com",
    messagingSenderId: "250408036097",
    appId: "1:250408036097:web:25f10283de7a955f34dd00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;