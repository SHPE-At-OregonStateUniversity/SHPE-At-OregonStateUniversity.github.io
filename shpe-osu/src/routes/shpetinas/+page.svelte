<script lang="ts">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<svelte:head>
	<title>SHPEtinas | SHPE OSU</title>
</svelte:head>

<div class="content">
	<h1>SHPEtinas</h1>

	<p class="tagline">Empowering Latinas in STEM at Oregon State.</p>

	<div class="body">
		<p>
			SHPEtinas is SHPE's initiative dedicated to the advancement of Latinas in science, technology,
			engineering, and math. Our chapter's SHPEtinas community creates a space where Latina students
			can find mentorship, build confidence, and grow as leaders — together.
		</p>
		<p>
			Throughout the year we host socials, professional-development workshops, and mentoring circles
			that connect undergraduates with graduate students and industry professionals who share their
			experiences navigating STEM careers.
		</p>
		<p>
			All are welcome — SHPEtinas events are open to every member of the chapter. Follow our socials
			or come to a general meeting to hear what's next.
		</p>
	</div>

	<CloudinaryImage
		publicId="shpe-osu/shpetinas/group"
		alt="SHPEtinas members at a chapter event"
		sizes="(min-width: 64rem) 50vw, 100vw"
	/>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-200);
		padding-bottom: var(--size-500);
	}

	h1 {
		font-size: var(--size-500);
		font-weight: 400;
		color: var(--color-brand-dark);
		margin: 0;
	}

	.tagline {
		font-size: var(--size-200);
		color: var(--color-brand-primary);
		margin: 0;
	}

	.body {
		max-width: 80ch;
		display: flex;
		flex-direction: column;
		gap: var(--size-100);
	}

	.body p {
		margin: 0;
		font-size: var(--size-100);
		color: var(--color-text-primary);
	}

	.content :global(img) {
		width: min(100%, 40rem);
		height: auto;
		border-radius: var(--size-050);
	}
</style>
