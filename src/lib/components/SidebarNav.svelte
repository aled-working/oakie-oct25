<script>
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';

	import '$lib/components/ExpandingRow.svelte';

	import Wire from '$lib/components/Wire.svelte';
	export let data = {};
	let default_data = {
		title: 'untitled',
		...data
	};
</script>

<aside class="Sidebar col gap-2">
	<h2>{data.title}</h2>
	<nav class="col"></nav>
	<a class="text-green" href="#">Setup and data</a>
	<a class="text-green" href="#">Knowledge</a>
	<a class="text-blue" href="#">Process</a>
	<a class="text-blue" href="#">Process</a>
	<a class="text-blue" href="#">Process</a>
	<button class="bg-blue text-white">Add</button>
	<div class="spacer"></div>
	<a class="text-green" href="#">Knowledge Base</a>
	<a class="text-green" href="#">Model and settings</a>
	<button class="bg-green round-button text-white">AE</button>
</aside>

<style>
	.page {
		margin-top: 6rem;
	}
	.layout-cols {
		grid-template-columns: 10rem auto;
		gap: 4rem;
		width: min(1400px, 96svw);
	}
	.SectionWithSidebar {
		grid-template-columns: 1fr 2fr;
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
		.input-group.grid-3 {
			grid-template-columns: 1fr;
			margin-bottom: 4rem;
		}
	}
</style>
