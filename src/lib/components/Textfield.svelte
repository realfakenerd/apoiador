<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { Input } from './ui/input';
	import { Label } from './ui/label';

	interface Props {
		id?: string;
		type?: HTMLInputTypeAttribute;
		label: string;
		value?: HTMLInputElement['value'];
		oninput?: HTMLInputElement['oninput'];
		onkeyup?: HTMLInputElement['onkeyup'];
		placeholder?: string;
		errorMessage?: string | null;
		restProps?: any[];
	}

	let {
		label = '',
		type = 'text',
		id = label,
		placeholder = '',
		value = $bindable(''),
		errorMessage = null,
		oninput,
		onkeyup,
		...restProps
	}: Props = $props();
</script>

<section class="grid w-full items-center gap-3">
	<Label class="capitalize" for={id}>{label}</Label>
	<Input {oninput} {onkeyup} {type} {id} {placeholder} {...restProps} bind:value />
	{#if errorMessage}
		<p class="text-sm text-destructive">{errorMessage}</p>
	{/if}
</section>
