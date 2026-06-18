<script lang="ts">
	import OfficerCard from '$lib/components/OfficerCard.svelte';
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Officers | SHPE OSU</title>
</svelte:head>

<PageHeader title="Officers" />

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
