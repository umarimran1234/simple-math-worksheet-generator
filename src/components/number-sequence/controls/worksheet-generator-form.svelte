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
        numberSequenceWorksheetDataStore.update((worksheetDataArr) => LetterSequenceUtils.generateNumberRangeQuestions(
            $numberSequenceQuestionGeneratorConfigStore.start, 
            $numberSequenceQuestionGeneratorConfigStore.end, 
            $numberSequenceQuestionGeneratorConfigStore.noOfEmptyBoxes,
            $numberSequenceQuestionGeneratorConfigStore.reverse,
            $numberSequenceQuestionGeneratorConfigStore.numberOfQuestions));
    }

</script>

<Form on:submit={(e) => { e.preventDefault();handleGenerateNumberSequenceWorksheetSubmit() }}>
    
    <NumberInput label="Start Number" placeholder="" min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.start} 
    />

    <NumberInput label="End Number" placeholder="" min={1}
        bind:value={$numberSequenceQuestionGeneratorConfigStore.end} 
    />

    <NumberInput label="Num. of empty boxes" placeholder=""  min={1} max={$numberSequenceQuestionGeneratorConfigStore.end} 
        bind:value={$numberSequenceQuestionGeneratorConfigStore.noOfEmptyBoxes} 
    />

    <Checkbox labelText="Reverse" bind:checked={$numberSequenceQuestionGeneratorConfigStore.reverse} />

    <NumberInput label="Num. of questions" placeholder=""  min={1} 
        bind:value={$numberSequenceQuestionGeneratorConfigStore.numberOfQuestions} 
    />

    <NumberInput label="Questions per page" placeholder=""  min={1} 
        bind:value={$numberSequenceQuestionGeneratorConfigStore.questionsPerPage} 
    />
    
    <ButtonSet stacked>
        <Button type="submit">Generate Worksheet</Button>
        <PrintButton />
    </ButtonSet>
</Form>