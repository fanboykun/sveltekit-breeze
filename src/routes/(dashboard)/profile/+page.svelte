<script lang="ts">
	import DeleteAccount from '$lib/components/pages/profile/DeleteAccount.svelte';
	import UpdatePasswordForm from '$lib/components/pages/profile/UpdatePasswordForm.svelte';
	import UpdateProfileForm from '$lib/components/pages/profile/UpdateProfileForm.svelte';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>


<div class="bg-gray-50 w-full h-full">

	<UpdateProfileForm authUser={data.authUser} {form} />
	<UpdatePasswordForm {form} />
	<DeleteAccount {form}  />

</div>
