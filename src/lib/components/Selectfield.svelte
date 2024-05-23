<script lang="ts">
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from './ui/select';

	interface Props {
		items?: string[];
		placeholder?: string;
		label?: string;
	}

	let { items = [], placeholder = '', label = '' }: Props = $props();
</script>

<Select>
	<SelectTrigger class="w-full self-end">
		{placeholder}
	</SelectTrigger>
	<SelectContent>
		<SelectGroup>
			{#if label}
				<SelectLabel>{label}</SelectLabel>
			{/if}
			{#each items as item (item)}
				<SelectItem class="w-full capitalize" {item} />
			{/each}
		</SelectGroup>
	</SelectContent>
</Select>
