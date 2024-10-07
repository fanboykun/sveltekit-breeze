<script lang="ts">
	import Separator from '$lib/components/layouts/dashboard/Separator.svelte';
	import Sidebar from '$lib/components/layouts/dashboard/Sidebar.svelte';
	import TopNavigation from '$lib/components/layouts/dashboard/TopNavigation.svelte';
	import PageTransition from '$lib/components/ui/PageTransition.svelte';
	import { fly } from 'svelte/transition';
    export let data
    let isSidebarShow = true
</script>
<svelte:head>
    <title>Dashboard Sveltekit Breeze</title>
</svelte:head>

    <TopNavigation user={data.user} onHideShowSidebar={() => isSidebarShow = !isSidebarShow} isSidebarShow />

    <section class="flex h-full min-h-[calc(100svh-200px)] max-h-full">
            <div class="flex flex-row w-full h-full">
                {#if isSidebarShow}
                <div class="hidden md:flex" in:fly={{ x: -10, duration: 200 }}>
                      
                    <Sidebar />
                    <Separator />

                </div>
                {/if}
                <section id="content" class="overflow-x-hidden w-full h-full">
                    <PageTransition pathname={data.pathname}>
                        <slot />
                    </PageTransition>
                </section>

            </div>
    </section>
