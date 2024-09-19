<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button";
    import { enhance } from "$app/forms";
	import InputError from "$lib/components/ui/InputError.svelte";

    export let form
</script>

<div class="max-w-screen-sm w-full bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
    <h2 class="text-xl py-4 font-semibold">Login To Your Account</h2>
    <form class="w-full" method="POST" action="?/login" use:enhance>
        <div class="flex flex-col items-center space-y-4 w-full">
            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="Email" autocomplete="email" />
                {#if form?.errors?.email?.valid === false}
                    <InputError messages={form?.errors?.email?.message} />
                {/if}
            </div>
            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password" autocomplete="password" />
                {#if form?.errors?.password?.valid === false}
                    <InputError messages={form?.errors?.password?.message} />
                {/if}
            </div>
            <InputError messages={form?.message} />
            <div class="flex justify-between items-center w-full max-w-sm">
                <div class="flex flex-col">
                    <a href="/register" class="text-sm text-slate-600">Haven't registered? Register Instead</a>
                </div>
                <Button type="submit">Login</Button>
            </div>
        </div>
    </form>
</div>