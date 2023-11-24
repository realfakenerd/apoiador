<script lang="ts">
	type TextFieldType =
		| 'email'
		| 'number'
		| 'password'
		| 'search'
		| 'tel'
		| 'text'
		| 'url'
		| 'textarea'
		| string;

	type InputMode =
		| 'email'
		| 'search'
		| 'tel'
		| 'text'
		| 'url'
		| 'none'
		| 'numeric'
		| 'decimal'
		| null
		| undefined;

	type Value = string | number | string[] | null | undefined;

	export let type: TextFieldType = 'text';
	export let autocomplete: 'on' | 'off' = 'on';
	export let disabled = false;
	export let maxlength: number | null = null;
	export let minlength: number | null = null;
	export let placeholder: string | null = null;
	export let required = false;
	export let value: Value = null;

	export let rows = 2;
	export let cols = 20;

	export let pattern = '';
	export let max = '';
	export let min = '';
	export let inputmode: InputMode = null;
	export let prefix = '';
	export let suffix = '';
</script>

<span class="text-field">
	<section class="field">
		{#if type === 'textarea'}
			<textarea
				class="input"
				aria-describedby="description"
				{autocomplete}
				{disabled}
				{maxlength}
				{minlength}
				{placeholder}
				{required}
				{value}
				{rows}
				{cols}
			/>
		{:else}
			<section class="input-wrapper">
				{#if prefix}
					<span class="prefix">{prefix}</span>
				{/if}
				<input
					class="input"
					aria-describedby="description"
					{type}
					{autocomplete}
					{disabled}
					{maxlength}
					{minlength}
					{placeholder}
					{required}
					{value}
					{pattern}
					{max}
					{min}
					{inputmode}
				/>
				{#if suffix}
					<span class="suffix">{suffix}</span>
				{/if}
			</section>
		{/if}
	</section>
</span>

<style lang="postcss">
	.text-field,
	.field {
		width: 100%;
	}

	.text-field {
		display: inline-flex;
	}

	.text-field:not(.disabled) .prefix,
	.text-field:not(.disabled) .prefix,
	.text-field:not(.disabled) .input::placeholder {
		color: var(--_input-text-prefix-color);
	}

	.field {
		cursor: text;
	}

	.text-field textarea {
		resize: inherit;
	}

	.input-wrapper {
		display: flex;
	}

	.input-wrapper > * {
		all: inherit;
		padding: 0;
	}

	.input {
		overflow-x: hidden;
		text-align: inherit;
		caret-color: theme(colors.outline);

		&::placeholder {
			color: currentColor;
			opacity: 1;
		}
	}

	.input::-webkit-search-decoration,
	.input::-webkit-search-cancel-button {
		display: none;
	}

	.prefix,
	.suffix {
		text-wrap: nowrap;
		width: min-content;
	}

	.prefix {
		padding-inline-end: 1;
	}
</style>
