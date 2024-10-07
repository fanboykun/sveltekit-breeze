<script lang="ts">
	import DeleteAccount from './(components)/DeleteAccount.svelte';
	import UpdatePasswordForm from './(components)/UpdatePasswordForm.svelte';
	import UpdateProfileForm from './(components)/UpdateProfileForm.svelte';
	import { toast } from 'svelte-sonner';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData

	$: {
      if(form?.success != undefined) {
          let isSuccess = form.success as boolean
          let toastMessage = isSuccess ? 'The Action Executed Successfully' : 'The Action Failed to Execute'
          if(form.message && typeof form.message === 'string') toastMessage = form.message
          isSuccess ? toast.success(toastMessage) : toast.error(toastMessage)
      }
  }

</script>


<div class="bg-gray-50 w-full h-full">

	<UpdateProfileForm authUser={data.authUser} />
	<UpdatePasswordForm />
	<DeleteAccount  />

</div>
