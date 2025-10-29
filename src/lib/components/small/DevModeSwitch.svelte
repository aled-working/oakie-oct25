<script>
	import { devMode } from '$lib/store';
	import { IconCode } from '@tabler/icons-svelte';
</script>

{#if $devMode}
	<button on:click={() => ($devMode = !$devMode)} class="bg-green med gap text-white"
		><IconCode /> dev</button
	>
{:else}
	<button on:click={() => ($devMode = !$devMode)} class="text-green med gap text-green"
		><IconCode /></button
	>
{/if}
