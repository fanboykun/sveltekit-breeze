<script lang="ts">

	import { enhance } from "$app/forms";
	import type { User } from "@prisma/client";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import InputError from "$lib/components/ui/InputError.svelte";
    import { page } from '$app/stores';
	import type { SubmitFunction } from "@sveltejs/kit";

    export let authUser: User|null

    let processing = false
    const handleUpdateProfile: SubmitFunction = () => {
        processing = true
        return async ( { result, update } ) => {
            if(result.type == "success") {
                await update()
            }
            processing = false
        }
    }


</script>
<div class="flex w-full max-w-screen-md h-fit border-b pt-4 pb-6 px-4 flex-col">
    <div class="flex h-full w-full flex-col bg-white rounded-xl">

        <div class="w-full py-4 px-8">
            <form class="w-full" method="POST" action="?/updateUserProfile" use:enhance={handleUpdateProfile}>
                <div class="flex flex-col items-center space-y-4 w-full">
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="email">Email</Label>
                        <Input type="email" value={authUser?.email} id="email" name="email" placeholder="Email" autocomplete="email"  required />
                        {#if $page.form?.errors?.email?.valid === false}
                            <InputError messages={$page.form?.errors?.email?.message} />
                        {/if}
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="name">Name</Label>
                        <Input type="name" value={authUser?.name} id="name" name="name" placeholder="Name" />
                        {#if $page.form?.errors?.name?.valid === false}
                            <InputError messages={$page.form?.errors?.name?.message} />
                        {/if}
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <Button type="submit" class="flex gap-2" disabled={processing}>
                            Update
                            {#if processing}
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 200 200"><linearGradient id="a5"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop><stop offset="1" stop-color="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a5)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
                            {/if}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
</div>