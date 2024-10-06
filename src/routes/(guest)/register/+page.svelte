<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button";
	  import InputError from "$lib/components/ui/InputError.svelte";
    import type { ActionData } from './$types';
	  import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { toast } from "svelte-sonner";
	import { goto } from "$app/navigation";

    export let form: ActionData;

    let processing = false
    const handleRegister: SubmitFunction = () => {
        processing = true
        return async ( { result, update } ) => {
            if(result.type == "redirect") {
                processing = false
                toast.success('Welcome!')
                return goto(result.location)
            }else {
                await update()
                processing = false
            }
        }
    }

  </script>
  
  <div class="max-w-screen-sm w-full bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
      <h2 class="text-xl py-4 font-semibold">Create an Account</h2>
      <form class="w-full" method="POST" action="?/register" use:enhance={handleRegister}>
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
              <div class="flex justify-between items-center flex-col sm:flex-row gap-2 w-full max-w-sm">
                  <a href="/login" class="text-sm text-slate-600">Already registered?</a>
                  <Button type="submit" class="flex gap-2" disabled={processing}>
                    Register
                    {#if processing}
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 200 200"><linearGradient id="a5"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop><stop offset="1" stop-color="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a5)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
                    {/if}
                </Button>
              </div>
          </div>
      </form>
  </div>