<script lang="ts">
	import Input from "./Input.svelte";
</script>

<span class="text-field">
	<section class="field">
		<span class="icon leading">
			<slot name="leading-icon"/>
		</span>

		<Input />

		<span class="icon trailing">
			<slot name="trailing-icon"/>
		</span>
	</section>
</span>

<style lang="postcss">
	.text-field,
	.field {
		width: 100%;
	}

	.text-field {
		display: inline-flex;
	}

	.field {
		cursor: text;
	}
</style>
