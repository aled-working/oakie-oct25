<script>
	import PageNormal from '$lib/components/layouts/NormalPage.svelte';
	import File from '$lib/components/ListFile.svelte';
	import Actions from '$lib/components/Actions.svelte';
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
		<!-- SECTION  - title-->
		<section class=" grid grid-cols-[1fr_2fr]">
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
</PageNormal>
