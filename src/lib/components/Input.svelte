<script lang="ts">
	export let label = '';
	export let type = 'text';
	export let placeholder = '';
</script>

<label class="label {$$props.class ?? ''}">
	<span class="text-label-large">{label}</span>
	<input class="input" {type} {placeholder} />
</label>
