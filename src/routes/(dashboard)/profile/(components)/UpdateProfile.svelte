<script lang="ts">
	import type { User } from "@prisma/client";
	import Separator from "../../../../lib/components/layouts/dashboard/Separator.svelte";
	import SideContent from "./SideContent.svelte";
	import UpdateProfileForm from "./UpdateProfileForm.svelte";
	import type { ActionData } from "../../../routes/(dashboard)/profile/$types";

    export let authUser: User|null
    export let form: ActionData
</script>
<div class="flex w-full max-w-screen-md h-fit border-b flex-col p-4">
	<div class="bg-white rounded-xl">
		<div class="px-8 pt-4 pb-2">
			<h3 class="text-lg font-medium">Your Account Information</h3> 
			<p class="text-sm text-muted-foreground">Update your account's name and email</p>
		</div>
		<UpdateProfileForm {authUser} {form} />
	</div>
</div>