<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;

	const { wheater } = data;
	console.log(wheater);
</script>

<div class="card w-24 interactive-bg-surface-variant flex-col items-center text-label-large">
	<img
		src="https://openweathermap.org/img/wn/{wheater.weather[0].icon}@2x.png"
		width="100"
		height="100"
		alt={wheater.weather[0].main}
	/>
	<div class="inline-flex gap-1 text-label-small">
		<span class="font-bold">{wheater.main.temp_min}</span>
		<span>{wheater.main.temp_max}</span>
	</div>
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
