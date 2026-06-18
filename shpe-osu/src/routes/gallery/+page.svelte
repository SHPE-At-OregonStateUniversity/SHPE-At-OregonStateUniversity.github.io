<script lang="ts">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Gallery | SHPE OSU</title>
</svelte:head>

<h1>Gallery</h1>

<!--
	Sticky-split gallery: each event's colored panel pins (position: sticky) at
	full screen height on desktop while its photo column scrolls past, then the
	next panel scrolls in and pins. Do NOT add overflow (hidden/auto/scroll) or
	`contain` to .gallery or any ancestor — it silently breaks the sticky pin.
-->
<div class="gallery">
	{#each data.gallery as { event, photos } (event)}
		<section class="event">
			<div class="event-panel">
				<div class="event-name">
					<span>{event}</span>
				</div>
			</div>

			<div class="event-photos">
				{#each photos as photo (photo.publicId)}
					<figure>
						<CloudinaryImage
							publicId={photo.publicId}
							alt={photo.alt}
							sizes="(min-width: 64rem) 16vw, 30vw"
							widths={[224, 448, 672]}
						/>
					</figure>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	h1 {
		font-size: var(--size-600);
		font-weight: 400;
		color: var(--color-brand-dark);
		text-align: center;
	}

	.gallery {
		/* Full-bleed: cancel .page's inline padding so each band spans the full
		   viewport width. Don't add overflow here — it breaks the sticky pin. */
		margin-inline: calc(var(--page-margin) * -1);
	}

	.event {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--size-400);
		padding-block: var(--size-300);
	}

	.event-panel {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-block: var(--size-600);
		border-radius: var(--size-200);
	}

	/* Panel color cycle: orange → green → gold → light blue, repeating. */
	.event:nth-child(4n + 1) .event-panel {
		background-color: var(--color-panel-orange);
	}
	.event:nth-child(4n + 2) .event-panel {
		background-color: var(--color-panel-green);
	}
	.event:nth-child(4n + 3) .event-panel {
		background-color: var(--color-panel-gold);
	}
	.event:nth-child(4n) .event-panel {
		background-color: var(--color-panel-blue);
	}

	.event-name {
		display: flex;
		align-items: center;
		justify-content: center;
		width: min(16rem, 70vw);
		aspect-ratio: 1;
		padding: var(--size-400);
		border-radius: 50%;
		background-color: rgb(255 255 255 / 0.18);
		text-align: center;
	}

	.event-name span {
		font-size: var(--size-300);
		color: var(--color-brand-cream);
	}

	/* Pale gold and blue panels need dark text for contrast. */
	.event:nth-child(4n + 3) .event-name span,
	.event:nth-child(4n) .event-name span {
		color: var(--color-brand-dark);
	}

	.event-photos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-080);
		align-content: start;
		padding-inline: var(--page-margin);
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

	/* Desktop: sticky-split. align-items must be `start` — center/stretch
	   compute a static position that defeats position: sticky. */
	@media (min-width: 64rem) {
		/* Full-screen split: each half is 50vw (gallery is full-bleed) and the
		   section spans the viewport height. align-items must be `start` —
		   center/stretch compute a static position that defeats sticky. */
		.event {
			grid-template-columns: 1fr 1fr;
			align-items: start;
			gap: 0;
			padding-block: 0;
			min-height: 100vh;
		}

		.event-panel {
			position: sticky;
			top: 0;
			align-self: start;
			height: 100vh;
			border-radius: 0;
		}

		.event-photos {
			min-height: 100vh;
			align-content: center;
			padding: var(--size-600);
		}

		.event-name {
			width: min(20rem, 60%);
		}
	}
</style>
