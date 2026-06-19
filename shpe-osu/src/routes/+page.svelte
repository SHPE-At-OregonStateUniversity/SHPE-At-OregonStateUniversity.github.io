<script lang="ts">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<svelte:head>
	<title>SHPE at Oregon State University</title>
</svelte:head>

<div class="content">
	<div class="hero">
		<div class="logo">
			<span class="est">est. 2010</span>
			<h1>SHPE</h1>
			<p>@oregonstate</p>
		</div>

		<div class="description">
			<p>We are the Society of Hispanic Professional Engineers at</p>
			<div class="osu">
				<p>Oregon State University.</p>
			</div>
		</div>
	</div>

	<div class="page-body">
		<span>
			SHPE at Oregon State University is a chapter of the Society of Hispanic Professional
			Engineers, a national organization changing lives by empowering the Hispanic community to
			realize its fullest potential in STEM. Our chapter brings together students across engineering
			and science majors through professional development, mentorship, community outreach, and
			familia — a support network that lasts well beyond graduation.
		</span>
	</div>

	<div class="split-row">
		<CloudinaryImage
			publicId="shpe-osu/home/community"
			alt="SHPE OSU members at a chapter event"
			sizes="(min-width: 36rem) 25vw, 50vw"
		/>
		<div class="copy">
			Whether you are a first-year student finding your footing or a senior preparing for industry,
			SHPE offers workshops, resume reviews, and connections to companies that actively recruit
			Hispanic engineers and scientists.
		</div>
	</div>

	<div class="split-row split-row--reverse">
		<CloudinaryImage
			publicId="shpe-osu/home/convention"
			alt="SHPE OSU members at the SHPE National Convention"
			sizes="(min-width: 36rem) 25vw, 50vw"
		/>
		<div class="copy">
			Every year our members attend the SHPE National Convention — the largest gathering of Hispanic
			STEM students and professionals in the country — returning with internships, job offers, and
			lifelong friendships.
		</div>
	</div>
</div>

<style>
	/* Layout */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-200);
		max-width: 20rem;
		padding-bottom: var(--size-500);
		margin-top: 2rem;
	}

	.page-body {
		padding-bottom: var(--size-400);
		max-width: 80ch;
	}

	.split-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-800);
		align-items: center;
		width: min(100%, var(--max-width));
	}

	.split-row :global(img) {
		width: 50%;
		height: auto;
		border-radius: var(--size-050);
	}

	.split-row--reverse :global(img) {
		order: 2;
		justify-self: end;
	}

	.split-row--reverse .copy {
		order: 1;
	}

	/* Logo + intro copy */
	.logo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-020);
	}

	.logo h1,
	.logo p,
	.logo .est {
		margin: 0;
	}

	.logo h1 {
		font-size: var(--size-1000);
		font-weight: 400;
		color: var(--color-brand-dark);
		line-height: 0.9;
	}

	.logo p,
	.logo .est {
		line-height: 1;
	}

	.logo p,
	.description p {
		font-size: var(--size-200);
		font-weight: 400;
		color: var(--color-brand-dark);
	}

	.description {
		padding-left: var(--size-500);
	}

	.osu p {
		color: var(--color-brand-primary);
	}

	/* Baseline paragraph style */
	p {
		font-size: var(--size-080);
		font-weight: 100;
		color: var(--color-brand-dark);
	}
</style>
