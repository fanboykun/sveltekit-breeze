<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button";
    import { enhance } from "$app/forms";
	import InputError from "$lib/components/ui/InputError.svelte";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { goto } from "$app/navigation";
	import { toast } from "svelte-sonner";

    export let form
    let processing = false
    const handleLogin: SubmitFunction = () => {
        processing = true
        return async ( { result, update } ) => {
            if(result.type == "redirect") {
                processing = false
                toast.success('Welcome Back!')
                return goto(result.location)
            }else {
                await update()
                processing = false
            }
        }
    }
</script>

<div class="max-w-screen-sm w-full bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
    <h2 class="text-xl py-4 font-semibold">Login To Your Account</h2>
    <form class="w-full" method="POST" action="?/login" use:enhance={handleLogin}>
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
            <div class="flex flex-col sm:flex-row gap-2 justify-between items-center w-full max-w-sm">
                <a href="/register" class="text-sm text-slate-600">Haven't registered? Register Instead</a>
                <Button type="submit" class="flex gap-2" disabled={processing}>
                    Login
                    {#if processing}
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 200 200"><linearGradient id="a5"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop><stop offset="1" stop-color="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a5)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
                    {/if}
                </Button>
            </div>
        </div>
    </form>
</div>