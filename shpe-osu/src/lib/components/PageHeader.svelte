<script lang="ts">
	let {
		title,
		children
	}: {
		title: string;
		children?: import('svelte').Snippet;
	} = $props();
</script>

<header class="page-header">
	<h1>{title}</h1>
	{#if children}
		<p class="subtitle">{@render children()}</p>
	{/if}
</header>

<style>
	/* Full-screen title centered on the TRUE viewport middle, with NO peek of the
	   next section. The block fills from the nav down to the screen bottom
	   (100svh - nav), so nothing below shows; the bottom padding (= nav height)
	   shifts the centered content up so the h1 lands exactly on 50svh. border-box
	   so the padding counts inside min-height. --nav-height is measured by the
	   layout; type comes from the global h1 rule; svh is stable on mobile. */
	.page-header {
		box-sizing: border-box;
		min-height: calc(100svh - var(--nav-height, 0px));
		padding-bottom: var(--nav-height, 0px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--size-200);
		text-align: center;
	}

	.subtitle {
		margin: 0;
		max-width: 60ch;
		font-size: var(--size-200);
		color: var(--color-text-secondary);
	}
</style>
