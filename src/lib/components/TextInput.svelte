<script lang="ts">
	export let label = '';
	export let value = '';
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="text-label-large">{label}</span>
	</div>
	<input type="text" bind:value class="input input-bordered w-full max-w-xs" />
	<div class="label">
		<span class="text-label-small">s {value}</span>
	</div>
</label>
