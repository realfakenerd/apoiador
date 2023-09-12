<script lang="ts">
	import { onMount } from 'svelte';

	let wheater: OpenWeather | null = null;

	async function fetchWheater() {
		const today = new Date().toLocaleDateString();
		const storedData = localStorage.getItem(today);

		if (storedData) {
			const weatherData = JSON.parse(storedData) as OpenWeather;
			return Promise.resolve(weatherData);
		}

		const res = await fetch('/api/previsao_do_tempo');
		const data = (await res.json()) as OpenWeather;
		localStorage.setItem(today, JSON.stringify(data));
		return data;
	}

	onMount(async () => {
		wheater = await fetchWheater();
	});
</script>

<div class="card max-w-xs interactive-bg-surface-variant flex-col items-center justify-center text-label-large">
	<div class="inline-flex items-center">
		<img
			src="https://openweathermap.org/img/wn/{wheater?.weather[0].icon}@4x.png"
			width="100"
			height="100"
			alt={wheater?.weather[0].main}
		/>

		<h1 class="text-display-small">{wheater?.main.temp.toFixed(1)}° C</h1>
	</div>
    <div class="text-label-small flex flex-col items-center">
        <span>Sensação termica {wheater?.main.feels_like.toFixed(2)}° C</span>
        <span>Com {wheater?.weather[0].description}</span>
    </div>
	<div class="inline-flex items-center">
		<span class="font-bold">{wheater?.main.temp_min.toFixed(1)}</span>/
		<span>{wheater?.main.temp_max.toFixed(1)}° C</span>
	</div>
</div>
