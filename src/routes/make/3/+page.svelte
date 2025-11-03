<script>
	import ListRow from '$lib/components/ListRow.svelte';
	import Actions from '$lib/components/Actions.svelte';
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { IconSquareRoundedArrowLeftFilled, IconX, IconUser } from '@tabler/icons-svelte';
	import DevModeSwitch from '$lib/components/small/DevModeSwitch.svelte';
	import ListPage from '$lib/components/layouts/ListPage.svelte';
</script>

<ListPage>
	<!-- =========== -->
	<!-- LEFT-COL list -->
	<aside class="col py-12">
		<div class="row gap-4">
			<IconSquareRoundedArrowLeftFilled />
			<h2>Claims</h2>
		</div>

		<div class="h-16"></div>
		{#each { length: 20 } as _, i}
			<ListRow words={['Aled Evans']} />
		{/each}
	</aside>

	<!-- RIGHT COL main   -->
	<main class="bg-paper panel">
		<div class="row h-24 gap-4">
			<h2>Dr Aled Evans</h2>
			<DevModeSwitch />
		</div>
		<!-- paper -->
		<div class="bg-paper col gap-8">
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
				<div class="row">
					<a href="./4"
						><div class="text-blue tag">aaaaaaaaa.pdf</div>
						<div class="text-blue tag">aaaaaaaaa.pdf</div>
						<div class="text-blue tag">aaaaaaaaa.pdf</div>
					</a>
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
	</main>
	<!-- ============== -->
</ListPage>

<style>
	section .right {
		border-top: 1px solid var(--color-lightish-grey);
	}
	section {
		& .right,
		& .left {
			padding-top: 1rem;
		}
	}
	.withLeftCol {
		padding-top: 1rem;
		grid-template-columns: 1fr 2fr;
		padding-top: 1rem;
		/* */
	}
	.mini-section {
		padding: 1rem 0;
		border-top: 1px solid var(color--lighter-grey);
		border-bottom: 1px solid var(color--lighter-grey);
	}
</style>
