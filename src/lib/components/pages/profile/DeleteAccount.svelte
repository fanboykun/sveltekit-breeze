<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import DeleteAccountConfirmation from "./DeleteAccountConfirmation.svelte";

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
                    <div class="w-full">
                        <div class="flex flex-col items-center space-y-4 w-full">
                            <div class="grid w-full  items-center gap-1.5">
                                <Label for="email" class="text-gray-800">After deleting your account, all the data that belong's to this account will be removed</Label>
                            </div>
                            <div class="flex justify-start items-center w-full ">
                                <DeleteAccountConfirmation>
                                    <Button type="button" variant="destructive">Delete</Button>
                                </DeleteAccountConfirmation>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div> 
</div>