<script lang="ts">
	import { Label } from './ui/label';
	import { Input } from './ui/input';

	export let label = '';
	export let type: HTMLInputElement['type'] = 'text';
	export let id = label;
	export let placeholder = '';
	export let value: HTMLInputElement['value'] = '';
</script>

<section class="grid w-full items-center gap-1.5">
	<Label class="capitalize" for={id}>{label}</Label>
	<Input {type} {id} {placeholder} {...$$restProps} bind:value/>
</section>
