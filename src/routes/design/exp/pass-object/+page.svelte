<script>
	import Row from './Row.svelte';

	let obj = { name: 'name', desc: 'description', num: 1234567, tags: ['lorem', 'ipsum'] };
</script>

{#each { length: 3 }}
	<Row data={obj} />
{/each}
