<script lang="ts">
	import Separator from '$lib/components/dashboard/Separator.svelte';
	import Sidebar from '$lib/components/dashboard/Sidebar.svelte';
	import TopNavigation from '$lib/components/dashboard/TopNavigation.svelte';
    export let data
</script>

<section>
    
    <TopNavigation user={data.user} />

    <section class="hidden md:block mt-16 h-[calc(100svh-70px)]">
        <div class="overflow-hidden h-full rounded-lg border bg-background shadow-lg">
            <div class="flex flex-row overflow-hidden w-full data-[direction=vertical]:flex-col h-full max-h-[800px] items-stretch">

            <Sidebar />
            <Separator />
            
            <slot />

            </div>
        </div>
    </section>

</section>