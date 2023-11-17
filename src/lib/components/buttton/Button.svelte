<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string | null = null;
	export let target: '_blank' | '_parent' | '_self' | '_top' | '' = '';

	export let leadingIcon = '';
	export let trailingIcon = '';
	export let filled = false;
	export let outlined = false;
	export let elevated = false;
	export let text = false;

	let tag = href ? 'a' : 'button';
</script>

<svelte:element
	this={tag}
	class:filled
	class:outlined
	class:elevated
	class:text
	class="button"
	{...href
		? {
				href,
				target
		  }
		: {}}
>
	{#if leadingIcon}
		<Icon class="icon" width="18px" icon={leadingIcon} />
	{/if}

	<span class="label text-label-large">
		<slot />
	</span>

	<div class="state-layer" />

	{#if trailingIcon}
		<Icon class="icon" width="18px" icon={trailingIcon} />
	{/if}
</svelte:element>

<style lang="postcss">
	.icon {
		display: inline-flex;
		position: relative;
		writing-mode: horizontal-tb;
		fill: currentColor;
		flex-shrink: 0;
	}

	.label {
		overflow: hidden;
		text-overflow: inherit;
	}

	.state-layer {
		position: absolute;
		inset: 0;
		transition-property: background-color;
		transition-duration: 250ms;
		transition-timing-function: ease;
		border-radius: theme(borderRadius.full);
	}

	.button {
		display: inline-flex;
		position: relative;
		place-content: center;
		place-items: center;

		outline: none;
		appearance: none;

		text-overflow: ellipsis;
		cursor: pointer;
		text-wrap: nowrap;

		text-decoration: none;

		background: transparent;

		min-height: 40px;
		min-width: 64px;
		width: 100%;

		z-index: 0;
		padding: 0;

		padding-inline-start: 24px;
		padding-inline-end: 24px;

		gap: theme(gap.2);
		border-radius: theme(borderRadius.full);
	}

	.button:disabled {
		cursor: default;
		pointer-events: none;
	}

	.filled {
		background-color: theme(colors.primary);
		color: theme(textColor.on-primary);
	}

	.filled:is(:hover, :focus-within) .state-layer {
		background-color: theme(colors.on-primary / 0.08);
	}

	.outlined {
		border-color: theme(borderColor.primary);
		border-width: 1px;
		background-color: theme(colors.surface);
		color: theme(textColor.primary);
	}

	.outlined:is(:hover, :focus-within) .state-layer {
		background-color: theme(colors.primary / 0.08);
	}

	.elevated {
		box-shadow: 0 1px 1px #000;
		transition-property: box-shadow;
		transition-duration: 280ms;
		transition-timing-function: ease;
		background-color: theme(colors.surface);
		color: theme(textColor.primary);
	}

	.elevated:is(:hover, :focus-within) {
		box-shadow: 0 1px 3px #000;	
	}

	.elevated:is(:hover, :focus-within) .state-layer {
		background-color: theme(colors.primary / 0.08);
	}

	.text {
		color: theme(textColor.primary);
	}

	.text:is(:hover,:focus-within) {
		background-color: theme(colors.primary / 0.08);
	}
</style>
