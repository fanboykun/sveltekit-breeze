<script lang="ts">

	import { enhance } from "$app/forms";
	import type { User } from "@prisma/client";
	import Button from "../ui/button/button.svelte";
	import Input from "../ui/input/input.svelte";
	import Label from "../ui/label/label.svelte";
	import type { ActionData } from "../../../routes/(dashboard)/profile/$types";
	import InputError from "../ui/InputError.svelte";

    export let form: ActionData
</script>
<div class="flex w-full overflow-hidden">
    <div class="flex h-full w-full flex-col">

        <div class="w-full py-4 px-8">
            <form class="w-full" method="POST" action="?/updateUserPassword" use:enhance>
                <div class="flex flex-col items-center space-y-4 w-full">
                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">Old Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Old Password" autocomplete="password"  required />
                        {#if form?.errors?.old_password?.valid === false}
                            <InputError messages={form?.errors?.old_password?.message} />
                        {/if}
                    </div>

                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">New Password</Label>
                        <Input type="password" id="new_password" name="new_password" placeholder="New Password" autocomplete="new password"  required />
                        {#if form?.errors?.new_password?.valid === false}
                            <InputError messages={form?.errors?.new_password?.message} />
                        {/if}
                    </div>

                    <div class="grid w-full  items-center gap-1.5">
                        <Label for="password">Confirm New Password</Label>
                        <Input type="password" id="confirm_new_password" name="confirm_new_password" placeholder="Confirm New Password" autocomplete="new password"  required />
                        {#if form?.errors?.new_password?.valid === false}
                            <InputError messages={form?.errors?.new_password?.message} />
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