<script>
	import Actions from '$lib/components/Actions.svelte';
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { IconSquareRoundedArrowLeftFilled, IconX } from '@tabler/icons-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- sidebar -->
		<SidebarNav data={{ title: 'Untitled' }}></SidebarNav>

		<!-- main   -->
		<main class="col gap-3">
			<div class="row gap">
				<IconSquareRoundedArrowLeftFilled />
				<h2>New Claim Automation</h2>
			</div>

			<!-- paper -->
			<div class="bg-paper panel gap-4">
				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<h3>Get started</h3>
					</div>
					<!-- right -->
					<div class="right col no-gap">
						<div class="input-group col">
							<input
								class="strong"
								type="text"
								value=""
								placeholder="Name this automation"
								autofocus
								required
							/>
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<h3>Dataset for testing</h3>
					</div>
					<!-- right -->
					<div class="right col no-gap">
						<div class="input-group col">
							<input class="strong" type="text" value="" placeholder="Experiment 1" />
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col"></div>
					<!-- right -->
					<div class="right col">
						<p class="text-green">Add case files for testing (and optional config)</p>
						<div class="spacer"></div>
						<Actions
							><button class=" bg-faint text-white" on:click={() => goto('./2-setup-b')}
								>Add case files</button
							>
							<div class="spacer grow"></div>
						</Actions>
					</div>
				</section>

				<section class="withSide"></section>
			</div>
			<!-- ============== -->
		</main>
	</div>
</div>

<style>
	.long-text {
		min-height: 40rem;
		field-sizing: content;
	}

	/* move? */
	.page {
		padding-top: 4rem;
	}
	.layout-cols {
		grid-template-columns: 10rem auto;
		gap: 4rem;
		width: min(1400px, 96svw);
	}
	.withLeftCol {
		grid-template-columns: 1fr 2fr;
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
