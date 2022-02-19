<script lang='ts'>
    // import carbon components
    import { TextInput } from "carbon-components-svelte";

    // import stores
    import { twoNumbersQuestionStyleConfigStore } from '$stores/two-numbers/two-numbers-question-style-stores';
</script>

<div class="two-numbers-question-style-config-controls-content">
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