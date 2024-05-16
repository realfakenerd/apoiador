<script lang="ts">
	let weather = $state<OpenWeather>({
		coord: {
			lon: 0,
			lat: 0
		},
		weather: [{ description: '', icon: '01d', id: 0, main: '' }],
		base: '',
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0
		},
		visibility: 0,
		wind: {
			speed: 0,
			deg: 0
		},
		clouds: {
			all: 0
		},
		dt: 0,
		sys: {
			type: 0,
			id: 0,
			country: '',
			sunrise: 0,
			sunset: 0
		},
		timezone: 0,
		id: 0,
		name: '',
		cod: 0
	});

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

<div class="inline-flex">
	<header class="flex flex-row justify-center items-center">
		<img
			style="width: 96px; background-image: url(https://openweathermap.org/img/wn/{weather
				?.weather[0].icon}@2x.png);"
			src="https://openweathermap.org/img/wn/{weather?.weather[0].icon}@2x.png"
			width="96px"
			height="96px"
			alt={weather?.weather[0].main}
		/>
		<span class="flex flex-col">
			<h1 class="text-2xl font-bold">
				{weather?.main.temp} ºC
			</h1>
			<a
				class="text-xs text-blue-600 underline"
				href="https://openweather.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				openweather.com
			</a>
		</span>
	</header>
</div>
