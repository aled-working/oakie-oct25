<script>
	export let selected;
	import { IconSquareRoundedArrowLeftFilled, IconX, IconUser } from '@tabler/icons-svelte';
</script>

<div class="ListRow" class:{selected}>
	<div class="row middle">
		<p class="strong grow">Lorem ipsum</p>
		<div class="text-green"><IconUser /></div>
		<div class="meta text-green">123456</div>
	</div>
</div>

<style>
	.ListRow {
		padding: 1.5rem 0;
		border-top: 1px solid var(--lighter-grey);

		&:hover,
		&.selected {
			background-color: var(--green);
			padding: 1.5rem 0.5rem;
		}
		&:hover *,
		&.selected * {
			color: white;
		}
	}
</style>
