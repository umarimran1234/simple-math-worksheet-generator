<script lang="ts">
    export let questionId;
	export let firstNumber = '';
	export let secondNumber = '';
	export let operator = '';
	export let answer = '';
</script>

<div class="verticalQuestionOutlineContainer">
    <div class="questionIndex">{questionId}.</div>
    <div class="verticalQuestionContainer">
        <div class="questionRow">
            <div class="questionOperatorColumn">{@html operator}</div>
            <div class="questionNumberStackColumn">
                <div class="questionNumber">{firstNumber}</div>
                <div class="questionNumber">{secondNumber}</div>
            </div>
        </div>
        <div class="answerRow">
            <div class="answerCell">{answer}</div>
        </div>
    </div>
</div>

<style>
    .verticalQuestionOutlineContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid;
        margin: 3mm;
        padding: 2mm;
    }

    .verticalQuestionContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 10mm;
    }

    .questionIndex {
        font-size: 5mm;
        width: 12mm;
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
        width: 24mm;
        text-align: right;
    }
</style>
