<script lang="ts">
	import { routes } from './routes';
	import { siteConfig } from './site';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { ViewVertical } from 'radix-icons-svelte';
	import Icons from '@iconify/svelte';
	import MobileLink from './MobileLink.svelte';

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<ViewVertical class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<Icons icon="mdi:home" width="16px" height="16px" class="mr-2 h-4 w-4" />
			<span class="font-bold">{siteConfig.name}</span>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-auto">
			<div class="flex flex-col space-y-3">
				{#each routes.mainNav as { href, title }, index (index)}
					{#if href}
						<MobileLink {href} bind:open>
							{title}
						</MobileLink>
					{/if}
				{/each}
			</div>
			<div class="flex flex-col space-y-2">
				{#each routes.sidebarNav as { items, title }, index (index)}
					<div class="flex flex-col space-y-3 pt-6">
						<h4 class="font-medium">{title}</h4>
						{#if items?.length}
							{#each items as { disabled, href, label, title }}
								{#if !disabled && href}
									<MobileLink {href} bind:open class="text-muted-foreground">
										{title}
										{#if label}
											<span
												class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]"
											>
												{label}
											</span>
										{/if}
									</MobileLink>
								{/if}
							{/each}
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
