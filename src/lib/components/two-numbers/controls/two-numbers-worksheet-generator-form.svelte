<script lang="ts">
    // impport carbon icon svelte
    import Run from "carbon-icons-svelte/lib/Run.svelte";

    // import carbon components
    import { Form, NumberInput, TextInput } from "carbon-components-svelte";
    import { Checkbox } from "carbon-components-svelte";
    import { ButtonSet, Button } from "carbon-components-svelte";

    // import components
    import { TagSelectMulti } from "$components/common";

    import { PrintButton } from "$components/config";

    // import stores
    import { twoNumbersQuestionGeneratorConfigStore } from '$stores/two-numbers';
    import { twoNumbersQuestionsPerPageStore } from '$stores/two-numbers';
    import { pageSizeStore } from '$stores/page-size-stores';
    import { twoNumbersWorksheetDataStore } from '$stores/two-numbers';

    // import utils
    import { AppConstants } from '$utils/app-constants';
    import { SimpleMathQuestionUtils } from '$utils/simple-math-question-utils';

    function handleGenerateTwoNumbersWorksheetsSubmit() {
        twoNumbersWorksheetDataStore.update((worksheetData) => SimpleMathQuestionUtils.generateTwoNumbersQuestions(
            $twoNumbersQuestionGeneratorConfigStore, $twoNumbersQuestionsPerPageStore, $pageSizeStore));
    }

</script>

<Form on:submit={(e) => { e.preventDefault();handleGenerateTwoNumbersWorksheetsSubmit() }}>
                
    <TextInput labelText="1st number range" placeholder="" bind:value={$twoNumbersQuestionGeneratorConfigStore.firstNumRange} />
    <Checkbox labelText="Reverse" bind:checked={$twoNumbersQuestionGeneratorConfigStore.firstNumReverse} />
    <TextInput labelText="2nd number range" placeholder="" bind:value={$twoNumbersQuestionGeneratorConfigStore.secondNumRange} />
    <Checkbox labelText="Reverse" bind:checked={$twoNumbersQuestionGeneratorConfigStore.secondNumReverse} />

    <NumberInput label="Result min value" placeholder="" allowEmpty
        bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMin} 
    />

    <NumberInput label="Result max value" placeholder="" allowEmpty
        bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMax} 
    />

    <Checkbox labelText="Allow negative" bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowNegative} />
    <Checkbox labelText="Allow remainder" bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowRemainder} />
    <Checkbox labelText="Random order" bind:checked={$twoNumbersQuestionGeneratorConfigStore.randomOrder} />

    <TagSelectMulti labelText="Operator" options={AppConstants.OPERATOR_OPTIONS} 
        bind:selected={$twoNumbersQuestionGeneratorConfigStore.questionOperator}/>
    
    <ButtonSet stacked>
        <Button type="submit" icon={Run}>Generate Worksheet</Button>
        <PrintButton />
    </ButtonSet>
</Form>