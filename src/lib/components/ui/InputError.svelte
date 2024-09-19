<script lang="ts">
	import type { validated } from "ts-input-validator";

    export let messages: validated|string
    
    const messageToArray = (message: validated) => {
        const m = []
        for (const key in message) {
            m.push(message[key]);
        }
        return m;
    }
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
