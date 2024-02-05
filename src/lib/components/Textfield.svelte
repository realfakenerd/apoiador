<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { Input } from './ui/input';
	import { Label } from './ui/label';

	interface Props {
		label: string;
		type: HTMLInputTypeAttribute;
		id: string;
		placeholder: string;
		value: HTMLInputElement['value'];
		errorMessage: string | null;
		oninput: HTMLInputElement['oninput'];
		onkeyup: HTMLInputElement['onkeyup'];
		restProps: any[];
	}

	let {
		label = '',
		type = 'text',
		id = label,
		placeholder = '',
		value = '',
		errorMessage = null,
		oninput,
		onkeyup,
		...restProps
	} = $props<Props>();
</script>

<section class="grid w-full items-center gap-1.5">
	<Label class="capitalize" for={id}>{label}</Label>
	<Input {oninput} {onkeyup} {type} {id} {placeholder} {...restProps} bind:value />
	{#if errorMessage}
		<p class="text-sm text-destructive">{errorMessage}</p>
	{/if}
</section>
