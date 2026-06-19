<script lang="ts">
	import logo from '$lib/assets/logo.png';

	// TODO: replace the '#' placeholders with the chapter's real URLs.
	const socials = [
		{ label: 'Instagram', href: 'https://www.instagram.com/shpeatosu/' },
		{ label: 'Tik Tok', href: 'https://www.tiktok.com/@shpenational' }
	];
	const clubLinks = [
		{ label: 'Ideal Logic', href: 'https://apps.ideal-logic.com/osusee' },
		{ label: 'OSU Club Site', href: 'https://see.oregonstate.edu/ela/find-clubs' }
	];
</script>

<div class="site-footer">
	<div class="socials">
		<div class="header">
			<p>Socials</p>
		</div>
		{#each socials as { label, href } (label)}
			<a {href} target="_blank" rel="external noopener noreferrer">{label}</a>
		{/each}
	</div>
	<div class="club-links">
		<div class="header">
			<p>Club Links</p>
		</div>
		{#each clubLinks as { label, href } (label)}
			<a {href} target="_blank" rel="external noopener noreferrer">{label}</a>
		{/each}
	</div>
	<img src={logo} alt="SHPE OSU Logo" />
</div>

<style>
	.site-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--size-600);
		padding-bottom: var(--size-600);
	}

	.site-footer img {
		width: var(--size-800);
		height: auto;
		flex-shrink: 0;
	}

	@media (min-width: 36rem) {
		.site-footer img {
			width: 4rem;
		}
	}

	.header {
		font-size: var(--size-200);
		font-weight: 600;
		color: var(--color-brand-dark);
	}

	.site-footer a {
		display: block;
		width: fit-content;
		color: inherit;
		text-decoration: none;
	}

	.site-footer a:hover,
	.site-footer a:focus-visible {
		color: var(--color-brand-primary);
		text-decoration: underline;
	}
</style>
