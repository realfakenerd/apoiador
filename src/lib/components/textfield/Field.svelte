<script lang="ts">
	export let disabled = false;
	export let resizable = false;

	export let noLabel = false;
	export let withEnd = false;
	export let withStart = false;
	export let disableTransition = false;

	let focused = false;
	let populated = false;

	export let label = '';
</script>

<div
	class="field"
	class:disabled
	class:resizable
	class:with-end={withEnd}
	class:with-start={withStart}
	class:no-label={noLabel}
	class:disable-transition={disableTransition}
	class:focused
	class:populated
>
	<div class="container-overflow">
		<!-- ${this.renderBackground?.()} ${this.renderIndicator?.()} ${outline} -->
		<div class="container">
			<div class="start">
				<slot name="start" />
			</div>
			<div class="middle">
				<div class="label-wrapper">
					{label}
					<!-- ${restingLabel} ${outline ? nothing : floatingLabel} -->
				</div>
				<div class="content">
					<slot />
				</div>
			</div>
			<div class="end">
				<slot name="end" />
			</div>
		</div>
	</div>
	<!-- ${this.renderSupportingText()} -->
</div>

<style lang="postcss">
	.field {
		display: flex;
		flex: 1;
		flex-direction: column;
		writing-mode: horizontal-tb;
		max-width: 100%;
	}

	.container-overflow {
		border-radius: 12px;
		display: flex;
		height: 100%;
		position: relative;
	}

	.container {
		align-items: center;
		border-radius: inherit;
		flex: 1;
		max-height: 100%;
		min-height: 100%;
		min-width: min-content;
		position: relative;
	}

	.field,
	.container-overflow {
		resize: inherit;
	}

	.resizable:not(.disabled) .container {
		resize: inherit;
		overflow: hidden;
	}

	.start,
	.middle,
	.end {
		display: flex;
		box-sizing: border-box;
		height: 100%;
		position: relative;
	}

	.start {
		color: red;
	}
	.end {
		color: red;
	}

	.start,
	.end {
		align-items: center;
		justify-content: center;
	}

	.with-start .start,
	.with-end .end {
		min-width: 48px;
	}

	.with-start .start {
		margin-inline-end: 4px;
	}

	.with-end .end {
		margin-inline-start: 4px;
	}

	.middle {
		align-items: stretch;
		align-self: baseline;
		flex: 1;
	}

	.content {
		display: flex;
		flex: 1;
		/* opacity: 0;
		tansition: opacity 250ms ease; */
		color: theme(colors.on-surface-variant);
	}

	.no-label .content,
	.focused .content,
	.populated .content {
		opacity: 1;
		transition-delay: 100ms;
	}

	.content * {
		all:unset;
		color:currentColor;
		width: 100%;
		white-space: pre-wrap;
	}

	.label {
		color: red;
	}
</style>
