<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="w-full flex flex-col items-center">
	<h1 class="text-lg font-medium">{$page.status}</h1>
	<p>{$page.error?.message}</p>
	<p>ops...</p>
</section>
