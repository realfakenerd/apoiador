import { Dexie, type Table } from 'dexie';

interface Condominio {
	id?: string;
	nome: string;
	endereço: string;
	bairro: string;
}

class SubDex extends Dexie {
	condominio!: Table<Condominio>;
	constructor() {
		super('condominio');
		this.version(1).stores({
			condominio: '++id, nome, endereço, bairro'
		});
	}
}

// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import {initializeFirestore} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
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
const analytics = getAnalytics(app);

export const firestore = initializeFirestore(app, {
	localCache: {kind: 'persistent'}
});
export const db = new SubDex();
