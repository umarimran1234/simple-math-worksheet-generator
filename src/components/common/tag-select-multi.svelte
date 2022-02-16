<script lang="ts">
    import { Tag } from  "carbon-components-svelte";
    
    export let labelText = undefined;
    export let selected = [];
    export let options = [];
    export let selectedColor: string = 'blue';
    export let unselectedColor: string = 'gray';

    function handleTagUnselectClick(e, option) {
        if(selected) {
            selected = selected.filter(item => item !== option);
        }
    }

    function handleTagClick(e, option) {
        if(!selected) {
            selected = [option];
        } else {
            if(!selected.includes(option)) {
                selected = [...selected, option];
            }
        }
    }
</script>

<div class="bx--form-item">
    <fieldset class="bx--radio-button-group bx--radio-button-group--label-right">
        {#if labelText}
            <legend class="bx--label">{@html labelText}</legend>
        {/if}

        <div class="tag-group">
            {#each options as option}
                {#if selected.includes(option)}
                    <Tag type={selectedColor} on:click={(e) => {e.preventDefault();handleTagUnselectClick(e, option)}}>{@html option}</Tag>
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

