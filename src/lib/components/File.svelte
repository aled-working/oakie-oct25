<script>
	import { IconChevronRight, IconBriefcase2 } from '@tabler/icons-svelte';
	export let style;
</script>

<div class="File row middle bg-white">
	<p class="filename strong text-blue grow"><slot /></p>
	{#if style == 'zip'}
		<span class="text-grey"><IconBriefcase2 /></span>
	{/if}

	<span class="text-grey"><IconChevronRight /></span>
</div>

<style>
	.File {
		padding: 1rem 1rem;
	}
</style>
