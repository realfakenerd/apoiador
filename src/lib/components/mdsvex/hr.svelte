<script lang="ts">
	import { cn } from '$lib/utils';
	import Separator from '../ui/separator/separator.svelte';
	let { class: className = undefined, ...restProps } = $props<{ class?: string }>();
</script>

<Separator class="bg-primary" />
<!-- <hr class={cn('my-4 md:my-8 border-primary', className)} {...restProps} /> -->
