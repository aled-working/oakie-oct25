<script>
	import Field from './Field.svelte';
	import Sidenav from './Sidenav.svelte';
	import Header from './Header.svelte';
</script>

<div class="min-h-screen bg-white w-full">
	<div class="max-w-[1200px] mx-auto px-8">
		<Header></Header>
		<div class="grid grid-cols-[15rem_1fr] gap-8">
			<aside>
				<Sidenav></Sidenav>
			</aside>
			<main>
				<h2 class="mb-8">Main</h2>
				<div class="bg-paper p-12 grid gap-8">
					<div class="grid grid-cols-[1fr_2fr] gap-4">
						<div class="content-col py-4">
							<h4>Patient information</h4>
						</div>
						<div class="content-col">
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
						</div>
					</div>
					<div class="grid grid-cols-[1fr_2fr] gap-4">
						<div class="content-col py-4">
							<h4>Financial information</h4>
						</div>
						<div class="content-col">
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
							<Field></Field>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
