<script>
	import { devMode } from '$lib/store';
	import { IconCode } from '@tabler/icons-svelte';
</script>

{#if $devMode}
	<button on:click={() => ($devMode = !$devMode)} class="bg-green med gap-4 text-white"
		><IconCode /> dev</button
	>
{:else}
	<button on:click={() => ($devMode = !$devMode)} class="text-green med text-green gap-4 bg-white"
		><IconCode /></button
	>
{/if}
