<script lang="ts">
    export let title: string|null
    export let description: string|null

</script>
<div class="flex flex-col overflow-hidden w-[50%] bg-gray-50" style="">
    <div>
            <!-- Header  -->
            <div class="flex items-center px-4 py-2">
                <h1 class="text-xl font-bold">{title}</h1>
            </div>

            <div class="-mx-1 my-1 h-px bg-muted"></div>
            <!-- End Header -->
    </div>
    <div class="mx-auto w-full h-full py-2 px-4 text-slate-800">
        <p>{description}</p>
    </div>
</div>
