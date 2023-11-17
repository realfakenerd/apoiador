<script lang="ts">
	export let filled = false;
	export let outlined = false;
	export let elevated = false;
</script>

<section class:filled class:outlined class:elevated class="card">
	<slot />
</section>


<style lang="postcss">
	.card {
		border-radius: 12px;
		padding-inline-start: 16px;
		padding-inline-end: 16px;
	}

	.filled {
		
	}
</style>