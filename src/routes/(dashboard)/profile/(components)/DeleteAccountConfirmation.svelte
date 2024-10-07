<script lang="ts">
	  import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import Button from "$lib/components/ui/button/button.svelte";
	import type { SubmitFunction } from "@sveltejs/kit";

    
    let processing = false
    const handleDeleteAccount: SubmitFunction = () => {
        processing = true
        return async ( { result } ) => {
            if(result.type == "redirect") {
                processing = false
                return goto(result.location)
            }
        }
    }
</script>

<AlertDialog.Root>
    <AlertDialog.Trigger>
        <slot />
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        <form action="?/deleteAccount" method="POST" class="w-full" use:enhance={handleDeleteAccount}>
          <Button type="submit" variant="destructive" class="flex gap-2 w-full sm:w-fit" disabled={processing}>
            Continue
            {#if processing}
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 200 200"><linearGradient id="a5"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop><stop offset="1" stop-color="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a5)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
            {/if}
        </Button>
        </form>
      </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>