<script lang="ts">
	import * as Select from './ui/select';

	export let items: string[] = [];
	export let placeholder = '';
	export let label = '';
</script>

<Select.Root>
	<Select.Trigger class="w-full self-end">
		<Select.Value {placeholder} />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#if label}
				<Select.Label>{label}</Select.Label>
			{/if}
			{#each items as item (item)}
				<Select.Item class="w-full capitalize" bind:value={item}>{item}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
