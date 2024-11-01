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

    export let questionGridColumns = 3;

    // let totalDigits = firstNumber.length < questionGridColumns ? questionGridColumns : firstNumber.length;
    // if(secondNumber.length > totalDigits) totalDigits = secondNumber.length;
    // if(answer.length > totalDigits) totalDigits = answer.length;
    // totalDigits += 1;

</script>

<div class="verticalQuestionOutlineContainer" 
    style="--questionContainerMargin:{questionContainerMargin};">
    
    {#if showQuestionId}
        <div class="questionIndex" style="--questionIdWidth:{questionIdWidth};--questionIdFontSize:{questionIdFontSize};">
            {questionId}.
        </div>
    {/if}

    <table cellspacing="0" style="--questionFontSize:{questionFontSize}" >
        <tbody>
            <tr>
                {#each Array(questionGridColumns - firstNumber.length) as i}
                    <td><div></div></td>
                {/each}
                {#each firstNumber as digit}
                    <td><div>{digit}</div></td>
                {/each}
            </tr>

            <tr>
                <td>{@html operator}</td>
                {#each Array(questionGridColumns - secondNumber.length - 1) as i}
                    <td><div></div></td>
                {/each}
                {#each secondNumber as digit}
                    <td><div>{digit}</div></td>
                {/each}
            </tr>
            
            <tr>
                {#each Array(questionGridColumns - answer.length) as i}
                    <td class="tableTdAnswerCell" style="border-top: 2px solid black"><div></div></td>
                {/each}                
                {#each answer as digit}
                    <td class="tableTdAnswerCell" style="border-top: 2px solid black"><div>{digit}</div></td>
                {/each}
            </tr>
        </tbody>
    </table>
</div>

<style>
    table {
        border-collapse:collapse;
        border:1px solid #d4d4d4;
        empty-cells: show;
        font-size: var(--questionFontSize);
    }

    table td {
        border:1px solid #d4d4d4;
        min-height: 8mm;
        height: 8mm;
        min-width: 6mm;
        text-align: center;
    }

    .tableTdAnswerCell {
        height: 10mm;
    }

    .verticalQuestionOutlineContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* border: 1px solid; */
        margin: var(--questionContainerMargin);
        font-family: Verdana, sans-serif;
        color: black;
    }

    .questionIndex {
        font-size: var(--questionIdFontSize);
        width: var(--questionIdWidth);
    }
</style>