<script lang="ts">
	import { enhance } from "$app/forms";
	import type { User } from "lucia";
    import { beforeNavigate } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { browser } from "$app/environment";
	import { capitalizeFirstLetter, createGradientAvatar } from '$lib/client/utils'
    import * as Sheet from "$lib/components/ui/sheet";
	import Sidebar from "./Sidebar.svelte";
    
    export let user: User|null
    export let onHideShowSidebar: Function
    export let isSidebarShow: boolean
    let showSidebar = isSidebarShow
    
    let sidebarOpen = false
    beforeNavigate(() => {
        sidebarOpen = false
    })

</script>
<div class="border-b">
	<div class="flex h-16 items-center px-4">
        <button class="hidden sm:flex items-center justify-center px-2 py-1.5 rounded-lg hover:bg-accent" on:click={() => { onHideShowSidebar(); showSidebar = !showSidebar }} type="button">
            {#if showSidebar}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>        
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>              
            {/if}      
        </button>
		<a href="/" class="inline-flex items-center rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start">
            <div class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5" data-avatar-root="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>   
			</div>
            Home
        </a>

		<!-- <nav class="flex items-center space-x-4 lg:space-x-6 mx-6">
			<a href="/examples/dashboard" class="text-sm font-medium transition-colors hover:text-primary">Overview</a>
		</nav> -->

		<div class="ml-auto flex items-center space-x-4">
            {#if user}
            <span class="text-sm font-semibold">{user.name}</span>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <button type="button" class="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full">
                        <div class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                            {#if browser}
                            <img
                                src={createGradientAvatar()}
                                data-melt-avatar-image=""
                                data-bits-avatar-image=""
                                alt="@shadcn"
                                class="aspect-square h-full w-full"
                                style="display: block;"
                            />
                            {/if}
                            <span
                                data-melt-avatar-fallback=""
                                data-avatar-fallback=""
                                class="flex h-full w-full items-center justify-center rounded-full bg-muted"
                                style="display: none;">SC
                            </span>
                        </div>
                    </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                    <DropdownMenu.Group>
                        <DropdownMenu.Label class="p-0">
                            <Button variant="outline" class="w-full border-none" type="button">{user?.email}</Button>
                        </DropdownMenu.Label>
                        <DropdownMenu.Label class="p-0">
                            <Button variant="outline" class="w-full border-none" type="button">{ capitalizeFirstLetter(user?.role) }</Button>
                        </DropdownMenu.Label>
                        <DropdownMenu.Item class="p-0">
                            <form action="/logout" method="post" class="w-full" use:enhance>
                                <Button variant="outline" class="w-full border-none" type="submit">Logout</Button>
                            </form>
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            {/if}
		</div>
        <Sheet.Root bind:open={sidebarOpen}>
            <Sheet.Trigger class="block md:hidden ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-900">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                  
            </Sheet.Trigger>
            <Sheet.Content  side="left" class="w-2/3 sm:w-1/3">
                <Sidebar isMobile={true} />
            </Sheet.Content>
        </Sheet.Root>
	</div>
</div>