import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createServerClient } from '@supabase/ssr';
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const supabase = (async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options) => {
                event.cookies.set(key, value, { ...options, path: '/' });
            },
            remove: (key, options) => {
                event.cookies.delete(key, { ...options, path: '/' })
            }
        }
    })

    event.locals.safeGetSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()

        if (!session) return { session: null, user: null }

        const {
            data: { user },
            error,
        } = await event.locals.supabase.auth.getUser()

        if (error) return { session: null, user: null }


        return { session, user }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range' || name === 'x-supabase-api-version';
        }
    });
}) satisfies Handle;

const authGuard = (async ({ event, resolve }) => {
    const { session, user } = await event.locals.safeGetSession()

    event.locals.session = session;
    event.locals.user = user;

    if (!event.locals.session && event.url.pathname.startsWith('/private'))
        return redirect(303, '/auth');

    if (event.locals.session && event.url.pathname === '/auth')
        return redirect(303, '/private');


    return resolve(event);
}) satisfies Handle;

export const handle: Handle = sequence(supabase, authGuard);