<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-4">
	<article class="card bg-surface-variant prose">
		<div class="prose-container">
			{@html data.content}
		</div>
	</article>
</section>
