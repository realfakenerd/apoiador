<script lang="ts">
	import { CardContent } from '$lib/components/ui/card';
	import { tick } from 'svelte';
	import type { EditorCore } from './Editor';

	let element = $state<HTMLElement>();
	let { editor } = $props<{ editor: EditorCore }>();

	async function init() {
		await tick();
		if (!editor?.options.element) return;
		if (editor.contentElement) return;

		element?.append(...Array.from(editor.options.element.childNodes));
		editor.setOptions({ element });
		editor.contentElement = element!;
	}

	$effect(() => {
		init();
		return () => {
			if (!editor) return;
			editor.contentElement = null;
			if (!editor.options.element.firstChild) return;
			const newElement = document.createElement('div');

			editor.setOptions({
				element: newElement
			});
		};
	});

	$effect.pre(() => {init()});
</script>

<CardContent>
	<div bind:this={element} />
</CardContent>
<slot />
