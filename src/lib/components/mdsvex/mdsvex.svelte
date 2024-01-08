<script context="module">
	import '../../../post.css';

	import { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, table, td, th, tr, ul } from './index';
	export { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, table, td, th, tr, ul };
</script>

<script lang="ts">
	export let title = '';
	export let description = '';
	export let source = '';
	export let component = '';
	export let radix = '';
</script>

<slot {title} {description} {source} {component} {radix} />
