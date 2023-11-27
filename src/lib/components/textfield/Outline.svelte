<script>
	import Field from "./Field.svelte";
	import Textfield from "./Textfield.svelte";

	export let type = '';
</script>
<Field label="label">
	<Textfield {type} suffix="$"/>
</Field>