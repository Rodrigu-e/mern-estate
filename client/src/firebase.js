// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'mern-estate-eb850.firebaseapp.com',
	projectId: 'mern-estate-eb850',
	storageBucket: 'mern-estate-eb850.appspot.com',
	messagingSenderId: '724179162820',
	appId: '1:724179162820:web:f96f697ba320b784da9b91',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
