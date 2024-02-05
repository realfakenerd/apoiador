import type { ChainedCommands } from '@tiptap/core';
import type { EditorCore } from './Editor';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export default class Tools {
	comands: ChainedCommands;

	constructor(public editor: EditorCore) {
		this.comands = this.editor.chain();
	}

	toggleBold() {
		this.comands.toggleBold().run();
	}

	toggleHeading(level: Level) {
		return () => {
			this.comands.toggleHeading({ level }).run();
		};
	}

	toggleItalic() {
		this.comands.toggleItalic().run();
	}
}
