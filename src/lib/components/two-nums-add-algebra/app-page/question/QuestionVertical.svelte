<script lang="ts">
    import type { TwoNumsAddAlgebraBlockIndex } from "../../TwoNumsAddAlgebraQuestionConstants";

    export let questionId:string = '1';
	
    export let firstNumber:string = '';
	export let secondNumber:string = '';
	export let operator:string = '';
	export let answer:string = '';

    export let showAnswers:boolean = false;
    export let blockIndices: TwoNumsAddAlgebraBlockIndex[];

    export let showQuestionId: boolean = false;
    export let questionIdFontSize: string = '5mm';
    export let questionIdWidth: string = '12mm';
    export let questionFontSize: string = '10mm';
    export let questionContainerMargin: string = '3mm';
    export let questionContainerPadding: string = '2mm';
    export let questionRowNumberWidth: string = '24mm';

    const shouldDisplayBlock = (numIndex: number, digitIndex: number, blockIndices: TwoNumsAddAlgebraBlockIndex[]) => {
        for (let i = 0; i < blockIndices.length; i++) {
            if (blockIndices[i].blockNum === numIndex && blockIndices[i].blockDigit == digitIndex) {
                return true;
            }
        }
        return false;
    }

    const shouldShowAnswer = (numIndex: number, digitIndex: number, showAnswers: boolean, blockIndices: TwoNumsAddAlgebraBlockIndex[]) => {
        for (let i = 0; i < blockIndices.length; i++) {
            if (blockIndices[i].blockNum === numIndex && blockIndices[i].blockDigit == digitIndex && !showAnswers) {
                return false;
            }
        }
        return true;
    }

</script>

<div class="verticalQuestionOutlineContainer" 
    style="--questionContainerMargin:{questionContainerMargin};--questionContainerPadding:{questionContainerPadding}">
    
    {#if showQuestionId}
        <div class="questionIndex" style="--questionIdWidth:{questionIdWidth};--questionIdFontSize:{questionIdFontSize};">
            {questionId}.
        </div>
    {/if}

    <div class="verticalQuestionContainer" style="--questionFontSize:{questionFontSize}">
        <div class="questionRow">
            <div class="questionOperatorColumn">{@html operator}</div>
            <div class="questionNumberStackColumn">
                <div class="questionNumber" style="--questionRowNumberWidth:{questionRowNumberWidth}">
                    {#each Array.from(firstNumber) as digit, index}
                        <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{shouldDisplayBlock(0, index, blockIndices) ? "solid" : "none"}">
                            {shouldShowAnswer(0, index, showAnswers, blockIndices) ? digit : ''}
                        </div>
                    {/each}
                </div>
                <div class="questionNumber" style="--questionRowNumberWidth:{questionRowNumberWidth}">
                    {#each Array.from(secondNumber) as digit, index}
                        <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{shouldDisplayBlock(1, index, blockIndices) ? "solid" : "none"}">
                            {shouldShowAnswer(1, index, showAnswers, blockIndices) ? digit : ''}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="answerRow">
            <div class="answerCell" style="--questionRowNumberWidth:{questionRowNumberWidth}">
                {#each Array.from(answer) as digit, index}
                    <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{shouldDisplayBlock(2, index, blockIndices) ? "solid" : "none"}">
                        {shouldShowAnswer(2, index, showAnswers, blockIndices) ? digit : ''}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .verticalQuestionOutlineContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid;
        margin: var(--questionContainerMargin);
        padding: var(--questionContainerPadding);
        font-family: Verdana, sans-serif;
        color: black;
    }

    .verticalQuestionContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: var(--questionFontSize);
    }

    .questionIndex {
        font-size: var(--questionIdFontSize);
        width: var(--questionIdWidth);
    }

    .questionRow {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    
    .answerRow {
        display: flex;
        border-top: 1px solid;
        flex-direction: row;
        height: 15mm;
        width: 30mm;
        justify-content: flex-end;
    }

    .answerCell {
        width: var(--questionRowNumberWidth);
        text-align: right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: max-content;
        min-height: 32px;
    }

    .questionOperatorColumn {
        display: flex;
        align-items: flex-end;
        text-align: left;
    }

    .questionNumberStackColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .questionNumber {
        width: var(--questionRowNumberWidth);
        text-align: right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: max-content;
        min-height: 32px;
    }

    .questionNumberDigit {
        width: var(--questionRowNumberDigitWidth);
        text-align: center;        
        border: 1px;
        border-style: var(--questionRowNumberDigitBorderStyle);
    }
</style>