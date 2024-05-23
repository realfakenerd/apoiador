<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { Input } from './ui/input';
	import { Label } from './ui/label';
	import { createLabel, melt } from '@melt-ui/svelte';

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


	const {
		elements: {root}
	} = createLabel()
</script>

<section class="grid w-full items-center gap-3">
	<label use:melt={$root} class="capitalize text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for={id}>{label}</label>
	<Input {oninput} {onkeyup} {type} {id} {placeholder} {...restProps} bind:value />
	{#if errorMessage}
		<p class="text-sm text-destructive">{errorMessage}</p>
	{/if}
</section>
