<script lang="ts">
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card';

	let weather: OpenWeather;

	async function fetchWheater() {
		const today = new Date().toLocaleDateString();
		const storedData = localStorage.getItem(today);

		if (storedData) {
			const weatherData = JSON.parse(storedData);
			return Promise.resolve(weatherData as OpenWeather);
		}

		const res = await fetch('/api/previsao_do_tempo');
		const data = (await res.json()) as OpenWeather;
		localStorage.setItem(today, JSON.stringify(data));
		return data;
	}

	onMount(() => {
		fetchWheater().then((res) => (weather = res));
	});
</script>

<Card.Root class="max-w-[16rem]">
	<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-0">
		<img
			style="width: 56px; background-image: url(https://openweathermap.org/img/wn/{weather
				?.weather[0].icon}.png);"
			src="https://openweathermap.org/img/wn/{weather?.weather[0].icon ?? '01d'}@4x.png"
			width="56px"
			height="56px"
			alt={weather?.weather[0].main}
		/>
		<Card.Title>
			<span>{weather?.main.temp_min.toFixed(1)}</span>/
			<span class="font-normal">{weather?.main.temp_max.toFixed(1)}° C</span>
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col items-center">
		<span>Sensação termica {weather?.main.feels_like.toFixed(2)}° C</span>
		<span>{weather?.weather[0].description}</span>
	</Card.Content>
</Card.Root>
