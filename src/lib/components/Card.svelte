<script lang="ts">
	export let title = '';
	export let compact = true;
</script>

<section class="card bg-base-200" class:card-compact={compact}>
	<div class="card-body">
		<h1 class="card-title">
			{title}
		</h1>
		<slot />
	</div>
</section>
