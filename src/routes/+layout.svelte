<script>
    import "../styles/app.css";
	import { Toaster } from "$lib/components/ui/sonner";
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";
</script>

<ProgressBar class="text-slate-900" />
<Toaster closeButton />

<slot />
