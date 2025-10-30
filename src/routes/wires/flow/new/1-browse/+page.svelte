<script>
	import { goto } from '$app/navigation';
	import {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconSearch,
		IconSquareRounded
	} from '@tabler/icons-svelte';
</script>

<div class="page centred-col bg-paper">
	<div class="layout grid">
		<!-- SideBar -->
		<aside class="panel col gap bg-white">
			<h2>Work less,<br />Do more.</h2>
			<div class="card bg-green text-white"><a href="./2-setup-a"><h3>New Template...</h3></a></div>
			{#each { length: 3 }}
				<div class="card bg-blue col gap text-white">
					<h3>Title</h3>
					<div class="row">
						<img src="/LOGO-21w-faint-white.svg" alt="" /><small class="text-faint">meta</small>
					</div>
				</div>
			{/each}
		</aside>

		<!-- main list -->
		<main class="browsing-list panel bg-white">
			<!-- filters -->
			<nav class="filters row text-green gap">
				<div class="text-lighter-grey"><IconSquareRounded /></div>
				<!-- TODO -->
				<a class="strong">All automations</a>
				<a class="">Made by me</a>
				<a class="text-lighter-grey grow"><IconSearch /></a>
				<!-- TODO -->
				<a class="strong">Last modified</a>
				<a class="">A-Z</a>
			</nav>

			<div class="spacer-3"></div>

			<!-- grid -->
			<div class="grid-2 gap">
				{#each { length: 20 } as _, i}
					<div class="card bg-paper col gap-3">
						<h3>Title</h3>
						<div class="row">
							<small class="text-grey">Meta meta</small>
						</div>
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
