<script lang="ts">
    
    // import carbon components
    import { Form, TextInput } from "carbon-components-svelte";
    import { Checkbox } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";

    // import components
    import TagSelect from "$components/common/tag-select.svelte";

    // import stores
    import { twoNumbersQuestionGeneratorConfigStore } from '$stores/two-numbers-question-generator-config-stores';
    import { questionsPerPageStore } from '$stores/questions-per-page-stores';
    import { pageSizeStore } from '$stores/page-size-stores';
    import { worksheetDataStore } from '$stores/worksheet-data-stores';

    // import utils
    import { AppConstants } from '$utils/app-constants';
    import { SimpleMathQuestionUtils } from '$utils/simple-math-question-utils';

    function handleGenerateTwoNumbersWorksheetsSubmit() {
        worksheetDataStore.update((worksheetData) => SimpleMathQuestionUtils.generateTwoNumbersQuestions(
            $twoNumbersQuestionGeneratorConfigStore, $questionsPerPageStore, $pageSizeStore));
    }

</script>

<Form on:submit={(e) => { e.preventDefault();handleGenerateTwoNumbersWorksheetsSubmit() }}>
                
    <TextInput labelText="1st number range" placeholder="" bind:value={$twoNumbersQuestionGeneratorConfigStore.firstNumRange} />
    <Checkbox labelText="Reverse" bind:checked={$twoNumbersQuestionGeneratorConfigStore.firstNumReverse} />
    <TextInput labelText="2nd number range" placeholder="" bind:value={$twoNumbersQuestionGeneratorConfigStore.secondNumRange} />
    <Checkbox labelText="Reverse" bind:checked={$twoNumbersQuestionGeneratorConfigStore.secondNumReverse} />

    <Checkbox labelText="Allow negative" bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowNegative} />
    <Checkbox labelText="Random order" bind:checked={$twoNumbersQuestionGeneratorConfigStore.randomOrder} />

    <TagSelect labelText="Operator" options={AppConstants.OPERATOR_OPTIONS} 
        bind:selected={$twoNumbersQuestionGeneratorConfigStore.questionOperator}/>
    
    <Button type="submit">Generate Worksheet</Button>
</Form>