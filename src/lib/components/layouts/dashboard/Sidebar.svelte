<script lang="ts">
    import { page } from "$app/stores";
    export let isMobile = false
</script>

<div class="flex flex-col {isMobile ? 'w-full' : 'w-[250px!important]' }  min-h-[calc(100svh-65px)] mt-4" >

    <div data-collapsed="false" class="group flex flex-col gap-4 py-2">
        <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2" >
            <a
                href="/dashboard"
                class="{$page.url.pathname === '/dashboard' ? 'active' : 'inactive'} inline-flex items-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-8 rounded-md px-3 text-xs justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide-icon lucide lucide-inbox mr-2 size-4"
                    aria-hidden="true"
                    ><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path
                        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path>
                </svg>
                Dashboard
                 <!-- <span class="ml-auto text-background dark:text-white">128</span> -->
            </a>
        </nav>
    </div>

    <div role="none" data-orientation="horizontal" data-melt-separator="" data-separator-root="" class="-mx-1 my-1 h-px bg-muted"></div>

    <div data-collapsed="false" class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
        <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2" >
            <a
                href="/profile"
                class=" { $page.url.pathname === '/profile' ? 'active' : 'inactive'} inline-flex items-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide-icon lucide lucide-users mr-2 size-4"
                    aria-hidden="true"
                    ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
                        cx="9"
                        cy="7"
                        r="4"
                    ></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                    ></path>
                </svg>
                Profile 
                <!-- <span class="ml-auto">972</span> -->
            </a>
        </nav>
    </div>

</div>

<style>
    .active {
        @apply bg-primary text-primary-foreground hover:bg-primary/90;
    }
    .inactive {
        @apply hover:bg-accent hover:text-accent-foreground bg-transparent;
    }
</style>
