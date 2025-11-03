<script>
	import { user_content } from '$lib/store';
	export let data = {};
	let default_data = {
		title: 'untitled',
		...data
	};
</script>

<aside class="Sidebar col gap-8 py-12">
	<!-- <h2>{data.title}</h2> -->
	<h2>{$user_content?.title}</h2>
	<nav class="col"></nav>
	<a class="text-green" href="#">Setup and data</a>
	<a class="text-green" href="#">Knowledge</a>
	<a class="text-blue" href="#">Process</a>
	<a class="text-blue" href="#">Process</a>
	<a class="text-blue" href="#">Process</a>
	<button class="bg-blue text-white">Add</button>
	<div class="h-4"></div>
	<a class="text-green" href="#">Knowledge Base</a>
	<a class="text-green" href="#">Model and settings</a>
	<button class="bg-green round-button text-white">AE</button>
</aside>
