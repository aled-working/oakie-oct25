<script>
	import File from '$lib/components/ListFile.svelte';

	import Actions from '$lib/components/Actions.svelte';
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';

	import {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconChevronRight,
		IconFileImport
	} from '@tabler/icons-svelte';
	import ListRow from '$lib/components/ListRow.svelte';

	export let devMode = false;
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

			<!-- PAPER -->
			<div class="bg-paper panel gap-4">
				<!-- SECTION  - title-->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<h3>Get started</h3>
						<!-- <p class="text-grey">Maybe some help text here</p> -->
						<!-- <p class="data-entity-name text-blue">lorem_ipsum</p> -->
					</div>
					<!-- right -->
					<div class="right col no-gap">
						<div class="input-group col">
							<input
								class="strong"
								type="text"
								value="Post Paid Claims EU"
								placeholder="Name this automation"
								required
							/>
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!-- SECTION  - dataset title-->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<h3>Dataset for testing</h3>
						<!-- <p class="text-grey">Maybe some help text here</p> -->
						<!-- <p class="data-entity-name text-blue">lorem_ipsum</p> -->
					</div>
					<!-- right -->
					<div class="right col no-gap">
						<div class="input-group col">
							<input class="strong" type="text" value="" placeholder="Experiment 1" />
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!-- SECTION  - file uploads-->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col"></div>
					<!-- right -->
					<div class="right col">
						<Actions
							><button class=" bg-faint gap text-white"><IconFileImport /> Add</button>
							<div class="spacer grow"></div>
							<!-- <button class="bg-transparent text-white">Cancel</button> -->
							<button class="text-green gap bg-white"
								><img src="/LOGO-30w-green.svg" alt="" />Next</button
							>
						</Actions>

						<File style="zip">81234567.zip</File>
						<File><a href="./3-list">81234567_bssdg.pdf</a></File>
						<File>81234567_bssdg.pdf</File>
						<File style="zip">81234567.zip</File>
						<File>81234567_bssdg.pdf</File>
						<File style="zip">81234567.zip</File>
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
