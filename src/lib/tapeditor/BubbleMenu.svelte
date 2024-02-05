<script lang="ts">
	import type { Editor } from '@tiptap/core';
	import { BubbleMenuPlugin } from '@tiptap/extension-bubble-menu';
	import type { Snippet } from 'svelte';

	let {
		editor,
		class: className = '',
		children
	} = $props<{ editor: Editor; class?: string; children: Snippet }>();
	let element = $state<HTMLElement>();
	$effect(() => {
		const plugin = BubbleMenuPlugin({
			pluginKey: 'SvelteTiptapBubbleMenu',
			editor,
			element: element!
		});

		editor.registerPlugin(plugin);

		return () => {
			editor.unregisterPlugin('SvelteTiptapBubbleMenu');
		};
	});
</script>

<div bind:this={element} class={className} style="visibility: hidden;">
	{@render children()}
</div>
