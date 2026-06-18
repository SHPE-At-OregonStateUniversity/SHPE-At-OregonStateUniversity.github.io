<script lang="ts">
	import OfficerCard from '$lib/components/OfficerCard.svelte';
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>SHPEtinas | SHPE OSU</title>
</svelte:head>

<PageHeader title="Shpetinas" />

{#each data.shpetinas as member (member.id)}
	<OfficerCard>
		<CloudinaryImage
			slot="image"
			publicId={member.publicId}
			alt={member.name}
			sizes="20rem"
			widths={[320, 640]}
		/>

		<h3>{member.name}</h3>
		<p>{member.role}</p>
	</OfficerCard>
{/each}
