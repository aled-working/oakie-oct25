<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header home="/flow-tw/" />
<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- ============== -->
		<slot />

		<!-- ============== -->
	</div>
</div>

<style>
	/* move? */
	.page {
		padding-top: 4rem;
	}
	.layout-cols {
		grid-template-columns: 20rem auto;
		gap: 8rem;
		width: min(1400px, 96svw);
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
