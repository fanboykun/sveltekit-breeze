<script lang="ts">
	  import { enhance } from "$app/forms";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
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
        <form action="?/deleteAccount" method="POST" use:enhance>
          <AlertDialog.Action type="submit" class="bg-destructive">
            Continue
          </AlertDialog.Action>
        </form>
      </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>