<div class="card">
	<div class="image">
		<slot name="image" />
	</div>

	<div class="info-box">
		<slot />
	</div>
</div>

<style>
	.card {
		display: flex;
		gap: var(--size-100);
		padding: var(--size-400);
		border-radius: var(--radius-full);
		align-items: center;
		/* Bottom-only: the header owns the gap above the first card, and this
		   spaces cards from each other. No top margin to double-count. */
		margin-block-end: var(--size-200);
		place-items: center;
	}

	.image {
		width: 20rem;
		height: 20rem;
		overflow: hidden;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info-box {
		font-size: var(--size-090);
		padding: var(--size-080) var(--size-100);
		border-radius: 999em;
		border-color: var(--color-brand-dark);
		border-width: 2px;
		text-align: center;

		flex: 1;
		max-width: 40rem;
		margin-left: auto;
		margin-right: auto;
	}
</style>
