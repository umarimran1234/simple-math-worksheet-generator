<script lang="ts">
    import { Tag } from  "carbon-components-svelte";

    export let labelText = undefined;
    export let text = undefined;
    export let selected = undefined;
    
    export let selectedColor: string = 'blue';
    export let unselectedColor: string = 'gray';

    function handleTagClick(e, val:boolean) {
        selected = !val;
    }
</script>

<div class="bx--form-item">
    <fieldset class="bx--radio-button-group bx--radio-button-group--label-right">
        {#if labelText}
            <legend class="bx--label">{@html labelText}</legend>
        {/if}

        <div class="tag-group">
            {#if selected}
                <Tag type={selectedColor} on:click={(e) => {e.preventDefault();handleTagClick(e, true)}}>{@html text}</Tag>
            {:else}
                <Tag type={unselectedColor} on:click={(e) => {e.preventDefault();handleTagClick(e, false)}}>{@html text}</Tag>
            {/if}            
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