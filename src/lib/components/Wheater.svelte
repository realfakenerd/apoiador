<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	let weather = $state<OpenWeather>({
		coord: {
			lon: 0,
			lat: 0
		},
		weather: [{description: '', icon: '', id: 0, main: ''}],
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

<Card class="w-full sm:max-w-[14rem] md:max-w-[16rem]">
	<CardHeader class="pb-0">
		<div class="flex flex-row justify-center items-center">
			<CardTitle class="text-5xl font-bold">
				{weather?.main.temp}
			</CardTitle>
			<img
				style="width: 56px; background-image: url(https://openweathermap.org/img/wn/{weather
					?.weather[0].icon}.png);"
				src="https://openweathermap.org/img/wn/{weather?.weather[0].icon ?? '01d'}@4x.png"
				width="56px"
				height="56px"
				alt={weather?.weather[0].main}
			/>
		</div>
		<div class="inline-flex justify-center text-muted-foreground">
			<span class="font-medium">{weather?.main.temp_min.toFixed(1)}º</span>/
			<span class="font-normal">{weather?.main.temp_max.toFixed(1)}° C</span>
		</div>
	</CardHeader>
	<CardContent class="flex flex-col items-center">
		<span>Sensação termica {weather?.main.feels_like.toFixed(2)}° C</span>
		<span>{weather?.weather[0].description}</span>
	</CardContent>
</Card>
