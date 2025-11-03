<script>
	import File from '$lib/components/ListFile.svelte';

	import Actions from '$lib/components/Actions.svelte';
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { user_content } from '$lib/store';

	import {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconChevronRight,
		IconFileImport
	} from '@tabler/icons-svelte';
	import ListRow from '$lib/components/ListRow.svelte';
	import Header from '$lib/components/Header.svelte';

	export let devMode = false;
</script>

<Header home="/flow-tw/" />
<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- sidebar -->
		<SidebarNav data={{ title: 'Untitled' }}></SidebarNav>

		<!-- main   -->
		<main class="bg-paper panel col gap-12">
			<!-- ============== -->
			<div class="row h-12 gap-4">
				<IconSquareRoundedArrowLeftFilled />
				<h2>New Claim Automation</h2>
			</div>

			<div class="col gap-16">
				<!-- SECTION  - title-->
				<section class=" grid grid-cols-[1fr_2fr]">
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
								placeholder="Name this automation"
								required
								bind:value={$user_content.title}
							/>
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!-- SECTION  - dataset title-->
				<section class=" grid grid-cols-[1fr_2fr]">
					<!-- left sidebar-->
					<div class="left col">
						<h3>Dataset for testing</h3>
						<!-- <p class="text-grey">Maybe some help text here</p> -->
						<!-- <p class="data-entity-name text-blue">lorem_ipsum</p> -->
					</div>
					<!-- right -->
					<div class="right col">
						<div class="input-group col">
							<input class="strong" type="text" value="" placeholder="Experiment 1" />
							<input type="text" value="" placeholder="Description (optional)" />
						</div>
					</div>
				</section>

				<!-- SECTION  - file uploads-->
				<section class=" grid grid-cols-[1fr_2fr]">
					<!-- left sidebar-->
					<div class="left col"></div>
					<!-- right -->
					<div class="right col gap-2">
						<Actions
							><button class=" bg-faint gap-4 text-white"><IconFileImport /> Add</button>
							<div class="spacer grow"></div>
							<!-- <button class="bg-transparent text-white">Cancel</button> -->
							<button class="text-green gap-4 bg-white"
								><img src="/LOGO-30w-green.svg" alt="" />Next</button
							>
						</Actions>

						<File style="zip">81234567.zip</File>
						<File><a href="./3">81234567_bssdg.pdf</a></File>
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
	/* move? */
	.page {
		padding-top: 4rem;
	}
	.layout-cols {
		grid-template-columns: 10rem auto;
		gap: 4rem;
		width: min(1400px, 96svw);
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
