<script lang="ts">
	import {
		Menubar,
		MenubarContent,
		MenubarItem,
		MenubarMenu,
		MenubarTrigger
	} from '$lib/components/ui/menubar';
	import Icon from '@iconify/svelte';
	import type { EditorCore } from './Editor';
	import Tools from './tools';

	let {editor} = $props<{editor: EditorCore}>()

	let actualTool = $state('Paragrafo');
	const tools = new Tools(editor);

	// $: isActive = (name: string, attr = {}) => editor.isActive(name, attr);

	let menuItems = $state([
		{
			name: 'Heading 1',
			icon: 'mdi:format-heading-1',
			command: tools.toggleHeading(1)
		},
		{
			name: 'Heading 2',
			icon: 'mdi:format-heading-2',
			command: tools.toggleHeading(2)
		},
		{
			name: 'Heading 3',
			icon: 'mdi:format-heading-3',
			command: tools.toggleHeading(3)
		},
		{
			name: 'Heading 4',
			icon: 'mdi:format-heading-4',
			command: tools.toggleHeading(4)
		}
	]);
</script>

<Menubar>
	<MenubarMenu>
		<MenubarTrigger class="inline-flex gap-2">
			<span>{actualTool}</span>
			<Icon icon="mdi:chevron-down"/>
		</MenubarTrigger>
		<MenubarContent>
			{#each menuItems as item, index (index)}
				<MenubarItem
					class="justify-between"
					on:click={() => {
						actualTool = item.name;
						item.command();
					}}
				>
					<Icon width="18" icon={item.icon} />
					<span>{item.name}</span>
				</MenubarItem>
			{/each}
		</MenubarContent>
	</MenubarMenu>
	<MenubarMenu>
		<MenubarTrigger on:click={() => tools.toggleBold()}>Bold</MenubarTrigger>
	</MenubarMenu>
</Menubar>
