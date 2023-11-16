<script lang="ts">
	export let group: string;
	export let value: string;
</script>

<input type="radio" bind:value bind:group on:change class="radio">