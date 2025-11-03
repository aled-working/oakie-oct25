<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- ======== -->
		<slot />
		<!-- ======== -->
	</div>
</div>

<style>
	/* move? */
	.page {
		padding-top: 4rem;
	}
	.layout-cols {
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		width: min(1800px, 96svw);
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
