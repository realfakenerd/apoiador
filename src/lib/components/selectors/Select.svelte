<script lang="ts">
	export let label = '';
	export let options: string[] = [];
</script>

<label class="label">
	<span class="text-label-large">{label}</span>
	<select class="select">
		{#each options as option}
			<option value={option}>
				<span>{option}</span>
			</option>
		{/each}
	</select>
</label>
