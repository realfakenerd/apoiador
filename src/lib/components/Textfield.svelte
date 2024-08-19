<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	type InputProps = HTMLInputElement;

	interface Props {
		id?: InputProps['id'];
		name?: InputProps['name'];
		label: string;
		title?: InputProps['title'];
		required?: InputProps['required'];
		maxlength?: InputProps['maxLength'];
		minlength?: InputProps['maxLength'];
		autocomplete?: InputProps['autocomplete'];
		errorMessage?: string | null;
		type?: HTMLInputTypeAttribute;
		pattern?: InputProps['pattern'];
		value?: InputProps['value'];
		'leading-icon'?: string;
		'trailing-icon'?: string;
		ontrailing?: (event: Event) => void;
		oninput?: InputProps['oninput'];
		onkeyup?: InputProps['onkeyup'];
	}

	let {
		label = '',
		id = label,
		name = label.toLocaleLowerCase(),
		type = 'text',
		required = false,
		pattern,
		title,
		'leading-icon': leadingIcon = '',
		'trailing-icon': trailingIcon = '',
		value = $bindable(''),
		errorMessage = null,
		autocomplete = 'on',
		maxlength,
		minlength,
		ontrailing,
		oninput,
		onkeyup
	}: Props = $props();

	const {
		elements: { root }
	} = createLabel();
</script>

<fieldset>
	<section class:leading={leadingIcon}>
		{#if leadingIcon}
			<span class="leading-icon">
				<Icon width="24px" icon={leadingIcon} />
			</span>
		{/if}

		<input
			class:value
			{id}
			{type}
			{name}
			{oninput}
			{onkeyup}
			{pattern}
			{required}
			{autocomplete}
			{maxlength}
			{minlength}
			{title}
			placeholder=""
			bind:value
		/>
		<label use:melt={$root} for={id}>{label}</label>

		{#if trailingIcon}
			<button onclick={ontrailing} class="trailing">
				<Icon width="24px" icon={trailingIcon} />
			</button>
		{/if}
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
		height: 56px;
		position: relative;
		transition: 150ms;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;

		@apply ring-1 ring-ring rounded-sm;

		&:not(:has(span.leading-icon)) {
			padding-inline: 1rem;
		}

		&:focus-within {
			@apply ring-2;
		}
		
		& label:is(:nth-child(3)) {
			left: 2.8rem;
		}

		@media (hover: hover) {
			&:hover {
				background-color: theme('colors.primary.DEFAULT' / 0.05);
			}
		}
	}

	section:focus-within label,
	input.value + label {
		transform: scale(0.8) translateY(-3rem);
		opacity: 1;
		z-index: 1;
		padding-inline: 4px;
		background: theme('colors.background');
	}

	label {
		padding-inline: 0.25rem;
		position: absolute;
		left: 1rem;
		top: 50%;
		color: theme('colors.primary.foreground');
		opacity: 0.9;
		font-size: 0.875rem;
		line-height: 1.25rem;
		transform-origin: 0%;
		transform: translateY(-50%);
		transition: 250ms ease-in-out;
	}

	.leading-icon {
		margin-inline-start: 1rem;
	}

	.trailing {
		display: flex;
		align-items: center;
		height: 100%;
		padding-inline: 1rem;
		transition: background-color 150ms;

		@apply rounded-r-sm;

		@media (hover: hover) {
			&:hover {
				@apply bg-primary;
			}
		}
	}

	input {
		appearance: none;
		outline: none;
		border: none;
		overflow: hidden;
		margin: 0;
		width: 100%;
		padding-inline-end: 1rem;
		padding-block: 0.25rem;
		color: theme('colors.primary.foreground');
		background: none;

		font-size: 1rem;
		font-wieght: bold;

		&::-webkit-inner-spin-button {
			display: none;
		}
	}

	input.value {
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
