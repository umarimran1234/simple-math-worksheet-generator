<script lang="ts">
    
    // import carbon components
    import { Form, NumberInput, TextInput } from "carbon-components-svelte";
    import { Checkbox } from "carbon-components-svelte";
    import { ButtonSet, Button } from "carbon-components-svelte";

    import { PrintButton } from "$components/config";

    // import stores
    import { numberSequenceQuestionGeneratorConfigStore, numberSequenceWorksheetDataStore } from '$stores/number-sequence';

    // import utils
    import { LetterSequenceUtils } from '$utils/letter-sequence-utils';

    function handleGenerateNumberSequenceWorksheetSubmit() {
        numberSequenceWorksheetDataStore.update((worksheetData) => LetterSequenceUtils.generateNumberRangeQuestion(
            $numberSequenceQuestionGeneratorConfigStore.start, 
            $numberSequenceQuestionGeneratorConfigStore.end, 
            $numberSequenceQuestionGeneratorConfigStore.noOfEmptyBoxes,
            $numberSequenceQuestionGeneratorConfigStore.reverse));
    }

</script>

<Form on:submit={(e) => { e.preventDefault();handleGenerateNumberSequenceWorksheetSubmit() }}>
    
    <NumberInput label="Start Number" placeholder="" min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.start} 
    />

    <NumberInput label="End Number" placeholder="" min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.end} 
    />

    <NumberInput label="No. of empty boxes" placeholder=""  min={1} max={$numberSequenceQuestionGeneratorConfigStore.end} 
        bind:value={$numberSequenceQuestionGeneratorConfigStore.noOfEmptyBoxes} 
    />

    <Checkbox labelText="Reverse" bind:checked={$numberSequenceQuestionGeneratorConfigStore.reverse} />

    <!-- <NumberInput label="No. of columns per row" placeholder=""  min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.numOfCols} 
    />

    <TextInput labelText="Font size" placeholder="" bind:value={$numberSequenceQuestionGeneratorConfigStore.fontSize} /> -->

    <ButtonSet stacked>
        <Button type="submit">Generate Worksheet</Button>
        <PrintButton />
    </ButtonSet>
</Form>