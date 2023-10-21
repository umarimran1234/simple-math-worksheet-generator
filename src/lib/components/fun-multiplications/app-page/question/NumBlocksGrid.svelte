<script lang="ts">
    export let col: number = 3;
    export let value: number = 1;
    export let color: string = "#000000";
</script>

<div class="numberBlock">
    <div class="container" style="--col:{col}">
        {#each Array(value) as _, index(index)}
            <div class="grid-item" style="--blockColor:{color}"/>
        {/each}
    </div>

</div>

<style>
    .container {
        /* width: 80%; */
        margin: 0 auto;
        font-size: 0;
        text-align: center;

        display: grid;
        grid-template-columns: repeat(var(--col), 1fr);
    }
    .grid-item {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        font-size: 1rem;
        vertical-align: top;
        margin: 0.1rem;

        background-color: var(--blockColor);
    }
</style>