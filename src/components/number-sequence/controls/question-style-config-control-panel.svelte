<script lang="ts">
    // import carbon components
    import { TextInput, NumberInput } from "carbon-components-svelte";

    // import stores
    import { numberSequenceQuestionGeneratorConfigStore, numberSequenceWorksheetDataStore } from '$stores/number-sequence';

</script>

<div class="number-sequence-question-style-config-controls-content">
    <NumberInput label="No. of columns per row" placeholder=""  min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.numOfCols} 
    />

    <TextInput labelText="Font size" placeholder="" bind:value={$numberSequenceQuestionGeneratorConfigStore.fontSize} />

    <TextInput labelText="Cell min width" placeholder="" bind:value={$numberSequenceQuestionGeneratorConfigStore.cellMinWidth} />
    
</div>

<style>
    .number-sequence-question-style-config-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>