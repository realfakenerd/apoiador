import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const res = await fetch('/api/previsao_do_tempo');
    const data = await res.json();
    return {
        wheater: data as OpenWeather
    };
}) satisfies PageLoad;