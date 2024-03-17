<script lang="ts">
	import { messageToArray } from "$lib/validation";
	import type { validated } from "ts-input-validator";

    export let messages: validated|string
</script>
<p class="text-sm text-red-500">
    {#if typeof messages === "string"}
        <span class="block">{messages}</span>
    {:else}
        {#each messageToArray(messages) as message}
            <span class="block">{message}</span>
        {/each}
    {/if}
</p>
