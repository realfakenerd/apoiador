<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, ...restProps }: { class?: string } = $props();
</script>

<hr class={cn('my-4 md:my-8 border-primary', className)} {...restProps} />
