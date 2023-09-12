import { CLIMA_TEMPO } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const lat = '-22.9039077';
	const lon = '-43.1775533';
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&lat=${lat}&lon=${lon}&appid=${CLIMA_TEMPO}`
	);
	const data = (await res.json()) as OpenWeather;
	return json(data);
};
