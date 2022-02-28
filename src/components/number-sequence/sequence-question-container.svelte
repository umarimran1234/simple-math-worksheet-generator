<script lang="ts">

    import SquareLetterBox from './square-letter-box.svelte';
    import SequenceQuestionRow from "./sequence-question-row.svelte"; 

    export let questionChunks;

    export let sequenceQuestionContainerMargin: string = '0';
    export let fontSize: string = '30px';
    export let letterBoxWidth = '25mm';
    export let letterBoxHeight = '25mm';
    export let gap = '10mm';
</script>

<div class="sequenceQuestionContainer" style="--sequenceQuestionContainerMargin:{sequenceQuestionContainerMargin};--gap={gap}">
{#each questionChunks as chunk, i}
    <SequenceQuestionRow>
        {#each chunk as record}
            <div class="letterBoxContainer">
                <SquareLetterBox letter={record.emptyBoxFlag ? '' : record.letter} fontSize={fontSize} width={letterBoxWidth} height={letterBoxHeight} />
            </div>
        {/each}
    </SequenceQuestionRow>
{/each}
</div>

<style>
    .sequenceQuestionContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin: var(--sequenceQuestionContainerMargin);
        gap: var(--gap);
    }

    .letterBoxContainer {
        /* margin: 2mm; */
        margin: 0mm;
    }
</style>