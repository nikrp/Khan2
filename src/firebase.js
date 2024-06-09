// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getVertexAI, getGenerativeModel } from 'firebase/vertexai-preview';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa_BPrzYJJH8kUbg_Q1H3tbxbXYd3ipT0",
  authDomain: "edup-55062.firebaseapp.com",
  projectId: "edup-55062",
  storageBucket: "edup-55062.appspot.com",
  messagingSenderId: "569527649129",
  appId: "1:569527649129:web:fbe9a05f7bee560ea9f3f8",
  measurementId: "G-0Y5HHVNEN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const vertexAI = getVertexAI(app);
const model = getGenerativeModel(vertexAI, { model: 'gemini-1.5-flash' });

export { app, auth, db, vertexAI, model }