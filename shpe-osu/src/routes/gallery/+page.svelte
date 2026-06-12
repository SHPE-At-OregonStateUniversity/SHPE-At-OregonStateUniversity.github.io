<script lang="ts">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Gallery | SHPE OSU</title>
</svelte:head>

<h1>Gallery</h1>

{#each data.gallery as { event, photos } (event)}
	<section class="event">
		<div class="event-name">
			<span>{event}</span>
		</div>

		<div class="event-photos">
			{#each photos as photo (photo.publicId)}
				<figure>
					<CloudinaryImage
						publicId={photo.publicId}
						alt={photo.alt}
						sizes="(min-width: 48rem) 16vw, 33vw"
						widths={[224, 448, 672]}
					/>
				</figure>
			{/each}
		</div>
	</section>
{/each}

<style>
	h1 {
		font-size: var(--size-600);
		font-weight: 400;
		color: var(--color-brand-dark);
		text-align: center;
	}

	.event {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--size-400);
		align-items: center;
		justify-items: center;
		width: min(100%, var(--max-width));
		margin-inline: auto;
		padding-block: var(--size-500);
	}

	@media (min-width: 48rem) {
		.event {
			grid-template-columns: 1fr 1fr;
		}
	}

	.event-name {
		display: flex;
		align-items: center;
		justify-content: center;
		width: min(16rem, 70vw);
		aspect-ratio: 1;
		padding: var(--size-500);
		border-radius: 50%;
		background-color: var(--color-card);
		text-align: center;
	}

	.event-name span {
		font-size: var(--size-200);
		color: var(--color-text-primary);
	}

	.event-photos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--size-080);
		width: 100%;
	}

	figure {
		margin: 0;
	}

	figure :global(img) {
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 50%;
		background-color: var(--color-card);
	}
</style>
