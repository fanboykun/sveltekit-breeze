<script lang="ts">
	import { enhance } from "$app/forms";
	import type { User } from 'lucia';
    import { Button } from "$lib/components/ui/button";
    export let user:User|null
</script>

<div class=" absolute top-0 w-full flex justify-end px-4 py-2">
    <div class="flex gap-4">
        {#if user}
        <Button variant="link" href="/dashboard" class="bg-slate-900 text-white">Dashboard</Button>
        <form action="/logout" method="post" use:enhance>
            <Button variant="outline" type="submit" class="bg-transparent text-slate-900 border-slate-900">Logout</Button>
        </form>
        {:else}
        <Button variant="link" href="/login" class="text-slate-900 hover:bg-white">Login</Button>
        <Button variant="link" href="/register" class="text-slate-900 hover:bg-white">Register</Button>
        {/if}
    </div>
</div>
