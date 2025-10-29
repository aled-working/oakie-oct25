<script>
	import Sidebar from '$lib/components/SidebarNav.svelte';

	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';

	import '$lib/components/ExpandingRow.svelte';

	import Wire from '$lib/components/Wire.svelte';

	export let devMode = false;
</script>

<div class="Actions row bg-green baseline"><slot /></div>

<style>
	.Actions {
		padding: 1rem;
	}
</style>
