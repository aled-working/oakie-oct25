<script>
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import Header from '$lib/components/Header.svelte';
	import { user_content } from '$lib/store';
</script>

<Header />
<div class="page">
	<div class="layout-cols mx-auto grid grid-cols-[15rem_auto] gap-16">
		<SidebarNav />

		<!-- main   -->
		<main class="bg-paper panel col gap-12">
			<!-- ============== -->
			<slot />
			<!-- ============== -->
		</main>
	</div>
</div>

<style>
	/* move? */
	.page {
		padding-top: 3rem;
	}
	.layout-cols {
		width: min(1400px, 96svw);
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
