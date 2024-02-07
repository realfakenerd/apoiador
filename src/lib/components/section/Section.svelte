<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className } = $props<{ children: Snippet; class?: string }>();
</script>

<section class="container {className ?? ''}">
	<div class="flex flex-col gap-10 py-8">
		{@render children()}
	</div>
</section>
