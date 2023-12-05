<script lang="ts">
	let weather = $state<OpenWeather | null>(null);

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

	$effect(() => {
		fetchWheater().then((res) => (weather = res));
	});
</script>

<div class="card card-compact max-w-xs bg-base-200">
	<div class="card-body items-center">
		<div class="inline-flex items-center">
			<img
				style="width: 100px; background-image: url(https://openweathermap.org/img/wn/{weather
					?.weather[0].icon}.png);"
				src="https://openweathermap.org/img/wn/{weather?.weather[0].icon??'01d'}@4x.png"
				width="100"
				height="100"
				alt={weather?.weather[0].main}
			/>

			<h1 class="text-display-small">{weather?.main.temp.toFixed(1)}° C</h1>
		</div>
		<div class="text-label-small flex flex-col items-center">
			<span>Sensação termica {weather?.main.feels_like.toFixed(2)}° C</span>
			<span>{weather?.weather[0].description}</span>
		</div>
		<div class="inline-flex items-center">
			<span class="font-bold">{weather?.main.temp_min.toFixed(1)}</span>/
			<span>{weather?.main.temp_max.toFixed(1)}° C</span>
		</div>
	</div>
</div>
