<script lang=ts>
	import '@material/web/select/outlined-select';

	export let label = '';
	export let options: string[] = [];
</script>

<md-outlined-select {label}>
	
		<md-select-option value='one'>
			<span slot="headline">one</span>
		</md-select-option>
</md-outlined-select>

<style>
	:global(:root) {
		--color: theme(colors.outline / 0.8);
		--color-hover: theme(colors.outline);
		--color-focus: theme(colors.primary);
		--text-color: theme(textColor.on-surface-variant);

		--md-outlined-select-text-field-container-shape: theme(borderRadius.lg);

		--md-outlined-select-text-field-hover-outline-color: var(--color-hover);
		--md-outlined-select-text-field-hover-input-text-color: var(--text-color);
		--md-outlined-select-text-field-hover-label-text-color: var(--text-color);
		--md-outlined-select-text-field-hover-trailing-icon-color: var(--text-color);
		
		--md-outlined-select-text-field-focus-outline-color: var(--color-focus);
		--md-outlined-select-text-field-focus-input-text-color: var(--color-focus);
		--md-outlined-select-text-field-focus-label-text-color: var(--color-focus);
		--md-outlined-select-text-field-focus-trailing-icon-color: var(--color-focus);

		--md-outlined-select-text-field-outline-color: var(--color);
		--md-outlined-select-text-field-input-text-color: var(--text-color);
		--md-outlined-select-text-field-label-text-color: var(--text-color);

		--md-outlined-select-text-field-label-text-font: 'Noto Sans Display Variable';
	}

	md-outlined-select::part(menu) {
		--md-menu-container-color: theme(colors.surface);
		--md-menu-container-shape: theme(borderRadius.lg);
	}
</style>