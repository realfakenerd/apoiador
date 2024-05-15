<script context="module">
	import '../../../post.css';

	import {
		a,
		blockquote,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		img,
		li,
		ol,
		p,
		table,
		td,
		th,
		tr,
		ul
	} from './index';
	export { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, table, td, th, tr, ul };
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		description?: string;
		source?: string;
		component?: string;
		radix?: string;
		children: Snippet<any>
	}

	let {
		title = '',
		description = '',
		source = '',
		component = '',
		radix = '',
		children
	}: Props = $props();
</script>

{@render children({ title, description, source, component, radix })}
<!-- <slot {title} {description} {source} {component} {radix} /> -->
