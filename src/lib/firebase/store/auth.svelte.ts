import { onAuthStateChanged, type Auth, type User } from 'firebase/auth';

export function userStore(auth: Auth, startWith: any | null = null) {
	let user = $state<User | null>(startWith);

	user = auth.currentUser;	

	$effect(() => {
		const unsubscribe =onAuthStateChanged(auth, (_user) => {
			user = _user;
		});

		() => unsubscribe();
	});

	return {
		get user() {
			return user;
		}
	};
}
