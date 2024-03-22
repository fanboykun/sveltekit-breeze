<script lang="ts">
	import { enhance } from "$app/forms";
	import type { User } from "lucia";
	import Button from "../ui/button/button.svelte";
	import * as DropdownMenu from "../ui/dropdown-menu";
	import { browser } from "$app/environment";
    export let user: User|null

    const createGradientAvatar = () => {
        const getRandomColor = () => {
            const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta"];
            return colors[Math.floor(Math.random() * colors.length)];
        };

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 100;
        canvas.height = 100;

        const gradient = ctx.createLinearGradient(0, 0, 100, 100);
        gradient.addColorStop(1, getRandomColor());
        gradient.addColorStop(0.5, getRandomColor());
        gradient.addColorStop(0, getRandomColor());

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 100, 100);
        return canvas.toDataURL();
    }

</script>
<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<a href="/"
			class="inline-flex items-center rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-start">
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
                        <button
                        type="button"
                        tabindex="0"
                        aria-controls="YXndwT8NYE"
                        aria-expanded="false"
                        data-state="closed"
                        id="we3ucOYIWR"
                        data-melt-dropdown-menu-trigger=""
                        data-menu-trigger=""
                        class="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full"
                        data-button-root="">
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
                            <Button variant="outline" class="border-none" type="button">{user?.email}</Button>
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
	</div>
</div>