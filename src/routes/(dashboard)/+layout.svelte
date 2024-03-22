<script lang="ts">
	import Separator from '$lib/components/profile/Separator.svelte';
	import Sidebar from '$lib/components/profile/Sidebar.svelte';
	import TopNavigation from '$lib/components/profile/TopNavigation.svelte';
    export let data
</script>

    
    <TopNavigation user={data.user} />

    <section class="flex h-full min-h-[calc(100svh-200px)] max-h-full">
            <div class="flex flex-row overflow-x-hidden w-full h-full">

            <Sidebar />
            <Separator />

            <section id="content" class="w-full">
                <slot />
            </section>

            </div>
    </section>
