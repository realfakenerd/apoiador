import type { Analytics } from 'firebase/analytics';
import type { Auth } from 'firebase/auth';
import type { Database } from 'firebase/database';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';
import { getContext, setContext } from 'svelte';

const key = Symbol('firebase');

interface SDKs {
	auth?: Auth;
	firestore?: Firestore;
	rtdb?: Database;
	storage?: FirebaseStorage;
	analytics?: Analytics;
}

function getFirebaseContext() {
	return getContext<SDKs>(key);
}

function setFirebaseContext(sdks: SDKs) {
	setContext(key, sdks);
}

export {
	getFirebaseContext,
	setFirebaseContext
}