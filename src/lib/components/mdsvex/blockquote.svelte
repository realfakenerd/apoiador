<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<blockquote
	class={cn('mt-6 border-l-2 border-primary bg-muted/20 pl-6 pr-4 py-1 italic', className)}
	{...restProps}
>
	<slot />
</blockquote>
