<script lang="ts">
	import { enhance } from "$app/forms";
	import type { User } from "lucia";
	import Button from "../ui/button/button.svelte";
	import * as DropdownMenu from "../ui/dropdown-menu";
    export let user: User|null

</script>
<div class=" absolute top-0 w-full flex justify-between px-4 py-2">
    <Button variant="link" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>                      
        <span class="mx-1">
            Home
        </span>  
    </Button>
    <div class="flex gap-4">
        {#if user}
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button type="button" class="bg-slate-900 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Label>
                    <Button variant="outline" class="border-none" type="button">{user?.email}</Button>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
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