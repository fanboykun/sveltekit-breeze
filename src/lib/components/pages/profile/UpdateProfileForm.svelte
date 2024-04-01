<script lang="ts">

	import { enhance } from "$app/forms";
	import type { User } from "@prisma/client";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import type { ActionData } from "../../../../routes/(dashboard)/profile/$types";
	import InputError from "$lib/components/ui/InputError.svelte";

    export let form: ActionData
    export let authUser: User|null

</script>
<div class="flex w-full max-w-screen-md h-fit border-b pt-4 pb-6 px-4 flex-col">
    <div class="flex h-full w-full flex-col bg-white rounded-xl">

        <div class="w-full py-4 px-8">
            <form class="w-full" method="POST" action="?/updateUserProfile" use:enhance>
                <div class="flex flex-col items-center space-y-4 w-full">
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="email">Email</Label>
                        <Input type="email" value={authUser?.email} id="email" name="email" placeholder="Email" autocomplete="email"  required />
                        {#if form?.errors?.email?.valid === false}
                            <InputError messages={form?.errors?.email?.message} />
                        {/if}
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="name">Name</Label>
                        <Input type="name" value={authUser?.name} id="name" name="name" placeholder="Name" />
                        {#if form?.errors?.name?.valid === false}
                            <InputError messages={form?.errors?.name?.message} />
                        {/if}
                    </div>
                    <div class="flex justify-between items-center w-full ">
                        <Button type="submit">Update</Button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
</div>