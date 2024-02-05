<script lang="ts">
	import {Section} from '$lib/components/section';
	import { Card, CardHeader, CardTitle } from '$lib/components/ui/card';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import { Editor, EditorCore } from '$lib/tapeditor';
	import BubbleMenu from '$lib/tapeditor/BubbleMenu.svelte';
	import MenuBar from '$lib/tapeditor/MenuBar.svelte';
	import createEditor from '$lib/tapeditor/createEditor';
	import { cn } from '$lib/utils';
	import StarterKit from '@tiptap/starter-kit';
	import type { Readable } from 'svelte/store';

	let editor: Readable<EditorCore>;

	$effect(() => {
		editor = createEditor({
			extensions: [StarterKit],
			content: `<p>Hello World!</p>`,
			editorProps: {
				attributes: {
					class: cn(`outline-none prose !text-muted-foreground`)
				}
			}
		});
	});
</script>

<Section>
	<Card>
		<CardHeader>
			<CardTitle>Edite o texto</CardTitle>
		</CardHeader>
		<Editor editor={$editor}></Editor>
		{#if $editor}
			<BubbleMenu editor={$editor}>
				<MenuBar editor={$editor} />
			</BubbleMenu>
		{/if}

		<CardFooter>
			{#if $editor}
				<MenuBar editor={$editor} />
			{/if}
		</CardFooter>
	</Card>
</Section>
