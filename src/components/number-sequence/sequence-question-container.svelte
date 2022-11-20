<script lang="ts">

    import SquareLetterBox from './square-letter-box.svelte';
    import CircLetterBox from './circle-letter-box.svelte';
    import SequenceQuestionRow from "./sequence-question-row.svelte"; 
    import CircleLetterBox from './circle-letter-box.svelte';

    // export let questionChunks;
    export let questions: Array<Array<LetterSequenceType>>;
    
    export let sequenceQuestionContainerMargin: string = '0';
    export let fontSize: string = '30px';
    export let letterBoxWidth = '25mm';
    export let letterBoxHeight = '25mm';
    export let gap = '10mm';
</script>

<div class="sequenceQuestionContainer" style="--sequenceQuestionContainerMargin:{sequenceQuestionContainerMargin};--gap={gap}">
<!-- {#each questionChunks as chunk, i} -->
{#if questions }
    {#each questions as question}
        <SequenceQuestionRow>
            {#each question as box}
                <div class="letterBoxContainer">
                    
                    <CircleLetterBox letter={box.emptyBoxFlag ? '' : box.letter}
                        fontSize={fontSize} size={letterBoxWidth} borderRadius="50%" />

                    <!-- <SquareLetterBox letter={box.emptyBoxFlag ? '' : box.letter} 
                        fontSize={fontSize} width={letterBoxWidth} height={letterBoxHeight} /> -->
                </div>
            {/each}
        </SequenceQuestionRow>
    {/each}
{/if}
<!-- {/each} -->
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
        margin: 1mm;
    }
</style>