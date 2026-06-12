<script lang="ts">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Gallery | SHPE OSU</title>
</svelte:head>

<h1>Gallery</h1>

<div class="gallery-grid">
	{#each data.gallery as item (item.publicId)}
		<figure>
			<CloudinaryImage
				publicId={item.publicId}
				alt={item.alt}
				sizes="(min-width: 64rem) 33vw, (min-width: 36rem) 50vw, 100vw"
			/>
			<figcaption>{item.caption}</figcaption>
		</figure>
	{/each}
</div>

<style>
	h1 {
		font-size: var(--size-500);
		font-weight: 400;
		color: var(--color-brand-dark);
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--size-200);
		width: min(100%, var(--max-width));
		margin-inline: auto;
		padding-block: var(--size-200) var(--size-500);
	}

	@media (min-width: 36rem) {
		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 64rem) {
		.gallery-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--size-050);
	}

	figure :global(img) {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: var(--size-050);
		background-color: var(--color-card);
	}

	figcaption {
		font-size: var(--size-090);
		color: var(--color-text-secondary);
	}
</style>
