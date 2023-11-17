<script lang="ts">
	import '@material/web/textfield/outlined-text-field';
	import type {TextFieldType} from '@material/web/textfield/outlined-text-field'

	export let label = '';
	export let type: TextFieldType = 'text';
	export let value = '';
	export let supportingText = '';
	export let errorText = '';
	export let pattern = '';
	export let title = '';
</script>

<md-outlined-text-field
    {label}
    {type}
    {value}
	{pattern}
	{title}
	error-text={errorText}
	name={label.split(' ').join('').toLowerCase()}
	supporting-text={supportingText}
	class="{$$props.class??''}"
/>

<style>
	:global(:root) {
		--md-outlined-text-field-label-text-font: 'Noto Sans Display Variable';
		--md-outlined-text-field-input-text-font: 'Noto Sans Display Variable';
		--md-outlined-text-field-supporting-text-font: 'Noto Sans Display Variable';
		--md-outlined-text-field-container-shape: theme(borderRadius.lg);
	}
</style>