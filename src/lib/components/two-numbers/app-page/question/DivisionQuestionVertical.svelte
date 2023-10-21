<script lang="ts">
    export let questionId:string = '1';
    export let dividend: string = '1';
    export let divisor: string = '1';
    
    export let showQuestionId: boolean = false;
    export let questionIdFontSize: string = '5mm';
    export let questionIdWidth: string = '12mm';
    export let questionFontSize: string = '10mm';
    export let questionContainerMargin: string = '3mm';
    export let questionContainerPadding: string = '2mm';
    export let questionRowNumberWidth: string = '24mm';
</script>

<div class="verticalQuestionOutlineContainer quetionFont" 
    style="--questionContainerMargin:{questionContainerMargin};--questionContainerPadding:{questionContainerPadding}">
    
    {#if showQuestionId}
        <div class="questionIndex" style="--questionIdWidth:{questionIdWidth};--questionIdFontSize:{questionIdFontSize};">
            {questionId}.
        </div>
    {/if}

    <div class="verticalQuestionContainer" style="--questionFontSize:{questionFontSize}">
        <!-- empty row for quotient-->
        <span class="numberRow">&nbsp;</span>
        
        <!-- divisor and divident row-->
        <span class="numberRow">
            <span class="divisorNumberBox">{divisor}</span>    
            <span class="dividendNumberBox">{dividend}</span>
        </span>
        
        <!-- 2 empty rows at the bottom -->
        <span class="numberRow">&nbsp;</span>
        <span class="numberRow">&nbsp;</span>
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
        
    }

    .quetionFont {
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

    .numberRow {
        display: flex;
        flex-direction: row;
        align-items: strech;
        /* width: 200px; */
    }

    .divisorNumberBox {
		text-align: right;
        border-right: 1px black solid;
        border-radius: 0px 0px 16px 0px;
        padding: 0px 2px 0px 2px;
		width: 8mm;		
    }

    .dividendNumberBox {
        /* width: 150px; */
        width: 20mm;
        border-top: 1px black solid;
        padding: 0px 2px 0px 0px;
    }
</style>