<script>
	import Field from './Field.svelte';

	import Sidenav from './Sidenav.svelte';

	import Header from './Header.svelte';
</script>

<div class="page">
	<div class="wrapper">
		<Header></Header>
		<div class="layout-grid">
			<aside>
				<Sidenav></Sidenav>
			</aside>
			<main>
				<h2>Main</h2>
				<div class="paper">
					<h3>h3</h3>
					<p>p</p>
					<div class="content-cols grid">
						<div class="content-col">
							<h4>h4</h4>
							<p>p</p>
						</div>
						<div class="content-col">
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>

<!-- =========== -->
<style>
	/* helpers */
	.page {
		min-height: 100svh;
		background-color: var(--white);
	}
	.wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	.layout-grid {
		display: grid;
		grid-template-columns: 15rem 1fr;
		gap: 2rem;
	}
	.paper {
		padding: 3rem;
	}
	.content-cols {
		grid-template-columns: 1fr 2fr;
	}
</style>
