import Content from './select-content.svelte';
import Group from './select-group.svelte';
import Item from './select-item.svelte';
import Label from './select-label.svelte';
import Separator from './select-separator.svelte';
import Trigger from './select-trigger.svelte';
import Root from './select.svelte';

const key = Symbol('select');

export {
	Content,
	Group,
	Item,
	Label,
	Root,
	//
	Root as Select,
	Content as SelectContent,
	Group as SelectGroup,
	Item as SelectItem,
	Label as SelectLabel,
	Separator as SelectSeparator,
	Trigger as SelectTrigger,
	Separator,
	Trigger,
	//
	key
};
