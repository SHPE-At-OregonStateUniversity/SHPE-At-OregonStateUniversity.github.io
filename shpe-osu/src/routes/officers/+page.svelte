
<script> 
    import '../../app.css';
    import OfficerCard from '$lib/components/OfficerCard.svelte';
    export let data;
</script>


<svelte:head>
    <title>Officers | SHPE OSU</title>
</svelte:head>

<h1>Officers</h1>


{#each data.officers as officer (officer.id)}
    <OfficerCard>

        <img
            slot = "image"
            src = {officer.image}
            alt = {officer.name}
        />

        <h3>{officer.name}</h3>
        <p> {officer.position}</p>

    </OfficerCard>
{/each}

