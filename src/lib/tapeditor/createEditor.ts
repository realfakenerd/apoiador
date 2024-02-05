import { Editor, type EditorOptions } from '@tiptap/core';
import type { EditorCore } from './Editor';
import { readable, type Readable } from 'svelte/store';

function createEditor(options: Partial<EditorOptions>): Readable<EditorCore> {
	const editor = new Editor(options);

	const { subscribe } = readable(editor, (set) => {
		editor.on('transaction', () => {
			set(editor);
		});

		return () => {
			editor.destroy();
		};
	});

	return { subscribe } as any;
}

export default createEditor;
