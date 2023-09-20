<script lang="ts">
    import {invoke} from '@tauri-apps/api';
	import { onMount } from 'svelte';

    export let data;

   onMount(() => {
    invoke('parse_markdown', {path: data.post}).then(data => console.log(data));
   })    
</script>