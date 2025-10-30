<script>
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { IconSquareRoundedArrowLeftFilled, IconX } from '@tabler/icons-svelte';
	import DevModeSwitch from '$lib/components/small/DevModeSwitch.svelte';
</script>

<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- RIGHT col file preview -->
		<div class="col gap-3">
			<!-- <h2>Filename</h2> -->
			<a href="./list"><div class="tag text-blue"><IconX /> Filename.pdf</div></a>

			<!-- paper -->
			<div class="bg-paper panel col gap-4">
				<Wire h={'50rem'}>Doc preview</Wire>
			</div>
		</div>

		<!-- LEFT COL main   -->
		<main class="col gap-3">
			<div class="row gap">
				<IconSquareRoundedArrowLeftFilled />
				<h2>Dr Aled Evans</h2>
				<DevModeSwitch />
			</div>

			<!-- paper -->
			<div class="bg-paper panel col gap-4">
				<!--  -->
				<div class="mini-section withLeftCol grid-2 baseline">
					<!-- left -->
					<p class="strong">Claim</p>
					<!-- right -->
					<p class="text-grey">ABC123456</p>
				</div>
				<!--  -->
				<div class="mini-section withLeftCol grid-2 baseline">
					<!-- left -->
					<p class="strong">Files</p>
					<!-- right -->
					<div class="tags row">
						<div class="text-blue tag">aaaaaaaaa.pdf</div>
						<div class="text-blue tag">aaaaaaaaa.pdf</div>
						<div class="text-blue tag">aaaaaaaaa.pdf</div>
					</div>
				</div>
				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<p class="strong">Patient information</p>
					</div>
					<!-- right -->
					<div class="right col gap">
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
					</div>
				</section>
				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<p class="strong">Patient information</p>
					</div>
					<!-- right -->
					<div class="right col gap">
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
					</div>
				</section>
				<!--  -->
				<section class="withLeftCol grid-2">
					<!-- left sidebar-->
					<div class="left col">
						<p class="strong">Patient information</p>
					</div>
					<!-- right -->
					<div class="right col gap">
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
						<ExpandingRow />
					</div>
				</section>
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
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		width: min(1800px, 96svw);
	}
	.withLeftCol {
		grid-template-columns: 1fr 2fr;
	}
	.mini-section {
		padding: 1rem 0;
		border-top: 1px solid var(--lighter-grey);
		border-bottom: 1px solid var(--lighter-grey);
	}

	@media (max-width: 799px) {
		.layout-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
