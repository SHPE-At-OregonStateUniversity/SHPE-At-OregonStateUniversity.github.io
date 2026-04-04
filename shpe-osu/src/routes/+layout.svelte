<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<div class="site-header">
	<p>
  	Logo
	</p>
	<NavBar />
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
