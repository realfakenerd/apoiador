<script lang="ts">
	export let filled = false;
	export let outlined = false;
	export let elevated = false;
</script>

<section class:filled class:outlined class:elevated>
	<slot />
</section>

<style lang="postcss">
	section {
		--elevation: 0px;
		--shadow-blur: 0px;
		--alpha: 1;

		border-radius: 12px;
		padding: 16px;
		position: relative;

		box-shadow:
			0px 1px 2px 0px rgba(0, 0, 0, 0.3),
			0px var(--elevation) var(--shadow-blur) var(--elevation) rgba(0, 0, 0, 0.15);

		transition-timing-function: ease;
		transition-duration: 280ms;
		transition-property: box-shadow, background-color;
	}

	.filled {
		--alpha: 0.08;
		background-color: theme(colors.on-surface-variant / var(--alpha));
	}

	.filled:hover {
		--elevation: 1px;
		--shadow-blur: 3px;
		--alpha: 1;
		background-color: theme(colors.surface-variant / var(--alpha));
	}

	.outlined {
		box-shadow: 0 0 0 1px theme(colors.outline / var(--alpha));
		background-color: theme(colors.surface / var(--alpha));
	}

	.outlined:hover {
		--elevation: 1px;
		--shadow-blur: 3px;
		--alpha: 0.08;
		background-color: theme(colors.on-surface / var(--alpha));
		box-shadow:
			0 0 0 1px theme(colors.outline),
			0px 1px 2px 0px rgba(0, 0, 0, 0.3),
			0px var(--elevation) var(--shadow-blur) var(--elevation) rgba(0, 0, 0, 0.15);
	}

	section:is(.elevated) {
		--elevation: 1px;
		--shadow-blur: 3px;
	}

	.elevated:hover{
		--elevation: 2px;
		--shadow-blur: 6px;
		--alpha: 0.08;
		background-color: theme(colors.on-surface / var(--alpha));
	}
</style>
