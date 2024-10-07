<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname;

	const hideShowScrollBar = (state: 'in'|'out' = 'in') => {
		if(document) {
			switch (state) {
				case 'in': 
					document.body.style.overflow = 'hidden'
				break
				case 'out':
					document.body.style.overflow = 'visible'
				break
			}
		}
	}
</script>

{#key pathname}
	<div id="transition_wrapper" in:fly={{ x: -10, duration: 200, delay: 400 }} out:fly={{ x: 5, duration: 200 }} on:introstart={() => hideShowScrollBar()} on:outroend={() => hideShowScrollBar('out')}>
		<slot />
	</div>
{/key}