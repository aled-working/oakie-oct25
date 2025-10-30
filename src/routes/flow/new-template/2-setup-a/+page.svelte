<script>
	import Actions from '$lib/components/Actions.svelte';
	import Sidebar from '$lib/components/SidebarNav.svelte';
	import CollapsingFields from '$lib/components/CollapsingFields.svelte';
	import ExpandingRow from '$lib/components/ExpandingRow.svelte';
	import '$lib/components/ExpandingRow.svelte';
	import Wire from '$lib/components/Wire.svelte';
	import { IconSquareRoundedArrowLeftFilled, IconX } from '@tabler/icons-svelte';
	import { goto } from '$app/navigation';

	export let devMode = false;

	let dummyText =
		'CHAPTER 5 – EXCLUSIONS AND RESTRICTIONS TO THE POLICY The Insurer will not pay and will not be liable for:* The proficiency of the diagnosis, treatment, or advice* Anything directly or indirectly connected with Insured Events and/or the medical conditions specified below---5.1 General Exclusions### 5.1.1The Insurer is not liable for any damage suffered by the Insured or a third party as a result of:* The Insured’s selection of (or referral by the Insurer to) a physician, family physician, specialist, surgeon, anesthetist, hospital, or any other provider (Network or Non-Network).* Any act or omission by those providers, including advice, treatment, surgical procedures, medication, failure to perform a procedure, or failure to provide treatment.* Clarification: Service Providers are not agents or employees of the Insurer.### 5.1.2The Insurer will not pay benefits for an Insured Event connected directly or indirectly with, or deriving from:#### 5.1.2.1 – War, terrorism, rebellion* War, invasion, acts of terrorism, acts of a foreign enemy, hostile acts or warlike acts (declared or undeclared war), civil war.* Acts of terror on behalf of or connected to any organization.* Terrorism = use of force for political/religious ends, including violence to intimidate the public.* Rebellion, uprising, mutiny, insurrection, revolution, illegal military rule, state of siege, boycott, etc.';
</script>

<div class="page centred-col">
	<div class="layout-cols grid">
		<!-- sidebar -->
		<Sidebar data={{ title: 'Untitled' }}></Sidebar>

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
						<!-- <p class="text-grey">Maybe some help text here</p> -->
						<!-- <p class="data-entity-name text-blue">lorem_ipsum</p> -->
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
							<!-- <button class="bg-transparent text-white">Cancel</button> -->
							<!-- <button class="text-green gap bg-white"
								><img src="/LOGO-30w-green.svg" alt="" />Add case files</button
							> -->
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
