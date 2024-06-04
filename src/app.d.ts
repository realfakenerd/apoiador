// See https://kit.svelte.dev/docs/types#app

import type { Database } from "$lib/supabase/database.types";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>;
			safeGetSession: () => Promisse<{ session: Session | null, user: User | null }>
			session: Session | null;
			user: User | null;
		}
		// interface PageData {}
		// interface Platform {}
	}

	interface ViewTransition {
		updateCallbackDone: Promise<void>;
		ready: Promise<void>;
		finished: Promise<void>;
		skipTransition: () => void;
	}

	interface Document {
		startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
	}
}

export { };
