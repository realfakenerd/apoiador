<script lang="ts">
	import RadioButton from "./RadioButton.svelte";

	interface Item {
		label: string;
		value: string;
		id?: string;
	}

	export let radio_list: Item[] = [];
	export let name: string;
</script>

<section class="flex gap-4">
	{#each radio_list as {id, value, label}}
		{@const _id = id ?? crypto.randomUUID()}
		<div class="flex flex-col md:flex-row gap-4 items-center">
			<RadioButton {name} {value} id={_id}/>
			<label for={_id}>{label}</label>
		</div>
	{/each}
</section>