<script>
	import { devMode } from '$lib/store';
	import { lorem } from '$lib/temp_functions';

	export let value = 'Lorem ipsum';
	export let description = 'Lorem ipsum dolor sit amen';
</script>

<!-- contenteditable -->
<div class="CollapsingFields row input-group baseline gap">
	<div class="contenteditable strong" contenteditable="true">Lorem ipsum</div>
	<div class="contenteditable small text-lightish-grey grow" contenteditable="true">123456</div>

	<!-- extra fields in devMode -->
	{#if $devMode}
		<div class="focus-only contenteditable small text-green baseline grow" contenteditable="true">
			<p class="grow">Data</p>
			<span class="small">Label</span>
		</div>
		<div class="focus-only contenteditable small text-green baseline grow" contenteditable="true">
			<p class="grow">Data</p>
			<span class="small">Label</span>
		</div>
		<div class="focus-only contenteditable small text-green baseline grow" contenteditable="true">
			<p class="grow">Data</p>
			<span class="small">Label</span>
		</div>
	{/if}

	<!--  -->

	<!-- <div class="contenteditable"><span class="text-blue tag small">Idiot</span></div> -->
</div>

<style>
	/* NOTE: .contenteditable is styled in ui.css (padding and bg) */
	.CollapsingFields:focus-within {
		display: grid;
		gap: 0;
	}
	.CollapsingFields:not(:focus-within) .focus-only {
		display: none;
	}
	.CollapsingFields:not(:focus-within) .contenteditable {
		border-top: 0;
		padding: 0;
	}
</style>
