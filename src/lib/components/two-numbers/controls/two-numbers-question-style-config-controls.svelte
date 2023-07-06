<script lang='ts'>
    // import carbon components
    import { TextInput, Tag } from "carbon-components-svelte";

    // import stores
    import { twoNumbersQuestionStyleConfigStore } from '$stores/two-numbers';

    export let selectedColumnForm: boolean = undefined;
    export let selectedShowAnswers: boolean = undefined;

    export let columnFormTagColor = undefined;
    export let showAnswersTagColor = undefined;

    export let selectedColor: string = 'blue';
    export let unselectedColor: string = 'gray';

    function handleColumnFormSelect(e) {
        selectedColumnForm = !selectedColumnForm;
        $twoNumbersQuestionStyleConfigStore.columnForm = selectedColumnForm;
        columnFormTagColor = getTagColor(selectedColumnForm);
    }

    function handleShowAnswersSelect(e) {
        selectedShowAnswers = !selectedShowAnswers;
        $twoNumbersQuestionStyleConfigStore.showAnswers = selectedShowAnswers;
        showAnswersTagColor = getTagColor(selectedShowAnswers);
    }

    function getTagColor(selected: boolean) {
        return selected ? selectedColor : unselectedColor;
    }
</script>

<div class="two-numbers-question-style-config-controls-content">    
    <Tag type={columnFormTagColor}  on:click={(e) => {e.preventDefault();handleColumnFormSelect(e)}}>Column Form</Tag>
    <Tag type={showAnswersTagColor}  on:click={(e) => {e.preventDefault();handleShowAnswersSelect(e)}}>Show Answers</Tag>

    <TextInput labelText="Number Box Width" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.numberBoxWidth} />
    <TextInput labelText="Number Box Height" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.numberBoxHeight} />
    <TextInput labelText="Question Font size" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.fontSize} />
    <TextInput labelText="Question Number box margin" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.numberBoxMargin} />
    <TextInput labelText="Question Operation box margin" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.operatorBoxMargin} />
    <TextInput labelText="Question container margin" placeholder="" bind:value={$twoNumbersQuestionStyleConfigStore.questionContainerMargin} />
</div>

<style>
    .two-numbers-question-style-config-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>