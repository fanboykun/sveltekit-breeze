<script lang="ts">
    import Check from "svelte-radix/Check.svelte";
    import CaretSort from "svelte-radix/CaretSort.svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/components/shadcn-utils";
    import { createEventDispatcher, tick } from "svelte";
 
    type Data = {
      value: string;
      label: string;
    };

    export let data: Data[]
    export let placeholder: string|null
    export let selected: string = ""

    const dispacth = createEventDispatcher()

    let open = false;
    let value = "";

    if(selected){
        value = selected
    }
 
  $: selectedValue =
    data.find((f) => f.value === value)?.label ?? placeholder ?? "Select";
 
  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    dispacth("select", value)
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>

<Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        class="w-[200px] justify-between"
      >
        {selectedValue}
        <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-[200px] p-0">
      <Command.Root>
        <Command.Input placeholder="Search Data..." class="h-9" />
        <Command.Empty>No Data found.</Command.Empty>
        <Command.Group>
          {#each data as d}
            <Command.Item
              value={d.value}
              onSelect={(currentValue) => {
                value = currentValue;
                closeAndFocusTrigger(ids.trigger);
              }}
            >
              <Check
                class={cn(
                  "mr-2 h-4 w-4",
                  value !== d.value && "text-transparent"
                )}
              />
              {d.label}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>