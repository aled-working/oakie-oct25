<script>
	export let data;
	let keys = Object.keys(data);
</script>

<div class="bg-paper panel" style={'--num-cells:' + keys.length}>
	<div class="table-grid input-group baseline">
		{#each { length: keys.length }, i}
			{#if keys[i] == 'tags'}
				<div class="row">
					{#each data[keys[i]] as tag}
						<div class="tag">{tag}</div>
					{/each}
				</div>
			{:else}
				<input type="text" value={data[keys[i]]} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.table-grid {
		display: grid;
		grid-template-columns: repeat(var(--num-cells), 1fr);
	}
</style>
