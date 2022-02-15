<script lang="ts">
    import { Tag } from  "carbon-components-svelte";
    
    export let labelText = undefined;
    export let selected = undefined;
    export let options = [];
    export let selectedColor: string = 'blue';
    export let unselectedColor: string = 'gray';

    function handleTagClick(e, option) {
        selected = option;
    }
</script>

<div class="bx--form-item">
    <fieldset class="bx--radio-button-group bx--radio-button-group--label-right">
        {#if labelText}
            <legend class="bx--label">{@html labelText}</legend>
        {/if}

        <div class="tag-group">
            {#each options as option}
                {#if selected === option}
                    <Tag type={selectedColor}>{@html option}</Tag>
                {:else}
                    <Tag type={unselectedColor} on:click={(e) => {e.preventDefault();handleTagClick(e, option)}}>{@html option}</Tag>
                {/if}
            {/each}
        </div>
    </fieldset>
</div>

<style>
    .bx--form-item {
        display: flex;
        flex-direction: column;
    }

    .tag-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>

