<script lang="ts">
    export let questionId:string = '1';
	
    export let firstNumber:string = '';
	export let secondNumber:string = '';
	export let operator:string = '';
	export let answer:string = '';

    export let showQuestionId: boolean = false;
    export let questionIdFontSize: string = '5mm';
    export let questionIdWidth: string = '12mm';
    export let questionFontSize: string = '10mm';
    export let questionContainerMargin: string = '3mm';
    export let questionContainerPadding: string = '2mm';
    export let questionRowNumberWidth: string = '24mm';

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
                    {#each firstNumber as digit}
                        <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{"none"}">{digit}</div>
                    {/each}
                </div>
                <div class="questionNumber" style="--questionRowNumberWidth:{questionRowNumberWidth}">
                    {#each secondNumber as digit}
                        <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{"none"}">{digit}</div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="answerRow">
            <div class="answerCell" style="--questionRowNumberWidth:{questionRowNumberWidth}">
                {#each answer as digit}
                    <div class="questionNumberDigit" style="--questionRowNumberDigitWidth:{"5mm"};--questionRowNumberDigitBorderStyle:{"none"}">{digit}</div>
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
    }

    .questionNumberDigit {
        width: var(--questionRowNumberDigitWidth);
        text-align: center;        
        border: 1px;
        border-style: var(--questionRowNumberDigitBorderStyle);
    }
</style>