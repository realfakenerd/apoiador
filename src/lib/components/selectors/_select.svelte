<script lang="ts">
	import Icon from '@iconify/svelte';

	let wrapper: HTMLDivElement;

	export let options: string[] = [];
	export let error = false;
	export let iconError: string | null = '';
	export let label: string | null = null;
	// export let name: string | null = null ?? label;
	export let display: 'flex' | 'inline-flex' = 'inline-flex';
	let id = label ?? `input-${crypto.randomUUID()}`;
	let value = '';
</script>

	<div
		class="text-field-container style-outlined {error ? 'error' : ''}"
		bind:this={wrapper}
		style="display: {display}"
	>
		<select
			class:value
			class="text-field-input"
			aria-label="Enter your input {label}"
		>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
		{#if error}
			<span class="trailing-icon">
				<Icon icon={iconError ?? ''} />
			</span>
		{/if}
		<div class="text-field-layer" />
		<label for={id}>
			{label}
		</label>
	</div>

<style lang="postcss">
	.text-field-container {
		position: relative;
		height: theme(height.14);
		min-width: 15rem;
		color: theme(colors.on-surface-variant);
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}

	.text-field-container::after{
		content: "";
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		width: theme(width.3);
		height: theme(height.2);
		background-color: currentColor;
		position: absolute;
		right: theme(width.2);
		top: theme(width.1/2);
		transform: translateY(-theme(translate.1/2));
	}

	option {
		appearance: none; 
		background-color: theme(colors.surface-variant);
	}

	.text-field-input {
		@apply appearance-none absolute inset-0 h-full w-full border-none bg-transparent px-4 text-on-surface outline-none;
	}
	.text-field-layer {
		@apply pointer-events-none absolute inset-0 rounded-[inherit] transition-all;
	}
	label {
		transition:
			all 250ms,
			font 500ms;
		transition-timing-function: cubic-bezier(0.254, 0.029, 0, 1.2);
		color: rgb(var(--error, currentColor));
		@apply pointer-events-none absolute left-4 top-4 ease-in-out;
	}
	.error {
		--error: var(--color-error);
	}
	.supporting {
		@apply mt-1 px-4 text-label-small text-on-surface-variant;
	}
	.supporting.error {
		@apply text-error;
	}

	.style-outlined {
		@apply rounded-lg;
	}
	.style-outlined > .text-field-layer {
		color: rgb(var(--error, var(--color-outline)));
		@apply ring-1 ring-[currentColor];
	}
	.style-outlined > .text-field-input {
		@apply py-4;
	}
	.style-outlined .text-field-input:is(:focus, .value, :required:valid) ~ label {
		background-color: rgb(var(--color-surface));
		@apply -top-2 left-3 px-1;
	}

	.text-field-input:is(:focus, .value, :required:valid) ~ label {
		@apply text-label-small;
	}

	@media (hover: hover) {
		.error:hover {
			--error: var(--color-on-error-container);
		}
		.text-field-container:hover > :is(label, .text-field-layer) {
			color: rgb(var(--error, var(--color-on-surface)));
		}
		.style-filled:hover > .text-field-layer {
			background-color: rgb(var(--color-on-surface) / 0.08);
		}
		.trailing-button:hover {
			background-color: rgb(var(--color-on-surface-variant) / 0.08);
		}
	}
	.text-field-container:focus-within > :is(label, .text-field-layer) {
		color: rgb(var(--error, var(--color-primary)));
	}

	.text-field-container:focus-within > :is(.text-field-layer) {
		@apply ring-2 ring-primary;
	}
</style>