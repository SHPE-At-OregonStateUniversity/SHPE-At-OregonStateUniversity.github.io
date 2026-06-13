<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const links = [
		{ route: '/', label: 'Home' },
		{ route: '/officers', label: 'Officers' },
		{ route: '/gallery', label: 'Gallery' },
		{ route: '/shpetinas', label: 'Shpetinas' }
	] as const;

	// Routes prerender with trailingSlash 'always', so normalize before comparing.
	const isActive = (route: (typeof links)[number]['route']) =>
		page.url.pathname.replace(/\/+$/, '') === resolve(route).replace(/\/+$/, '');
</script>

<nav>
	<ul id="primary-navigation" class="primary-navigation">
		{#each links as { route, label } (route)}
			<li class="nav-link">
				<a
					href={resolve(route)}
					class:active={isActive(route)}
					aria-current={isActive(route) ? 'page' : undefined}
				>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.primary-navigation {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--size-060);
	}

	.primary-navigation .nav-link:first-child {
		grid-column: 1 / -1;
	}

	@media (min-width: 36rem) {
		nav {
			flex: 1;
		}

		.primary-navigation {
			grid-template-columns: repeat(4, 1fr);
			gap: var(--size-010);
		}

		.primary-navigation .nav-link:first-child {
			grid-column: auto;
		}
	}

	.nav-link {
		min-width: 0;
	}

	.nav-link a {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: var(--size-060) var(--size-080);
		border-radius: 999em;
		border: 2px solid var(--color-brand-dark);
		text-align: center;
		text-decoration: none;
		color: inherit;
		background-color: transparent;
		transition:
			background-color 90ms ease-out,
			border-color 90ms ease-out,
			color 90ms ease-out;
	}

	.nav-link a:hover,
	.nav-link a:focus-visible {
		background-color: var(--color-brand-primary);
		color: var(--color-brand-cream);
	}

	@media (prefers-reduced-motion: reduce) {
		.nav-link a {
			transition: none;
		}
	}

	@media (min-width: 36rem) {
		.nav-link a {
			font-size: var(--size-200);
			padding: var(--size-010) var(--size-080);
		}
	}
</style>
