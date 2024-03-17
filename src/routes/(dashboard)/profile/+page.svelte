<script lang="ts">
	import Content from "$lib/components/dashboard/Content.svelte";
	import Separator from "$lib/components/dashboard/Separator.svelte";
	import SideContent from "$lib/components/dashboard/SideContent.svelte";
	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;
</script>

<div class="bg-gray-50 w-full h-full">

	<div class="flex w-full h-fit border-b py-4 shadow-md bg-white">
		<SideContent />
		<Separator />
		<Content authUser={data.authUser} {form} />
	</div>

</div>



