<script lang="ts">
	import Icon from "@iconify/svelte";
import type { PageData } from "./$types";
	import { formatDate } from "$lib/utils";

    export let data: PageData;

    const {wheater} = data;
    console.log(wheater);
</script>

<ul class="flex gap-2 flex-wrap">
    {#each wheater.list as list}
        <li class="card bg-surface-variant flex-col items-center text-label-large">
            <h1 class="text-label-large">{formatDate(list.dt_txt)}</h1>
            <img src="https://openweathermap.org/img/wn/{list.weather[0].icon}@2x.png" width="50" height="50" alt={list.weather[0].main}>
            <h2>{list.weather[0].description}</h2>
            <span class="inline-flex items-center text-label-small">vento <Icon icon="mdi:arrow-up-thick" style="transform: rotateZ({list.wind.deg}deg);" /></span>
        </li>
    {/each}
</ul>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
