import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyAN4o99mH_pAL4gioZfwEa6vWzVYELJLf0",
  authDomain: "himeros-club.firebaseapp.com",
  projectId: "himeros-club",
  storageBucket: "himeros-club.appspot.com",
  messagingSenderId: "914197987176",
  appId: "1:914197987176:web:e50957e0493e20836ce0dd",
  measurementId: "G-2D362P8M42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;
    const { address } = additionalData;
    const { lastName } = additionalData;
    const { phone } = additionalData;

    try {
      await userRef.set({
        address,
        lastName,
        phone,
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
// export const db=firebase.firestore();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;