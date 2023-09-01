// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_7RZyW1Tzy9r6yMHkz1etINbpWQQIeeU',
  authDomain: 'victoryweapons-ua.firebaseapp.com',
  projectId: 'victoryweapons-ua',
  storageBucket: 'victoryweapons-ua.appspot.com',
  messagingSenderId: '149148960666',
  appId: '1:149148960666:web:987119425fe507f8271c23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
