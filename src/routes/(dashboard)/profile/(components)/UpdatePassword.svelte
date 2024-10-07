<script lang="ts">
	import type { User } from "@prisma/client";
	import Separator from "../../../../lib/components/layouts/dashboard/Separator.svelte";
	import SideContent from "./SideContent.svelte";
	import UpdatePasswordForm from "./UpdatePasswordForm.svelte";
	import type { ActionData } from "../../../routes/(dashboard)/profile/$types";

    export let form: ActionData
</script>
<div class="flex w-full max-w-screen-md h-fit border-b p-4 flex-col">
	<div class="bg-white rounded-xl">
	<div class="px-8 pt-4 pb-2">
		<h3 class="text-lg font-medium">Your Login Information</h3> 
		<p class="text-sm text-muted-foreground">Update your account's password</p>
	</div>
    <UpdatePasswordForm {form} />
	</div>
</div>