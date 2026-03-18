<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<div class="flex items-center">
	<p>
		Logo
	</p>
	<nav>
		<a href="/">Home</a>
		<a href="/officers">Officers</a>
		<a href="/gallery">Gallery</a>
		<a href="/shpetinas">Shpetinas</a>
	</nav>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
