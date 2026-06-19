<script lang="ts">
	import { onMount } from 'svelte';

	let {
		title,
		children
	}: {
		title: string;
		children?: import('svelte').Snippet;
	} = $props();

	// Scroll-cue opacity: full at the top, fading out as you scroll down and back
	// in scrolling up. SSR renders it fully visible (default 1).
	let cueOpacity = $state(1);

	onMount(() => {
		const update = () => {
			const fadeDistance = window.innerHeight * 0.4;
			cueOpacity = Math.max(0, Math.min(1, 1 - window.scrollY / fadeDistance));
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	});
</script>

<header class="page-header">
	<div class="hero-stage">
		<div class="hero-sticky">
			<div class="hero-content">
				<h1>{title}</h1>
				{#if children}
					<p class="subtitle">{@render children()}</p>
				{/if}
			</div>

			<span class="scroll-cue" style:opacity={cueOpacity} aria-hidden="true">
				<svg
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M12 4v15" />
					<path d="m19 12-7 7-7-7" />
				</svg>
			</span>
		</div>
	</div>
</header>

<style>
	/* ── Fallback / default (no scroll-driven support) ──
	   A full-screen centered hero that simply scrolls away. The h1 is centered in
	   the space below the nav; --nav-height is measured by the layout. */
	.hero-sticky {
		position: relative;
		box-sizing: border-box;
		min-height: calc(100svh - var(--nav-height, 0px));
		padding-bottom: var(--nav-height, 0px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--size-200);
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-200);
		text-align: center;
	}

	.subtitle {
		margin: 0;
		max-width: 60ch;
		font-size: var(--size-200);
		color: var(--color-text-secondary);
	}

	.scroll-cue {
		position: absolute;
		bottom: var(--size-300);
		left: 50%;
		transform: translateX(-50%);
		color: var(--color-brand-dark);
		transition: opacity 200ms ease-out;
		pointer-events: none;
	}

	.scroll-cue svg {
		display: block;
		animation: bounce 1.1s ease-in-out infinite;
	}

	/* Quick double-hop pulse: a big hop, a little hop, then a brief rest. */
	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(var(--size-100));
		}
		38% {
			transform: translateY(0);
		}
		52% {
			transform: translateY(calc(var(--size-100) * 0.4));
		}
		66%,
		100% {
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll-cue svg {
			animation: none;
		}
	}

	/* ── Scroll-driven choreography (modern browsers) ──
	   The hero gets a runway taller than the viewport; .hero-sticky pins for the
	   extra 25svh ("hold"), keeping the page content off-screen. Meanwhile the h1
	   rises from the viewport centre to a quarter from the top over that same
	   25svh of scroll (so the next section enters exactly when the h1 is halfway
	   to the top). Past the runway, normal flow carries the h1 out over the nav. */
	@supports (animation-timeline: scroll()) {
		/* Pull the hero up under the nav so it spans the full viewport (0 → 100svh):
		   the title centers at the true middle and the cue sits at the screen
		   bottom. The nav is overlaid on top (and the h1 passes in front of it). */
		.page-header {
			margin-top: calc(-1 * var(--nav-height, 0px));
		}

		.hero-stage {
			height: calc(100svh + 25svh);
		}

		.hero-sticky {
			position: sticky;
			top: 0;
			height: 100svh;
			min-height: 0;
			padding-bottom: 0;
			/* Paint the hero (incl. the h1) in front of the nav, but let clicks
			   fall through to the nav — nothing in the hero is interactive. */
			z-index: 2;
			pointer-events: none;
		}

		.hero-content {
			animation: hero-rise linear both;
			animation-timeline: scroll(root block);
			animation-range: 0 25svh;
		}

		@keyframes hero-rise {
			to {
				transform: translateY(-25svh);
			}
		}
	}
</style>
