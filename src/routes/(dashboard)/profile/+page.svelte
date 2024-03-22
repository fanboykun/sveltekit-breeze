<script lang="ts">
	import DeleteAccount from '$lib/components/profile/DeleteAccount.svelte';
	import UpdatePassword from '$lib/components/profile/UpdatePassword.svelte';
	import UpdateProfile from '$lib/components/profile/UpdateProfile.svelte';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>


<div class="bg-gray-50 w-full h-full">

	<UpdateProfile authUser={data.authUser} {form} />
	<UpdatePassword {form} />
	<DeleteAccount {form} />

</div>
