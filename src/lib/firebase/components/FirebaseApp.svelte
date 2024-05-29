<script lang="ts">
	import { setFirebaseContext } from '$lib/firebase/store/sdk';
	import type { Analytics } from 'firebase/analytics';
	import type { Auth } from 'firebase/auth';
	import type { Database } from 'firebase/database';
	import type { Firestore } from 'firebase/firestore';
	import type { FirebaseStorage } from 'firebase/storage';
	import type { Snippet } from 'svelte';

	interface Props {
		firestore?: Firestore;
		rtdb?: Database;
		auth?: Auth;
		storage?: FirebaseStorage;
		analytics?: Analytics;
		children: Snippet;
	}

	let {
		firestore = undefined,
		rtdb = undefined,
		auth = undefined,
		storage = undefined,
		analytics = undefined,
		children
	}: Props = $props();

	setFirebaseContext({ firestore, rtdb, auth, storage, analytics });
</script>

{@render children()}
