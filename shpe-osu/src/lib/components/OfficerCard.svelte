<div class= "card">

    <div class = "image">
        <slot name="image"/>
    </div>

    <div class = "info-box"> 
        <slot />
    </div>

</div>




<style>

    .card{
        display: flex;
        gap: var(--size-100);
        padding: var(--size-400);
        border-radius: var(--radius-full);
        align-items: center;
        margin: var(--size-100);
        place-items: center;
        


    }


    .image{
        width: 20rem;
        height: 20rem;
        overflow: hidden;
        border-radius: 50%;
    }


    .info-box {

        font-size: var(--size-090);
        padding: var(--size-080) var(--size-100);
        border-radius: 999em;
        border-color: var(--color-brand-dark);
        border-width: 2px;
        text-align: center;

        flex: 1 ;
        max-width: 40rem;
        margin-left: auto;
        margin-right: auto;
    }

</style>