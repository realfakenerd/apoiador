<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<section class="p-4">
	<article class="card max-w-none bg-surface-variant prose prose-zinc">
		{@html data.content}
	</article>
</section>