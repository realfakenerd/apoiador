<script lang="ts">
	import { RadioGroup, RadioGroupItem } from './ui/radio-group';
	import { Label } from './ui/label';

	interface Item {
		id?: string;
		value: string;
		label?: string;
	}

	interface Props {
		value: string;
		label: string;
		items: Item[];
	}

	let { value, label, items = [] } = $props<Props>();
</script>

<RadioGroup class="grid w-full items-center gap-1.5" {value}>
	<h2 class="text-sm font-medium leading-none">{label}</h2>

	<div class="inline-flex items-center h-9 py-1 gap-4">
		{#each items as { value, id, label }, index (index)}
			{@const _id = id ?? label}
			<div class="flex items-center gap-x-2">
				<RadioGroupItem {value} id={_id} />
				<Label for={_id} class="capitalize">{label}</Label>
			</div>
		{/each}
	</div>
</RadioGroup>
