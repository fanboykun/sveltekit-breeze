<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button";
	  import InputError from "$lib/components/ui/InputError.svelte";
    import type { PageData, ActionData } from './$types';
	  import { enhance } from "$app/forms";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	  // export let data: PageData;
    export let form: ActionData;

    onMount(async() => {
      const url = window.location.pathname
      if (url.endsWith('/') && url !== '/') {
            const newPath = url.slice(0, -1);
            console.log(url, newPath)
            await goto(newPath);
        }
    })

  </script>
  
  <div class="max-w-screen-sm w-full bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
      <h2 class="text-xl py-4 font-semibold">Login To Your Account</h2>
      <form class="w-full" method="POST" action="?/register" use:enhance>
          <div class="flex flex-col items-center space-y-4 w-full">
              <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="email">Email</Label>
                  <Input type="email" id="email" name="email" placeholder="Email" autocomplete="email"  required />
                {#if form?.errors?.email?.valid === false}
                  <InputError messages={form?.errors?.email?.message} />
                {/if}
              </div>
              <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="name">Name</Label>
                  <Input type="name" id="name" name="name" placeholder="Name" />
                  {#if form?.errors?.name?.valid === false}
                    <InputError messages={form?.errors?.name?.message} />
                  {/if}
              </div>
              <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" name="password" placeholder="Password" autocomplete="new-password" required />
                {#if form?.errors?.password?.valid === false}
                  <InputError messages={form?.errors?.password?.message} />
                {/if}
              </div>
              <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="confirm_password">Confirm Password</Label>
                  <Input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" autocomplete="new-password" required />
                {#if form?.errors?.confirm_password?.valid === false}
                  <InputError messages={form?.errors?.confirm_password?.message} />
                {/if}
              </div>
              <div class="flex justify-between items-center w-full max-w-sm">
                  <a href="/login" class="text-sm text-slate-600">Already registered?</a>
                  <Button type="submit">Register</Button>
              </div>
          </div>
      </form>
  </div>