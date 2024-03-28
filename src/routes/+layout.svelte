<script>
    import "../styles/app.css";
	import { Toaster } from "$lib/components/ui/sonner";

    // example usage of toast
    // import { toast } from "svelte-sonner";
	// import { onMount } from "svelte";
    // onMount(() => {
    //     toast("Welcome to Sonner",{
    //         description: "Sunday, December 03, 2023 at 9:00 AM",
    //         action: {
    //             label: "Undo",
    //             onClick: () => console.log("Undo")
    //         }
    //     })
    // });

</script>

<Toaster closeButton />

<slot />
