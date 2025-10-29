<script>
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { devMode } from '$lib/store';
</script>

<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- sidebar -->
		<aside class="Sidebar col gap-2">
			<h2>Lorem ipsum dolor sit amet</h2>
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

		<!-- main   -->
		<main class="col gap-3">
			<h2>Title</h2>
			<!-- ============== -->
			<div class="bg-paper panel">
				<!-- subnav eg in Knowledge Base -->
				<div class="subnav row gap-2">
					<a href="" class="strong">Knowledge</a>
					<a href="" class="text-grey">Data Entities</a>
				</div>

				<!--  ====== editable 3 col table ====== -->
				<div class="editable-table grid">
					<!-- row -->
					<div class="grid-3 input-group table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 input-group table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 input-group table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 input-group table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
				</div>
			</div>

			<!-- ============== -->

			<div class="bg-paper panel gap-4">
				<!-- editable table of inputs -->
				<button class="bg-blue text-white">Add</button>
				<div class="editable-list-with-subcategories grid">
					<!-- SectionWithSidebar -->
					<section class="SectionWithSidebar grid-2">
						<!-- left sidebar-->
						<div class="left col">
							<p class="strong">Section or category</p>
							<p class="text-grey">Description</p>
						</div>
						<!-- right -->
						<div class="right col">
							<div class="col gap">
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<ExpandingRow />
								<!-- <CollapsingFields {devMode} />
								<CollapsingFields {devMode} /> -->
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- ============== -->
		</main>
	</div>
</div>

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
