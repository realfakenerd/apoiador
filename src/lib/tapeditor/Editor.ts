import { Editor as CoreEditor } from '@tiptap/core';

export class EditorCore extends CoreEditor {
	public contentElement: HTMLElement | null = null;
}
