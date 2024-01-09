<script lang="ts">
	export let label = '';
	export let shim = '';
	export let placeholder = '';
	export let type = 'text';
</script>

<label class="label">
	<span>{label}</span>
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">{shim}</div>
		<input {type} {placeholder} />
	</div>
</label>
