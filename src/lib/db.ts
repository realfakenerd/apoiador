import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

export { app, auth, firestore };

