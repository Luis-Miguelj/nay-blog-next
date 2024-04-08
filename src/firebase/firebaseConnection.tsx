import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCAeuqdhVHo5v5RKME8EQV7FF-XyIo1kik",
  authDomain: "back-end-nay-photography.firebaseapp.com",
  projectId: "back-end-nay-photography",
  storageBucket: "back-end-nay-photography.appspot.com",
  messagingSenderId: "751687449715",
  appId: "1:751687449715:web:d867d04b261399701cbe06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth }