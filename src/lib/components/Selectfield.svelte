<script lang="ts">
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from './ui/select';

	let {
		items = [],
		placeholder = '',
		label = ''
	} = $props<{
		items?: string[];
		placeholder?: string;
		label?: string;
	}>();
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
