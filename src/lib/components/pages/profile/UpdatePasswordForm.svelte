<script lang="ts">
	import { enhance } from "$app/forms";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import InputError from "$lib/components/ui/InputError.svelte";
    import { page } from '$app/stores';
	import type { SubmitFunction } from "@sveltejs/kit";

    let processing = false
    const handleUpdatePassword: SubmitFunction = () => {
        processing = true
        return async ( { result, update } ) => {
            await update()
            processing = false
        }
    }

</script>
<div class="flex w-full max-w-screen-md h-fit border-b pt-4 pb-6 px-4 flex-col">
    <div class="flex h-full w-full flex-col bg-white rounded-xl">

        <div class="w-full py-4 px-8">
            <form class="w-full" method="POST" action="?/updateUserPassword" use:enhance={handleUpdatePassword}>
                <div class="flex flex-col items-center space-y-4 w-full">
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">Old Password</Label>
                        <Input type="password" id="old_password" name="old_password" placeholder="Old Password" autocomplete="password"  required />
                        {#if $page.form?.errors?.old_password?.valid === false}
                            <InputError messages={$page.form?.errors?.old_password?.message} />
                        {/if}
                    </div>

                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">New Password</Label>
                        <Input type="password" id="new_password" name="new_password" placeholder="New Password" autocomplete="new password"  required />
                        {#if $page.form?.errors?.new_password?.valid === false}
                            <InputError messages={$page.form?.errors?.new_password?.message} />
                        {/if}
                    </div>

                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">Confirm New Password</Label>
                        <Input type="password" id="confirm_new_password" name="confirm_new_password" placeholder="Confirm New Password" autocomplete="new password"  required />
                        {#if $page.form?.errors?.confirm_new_password?.valid === false}
                            <InputError messages={$page.form?.errors?.confirm_new_password?.message} />
                        {/if}
                    </div>

                    <div class="flex justify-between items-center w-full ">
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