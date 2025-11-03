<script>
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { IconSquareRoundedArrowLeftFilled, IconX } from '@tabler/icons-svelte';
	import DevModeSwitch from '$lib/components/small/DevModeSwitch.svelte';
	import SideBySidePage from '$lib/components/layouts/SideBySidePage.svelte';
</script>

<SideBySidePage>
	<!-- COLUMN file preview -->
	<div class="panel bg-paper col gap-12">
		<!-- <h2>Filename</h2> -->
		<a href="./list"><div class="tag text-blue"><IconX /> Filename.pdf</div></a>

		<!-- paper -->
		<div class="col gap-4">
			<Wire h={'50rem'}>Doc preview</Wire>
		</div>
	</div>

	<!-- COLUMN main   -->
	<main class="panel bg-paper col gap-12">
		<div class="row gap-4">
			<IconSquareRoundedArrowLeftFilled />
			<h2>Dr Aled Evans</h2>
			<DevModeSwitch />
		</div>

		<!-- paper -->
		<div class="col gap-16">
			<!--  -->
			<div class="mini-section withLeftCol baseline grid">
				<!-- left -->
				<p class="strong">Claim</p>
				<!-- right -->
				<p class="text-grey">ABC123456</p>
			</div>
			<!--  -->
			<div class="mini-section withLeftCol baseline grid">
				<!-- left -->
				<p class="strong">Files</p>
				<!-- right -->
				<div class="tags row gap-2">
					<div class="text-blue tag bg-[--faint]">aaaaaaaaa.pdf</div>
					<div class="text-blue tag">aaaaaaaaa.pdf</div>
					<div class="text-blue tag">aaaaaaaaa.pdf</div>
				</div>
			</div>
			<!--  -->
			<section class="withLeftCol grid">
				<!-- left sidebar-->
				<div class="left col">
					<p class="strong">Patient information</p>
				</div>
				<!-- right -->
				<div class="right col gap-4">
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
				</div>
			</section>
			<!--  -->
			<section class="withLeftCol grid">
				<!-- left sidebar-->
				<div class="left col">
					<p class="strong">Patient information</p>
				</div>
				<!-- right -->
				<div class="right col gap-4">
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
				</div>
			</section>
			<!--  -->
			<section class="withLeftCol grid">
				<!-- left sidebar-->
				<div class="left col">
					<p class="strong">Patient information</p>
				</div>
				<!-- right -->
				<div class="right col gap-4">
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
					<ExpandingRow />
				</div>
			</section>
		</div>
		<!-- ============== -->
	</main>
</SideBySidePage>

<style>
	.withLeftCol {
		grid-template-columns: 1fr 2fr;
	}
	.mini-section {
		padding: 1rem 0;
		border-top: 1px solid var(--lighter-grey);
		border-bottom: 1px solid var(--lighter-grey);
	}
</style>
