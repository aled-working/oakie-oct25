<div class="page middle">
	<div class="layout-cols grid">
		<!-- sidebar -->
		<aside class="Sidebar col gap-3">
			<h2>Lorem ipsum dolor sit amet</h2>
			<nav class="col"></nav>
			<a class="text-green" href="#">Setup</a>
			<a class="text-green" href="#">Knowledge</a>
			<a class="text-blue" href="#">Process</a>
			<a class="text-blue" href="#">Process</a>
			<a class="text-blue" href="#">Process</a>
			<button class="bg-blue text-white">Add</button>
		</aside>

		<!-- main   -->
		<main class="col gap-3">
			<h2>Title</h2>
			<div class="bg-paper panel">
				<!-- editable table of inputs -->
				<div class="editable-table grid">
					<!-- row -->
					<div class="grid-3 table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
					<!-- row -->
					<div class="grid-3 table-row">
						<input type="text" value="value" />
						<input type="text" value="value" />
						<input type="text" value="value" />
					</div>
				</div>
			</div>
		</main>
	</div>
</div>

<style>
	.layout-cols {
		grid-template-columns: 1fr 3fr;
		gap: 4rem;
		width: min(1400px, 100svw);
	}

	.table-row:focus-within {
		outline: 2px solid black;
		border-radius: 0.5rem;
		z-index: 9;
	}
	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
		.table-row {
			grid-template-columns: 1fr;
			margin-bottom: 4rem;
		}
	}
</style>
