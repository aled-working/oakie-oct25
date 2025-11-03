<script>
	import File from '$lib/components/ListFile.svelte';
	import Actions from '$lib/components/Actions.svelte';
	import PageNormal from '$lib/components/layouts/NormalPage.svelte';
	import {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconChevronRight,
		IconFileImport
	} from '@tabler/icons-svelte';
	import { user_content } from '$lib/store';
</script>

<PageNormal>
	<!-- ============== -->
	<div class="row h-12 gap-4">
		<IconSquareRoundedArrowLeftFilled />
		<h2>New Claim Automation</h2>
	</div>

	<div class="col gap-16">
		<!--  -->
		<section class="withLeftCol grid">
			<!-- left sidebar-->
			<div class="left col">
				<h3>Get started</h3>
			</div>
			<!-- right -->
			<div class="right col">
				<div class="input-group col">
					<input
						bind:value={$user_content.title}
						class="strong"
						type="text"
						placeholder="Name this automation"
						autofocus
						required
					/>
					<input type="text" value="" placeholder="Description (optional)" />
				</div>
			</div>
		</section>

		<!--  -->
		<section class="withLeftCol grid">
			<!-- left sidebar-->
			<div class="left col">
				<h3>Dataset for testing</h3>
			</div>
			<!-- right -->
			<div class="right col">
				<div class="input-group col">
					<input class="strong" type="text" value="" placeholder="Experiment 1" />
					<input type="text" value="" placeholder="Description (optional)" />
				</div>
			</div>
		</section>

		<!--  -->
		<section class="withLeftCol grid">
			<!-- left sidebar-->
			<div class="left col"></div>
			<!-- right -->
			<div class="right col gap-2">
				<p class="text-green">Add case files for testing (and optional config)</p>
				<div class="spacer"></div>
				<Actions
					><button class="  bg-faint text-white" on:click={() => goto('./2b')}
						>Add case files</button
					>
					<div class="h-4 grow"></div>
				</Actions>
			</div>
			<!-- ============== -->
		</section>

		<section class="withSide"></section>
	</div>
	<!-- ============== -->
</PageNormal>

<style>
	.withLeftCol {
		grid-template-columns: 1fr 2fr;
	}
</style>
