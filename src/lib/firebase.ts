// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA5fm-YAENRqzrbFEtV55IjYyZk5HppDCI',
	authDomain: 'apsa-crm.firebaseapp.com',
	projectId: 'apsa-crm',
	storageBucket: 'apsa-crm.appspot.com',
	messagingSenderId: '677656524546',
	appId: '1:677656524546:web:f1c1a3a028a51b195ab41b',
	measurementId: 'G-SF8QYZEBZK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);


export {
	firestore,
	auth
}