<script lang="ts">
	interface Item {
		name: string;
		value: string;
	}

	export let radio_list: string[] = [];
	export let name: string;
</script>

<section class="flex gap-4">
	{#each radio_list as item}
		<label class="inline-flex gap-3">
			<span class="text-label-large capitalize">{item}</span>

			<div class="radio-container">
				<input class="radio-input" type="radio" value={item} bind:group={name} {name}>
				<div class="radio-layer"></div>
			</div>
		</label>
	{/each}
</section>