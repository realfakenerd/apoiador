<script lang="ts">
	import '@material/web/radio/radio';

	export let id: string;
	export let name = '';
	export let value = '';
</script>

<md-radio {name} {value} {id} />