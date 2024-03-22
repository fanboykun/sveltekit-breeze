<script lang="ts">
	import type { User } from "@prisma/client";
	import Separator from "./Separator.svelte";
	import SideContent from "./SideContent.svelte";
	import type { ActionData } from "../../../routes/(dashboard)/profile/$types";
	import Button from "../ui/button/button.svelte";
	import { enhance } from "$app/forms";
	import Label from "../ui/label/label.svelte";
	import DeleteAccountConfirmation from "./DeleteAccountConfirmation.svelte";

    export let form: ActionData

    let accountDeletionFail = {
        fail: false,
        message: ''
    }
    $: {
        if(form?.accountDeletion?.success === false) {
            accountDeletionFail.fail = true
            accountDeletionFail.message = form?.accountDeletion?.message
            setTimeout(() => {
                accountDeletionFail.fail = false
            }, 5000)
        }
    }
</script>
<div class="flex w-full max-w-screen-md h-fit border-b pt-4 pb-6 px-4 flex-col">
	<div class="bg-white rounded-xl">

        <div class="px-8 pt-4 pb-2">
            <h3 class="text-lg font-medium">Account Deletion</h3> 
            <p class="text-sm text-muted-foreground">Delete your account</p>
        </div>

        <div class="flex w-full overflow-x-hidden">
            <div class="flex h-full w-full flex-col">
        
                <div class="w-full py-4 px-8">
                    <form class="w-full" method="POST" action="?/deleteAccount" use:enhance>
                        <div class="flex flex-col items-center space-y-4 w-full">
                            <div class="grid w-full  items-center gap-1.5">
                                <Label for="email" class="text-gray-800">After deleting your account, all the data that belong's to this account will be removed</Label>
                            </div>
                            <div class="flex justify-start items-center w-full ">
                                <DeleteAccountConfirmation>
                                    <Button type="button" variant="destructive">Delete</Button>
                                    {#if accountDeletionFail.fail}
                                        <span class="ml-2 text-red-500 font-semibold text-md">{accountDeletionFail.message}</span>
                                    {/if}
                                </DeleteAccountConfirmation>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

    </div> 
</div>