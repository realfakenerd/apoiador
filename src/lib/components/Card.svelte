<script lang="ts">
	export let title = '';
	export let hover = false;
	export let href: string | null = null;
	export let target: '_blank' | '_parent' | '_self' | '_top' | '' = '';

	let tag: 'a' | 'section' = href ? 'a' : 'section';
</script>

<svelte:element
	this={tag}
	{...href
		? {
				href,
				target
			}
		: {}}
	class="card p-4"
	class:card-hover={hover}
>
	<span class="card-header text-title-large">{title}</span>
	<div class="p-4"><slot /></div>
</svelte:element>
