<script>
	export let selected;
	import {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconUser,
		IconChevronRight,
		IconBriefcase2,
		IconFileUpload
	} from '@tabler/icons-svelte';
	const iconMap = {
		IconSquareRoundedArrowLeftFilled,
		IconX,
		IconUser,
		IconChevronRight,
		IconBriefcase2,
		IconFileUpload
	};
	export let words = ['Lorem ipsum', 'dolor site amet', '_', '123456'];
	export let css = ' text-green '; // <style> fixes black and grey for first two parts
</script>

<div class={'ListRow  row small-gap ' + css} class:{selected}>
	<!-- see <style> - fixes black and grey for first two parts  -->
	{#each words as part}
		{#if part === '_'}
			<!-- spacer -->
			<div class="grow"></div>
		{:else if part.startsWith('Icon')}
			{@const Icon = iconMap[part]}
			<Icon />
		{:else}
			<!-- normal text -->
			<p>{part}</p>
		{/if}
	{/each}
</div>

<!-- <div class="ListRow" class:{selected}>
	<div class="row middle">
		<p class="strong grow">Lorem ipsum</p>
		<div class="text-green"><IconUser /></div>
		<div class="meta text-green">123456</div>
	</div>
</div> -->

<style>
	.ListRow {
		padding: 1.5rem 0.5rem;
		border-top: 1px solid var(--lighter-grey);
		gap: 1ch;

		&:hover,
		&.selected {
			background-color: var(--paper);
		}
	}

	.list-row-content {
		gap: 1ch;
	}
	.list-row-content > *:nth-child(1) {
		color: black;
		font-weight: bold;
	}
	.list-row-content > *:nth-child(2) {
		color: var(--lightish-grey);
	}
</style>
