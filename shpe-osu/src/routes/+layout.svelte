<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// Measured nav height, exposed as --nav-height so full-screen page headers
	// can fill exactly the space below the nav (100svh - nav). Updates on resize.
	let navHeight = $state(0);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="page" style="--nav-height: {navHeight}px">
	<div class="header-slot" bind:clientHeight={navHeight}>
		<Header />
	</div>

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
