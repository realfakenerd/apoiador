<script lang="ts">
	import type { PageServerData } from "./$types";

    export let data: PageServerData;
    const {content} = data;
</script>

{@html content}