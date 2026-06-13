<script lang="ts">
	import OfficerCard from '$lib/components/OfficerCard.svelte';
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Officers | SHPE OSU</title>
</svelte:head>

<h1>Officers</h1>

{#each data.officers as officer (officer.id)}
	<OfficerCard>
		<CloudinaryImage
			slot="image"
			publicId={officer.publicId}
			alt={officer.name}
			sizes="20rem"
			widths={[320, 640]}
		/>

		<h3>{officer.name}</h3>
		<p>{officer.position}</p>
	</OfficerCard>
{/each}

<style>
	h1 {
		font-size: var(--size-600);
		font-weight: 400;
		color: var(--color-brand-dark);
		text-align: center;
	}
</style>
