<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { Input } from './ui/input';
	import { Label } from './ui/label';

	export let label = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let id = label;
	export let placeholder = '';
	export let value: HTMLInputElement['value'] = '';
</script>

<section class="grid w-full items-center gap-1.5">
	<Label class="capitalize" for={id}>{label}</Label>
	<Input {type} {id} {placeholder} {...$$restProps} bind:value />
</section>
