<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	interface Props {
		id?: string;
		label: string;
		required?: boolean;
		type?: HTMLInputTypeAttribute;
		value?: HTMLInputElement['value'];
		oninput?: HTMLInputElement['oninput'];
		onkeyup?: HTMLInputElement['onkeyup'];
		maxlength?: number;
		name?: string;
		minlength?: number;
		errorMessage?: string | null;
	}

	let {
		label = '',
		type = 'text',
		id = label,
		required = false,
		value = $bindable(''),
		errorMessage = null,
		name,
		maxlength,
		minlength,
		oninput,
		onkeyup
	}: Props = $props();

	const {
		elements: { root }
	} = createLabel();
</script>

<fieldset>
	<section>
		<input
			class:value
			{id}
			{type}
			{name}
			{oninput}
			{onkeyup}
			{required}
			{maxlength}
			{minlength}
			bind:value
		/>
		<label use:melt={$root} for={id}>{label}</label>
	</section>
	{#if errorMessage}
		<p class="text-sm text-destructive h-2">{errorMessage}</p>
	{/if}
</fieldset>

<style lang="postcss">
	fieldset {
		width: 100%;

		&:has(p) {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	section {
		width: 100%;
		position: relative;
		padding-block: 0.25rem;
		transition: 150ms;

		@apply ring-1 ring-ring rounded-sm;

		&:focus-within {
			@apply ring-2;
		}

		@media (hover: hover) {
			&:hover {
				background-color: theme('colors.primary.DEFAULT' / 0.05);
			}
		}
	}

	section:focus-within label,
	input:is(.value) + label {
		transform: scale(0.8) translateY(0.7rem);
		opacity: 1;
		z-index: 1;
		padding-inline: 0.25rem;
		background: theme('colors.background');
	}

	label {
		padding-inline: 0.25rem;
		position: absolute;
		left: 2%;
		top: -50%;
		color: theme('colors.primary.foreground');
		opacity: 0.9;
		font-size: 0.875rem;
		line-height: 1.25rem;
		transform-origin: 0%;
		transform: translateY(1.9rem);
		transition: 250ms ease-in-out;
	}

	input {
		appearance: none;
		outline: none;
		border: none;
		overflow: hidden;
		margin: 0;
		width: 100%;
		padding-inline: 0.75rem;
		padding-block: 0.25rem;
		color: theme('colors.primary.foreground');
		background: none;

		font-size: 1rem;
		font-wieght: bold;

		&::-webkit-inner-spin-button {
			display: none;
		}
	}

	input:is(.value) {
		&:valid,
		&:valid + label {
			color: theme('colors.green.500'/ 0.7);
		}

		&:invalid,
		&:invalid + label {
			color: theme('colors.red.500' / 0.7);
		}
	}
</style>
