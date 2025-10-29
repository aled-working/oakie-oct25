<div class="page centred-col bg-paper">
	<div class="layout grid">
		<!-- SideBar -->
		<aside class="panel col gap bg-white">
			<h2>Work less,<br />Do more.</h2>
			<div class="card bg-green text-white"><h3>New Template...</h3></div>
			<div class="card bg-blue text-white">
				<h3>Title</h3>
				<small class="text-faint">meta</small>
			</div>
			<div class="card bg-blue text-white">
				<h3>Title</h3>
				<small class="text-faint">meta</small>
			</div>
		</aside>

		<!-- main list -->
		<main class="browsing-list panel bg-white">
			<!-- filters -->
			<nav class="filters row text-green gap">
				<div class="">[ ]</div>
				<!-- TODO -->
				<a class="strong">All automations</a>
				<a class="">Made by me</a>
				<a class="grow">[ ]</a>
				<!-- TODO -->
				<a class="strong">Last modified</a>
				<a class="">A-Z</a>
			</nav>

			<div class="spacer-3"></div>

			<!-- grid -->
			<div class="grid-2 gap">
				{#each { length: 20 } as _, i}
					<div class="card bg-paper">
						<h3>Title</h3>
						<small class="text-grey">Meta meta</small>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>

<style>
	.layout.grid {
		grid-template-columns: 20rem 50rem;
		gap: 3rem;
	}
</style>
