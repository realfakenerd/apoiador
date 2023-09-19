<script lang="ts">
	import type { PageServerData } from "./$types";

    export let data: PageServerData;
    
    const {procedimentos}=data;
</script>
<ul>
    {#each procedimentos as procedimento}
        <li class="card">
            <span>{procedimento.title}</span>
            <a href={`/procedimentos/${procedimento.slug}`}>{procedimento.slug}</a>
        </li>
    {/each}
</ul>