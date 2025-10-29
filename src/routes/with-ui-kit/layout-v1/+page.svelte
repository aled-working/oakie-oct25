<script>
	import Sidenav from '$lib/components/old/Sidenav.svelte';
</script>

<div class="page grid">
	<aside><Sidenav /></aside>
	<main class="container">
		<!-- item -->
		<div class="item">
			<h4>Title</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere varius velit,
				vel maximus odio maximus at. In hac habitasse platea dictumst. Mauris lacus elit, vestibulum
				in ornare
			</p>
		</div>
		<!-- item -->
		<div class="item">
			<h4>Title</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere varius velit,
				vel maximus odio maximus at. In hac habitasse platea dictumst. Mauris lacus elit, vestibulum
				in ornare
			</p>
		</div>
	</main>
</div>

<!-- ----- -->
<style>
	.container {
		container-type: inline-size; /* enables container queries by width */
	}
	.item {
		display: grid;
		grid-template-columns: 1fr 4fr;
	}
	@container (max-width: 500px) {
		.item {
			grid-template-columns: 1fr;
		}
	}

	/* ignore below... */
	.page {
		grid-template-columns: 15rem 1fr;
		background-color: white;
	}
	main {
		background-color: var(--Bg-grey);
		padding: 3rem;
		max-width: 100ch;
	}
	p {
		max-width: 75ch;
	}
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
