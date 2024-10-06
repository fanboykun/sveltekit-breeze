<script lang="ts">
	import Navigation from '$lib/components/layouts/guests/Navigation.svelte';
    export let data
</script>
<div class="w-screen h-screen flex justify-center items-center relative bg-gray-100 overflow-x-hidden">
    <Navigation user={data.user} />

    <div class="flex flex-col w-full mt-24 max-h-[90%]">
        <div class="pb-8">
            <h1 class="w-full text-center text-2xl font-bold text-slate-900">Sveltekit-Breeze</h1>
            <p class="text-gray-800 text-center text-lg">
                This is an Authentication starter kit for sveltekit inspired by Laravel Breeze
            </p>
        </div>
    </div>

</div>