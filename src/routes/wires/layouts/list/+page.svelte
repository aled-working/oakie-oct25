<script>
	import ListRow from '$lib/components/ListRow.svelte';

	import Actions from '$lib/components/Actions.svelte';

	import Sidebar from '$lib/components/SidebarNav.svelte';

	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';

	import '$lib/components/ExpandingRow.svelte';

	import Wire from '$lib/components/Wire.svelte';

	export let devMode = false;

	let dummyText =
		'CHAPTER 5 – EXCLUSIONS AND RESTRICTIONS TO THE POLICY The Insurer will not pay and will not be liable for:* The proficiency of the diagnosis, treatment, or advice* Anything directly or indirectly connected with Insured Events and/or the medical conditions specified below---5.1 General Exclusions### 5.1.1The Insurer is not liable for any damage suffered by the Insured or a third party as a result of:* The Insured’s selection of (or referral by the Insurer to) a physician, family physician, specialist, surgeon, anesthetist, hospital, or any other provider (Network or Non-Network).* Any act or omission by those providers, including advice, treatment, surgical procedures, medication, failure to perform a procedure, or failure to provide treatment.* Clarification: Service Providers are not agents or employees of the Insurer.### 5.1.2The Insurer will not pay benefits for an Insured Event connected directly or indirectly with, or deriving from:#### 5.1.2.1 – War, terrorism, rebellion* War, invasion, acts of terrorism, acts of a foreign enemy, hostile acts or warlike acts (declared or undeclared war), civil war.* Acts of terror on behalf of or connected to any organization.* Terrorism = use of force for political/religious ends, including violence to intimidate the public.* Rebellion, uprising, mutiny, insurrection, revolution, illegal military rule, state of siege, boycott, etc.';
</script>

<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- LEFT-COL list -->
		<aside class="col no-gap">
			<h2>Claims</h2>
			<div class="spacer-4"></div>
			{#each { length: 20 } as _, i}
				<ListRow></ListRow>
			{/each}
		</aside>

		<!-- RIGHT COL main   -->
		<main class="col gap-3">
			<h2>Dr Aled Evans</h2>

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
					<div class="row">
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
		grid-template-columns: 20rem auto;
		gap: 4rem;
		width: min(1400px, 96svw);
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
