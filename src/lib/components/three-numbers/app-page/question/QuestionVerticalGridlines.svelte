<script lang="ts">
	export let width = '300px';
	export let height = '300px';
	export let fontSize = '15px';
	export let firstNumber:string = '';
	export let secondNumber:string = '';	
	export let thirdNumber:string = '';
	export let firstOperator = '';
	export let secondOperator = '';
	export let twoNumsResult:string = '';
	export let answer:string = '';
	export let blankBoxIndex: number = 0;
	export let showAnswer: boolean = false;

	export let numberBoxMargin = '0';
	export let operatorBoxMargin = '0';
	export let questionContainerMargin = '';

	// let answerOfFirstTwoNum = calculate(firstOperator, [parseInt(firstNumber), parseInt(secondNumber)]).toString();

	export let questionGridColumns: number = 4;

	export let roughPaperMode: boolean = true;

	console.log('questionGridColumns', questionGridColumns, 'firstNumber', firstNumber, firstNumber.length, 'secondNumber', secondNumber, secondNumber.length, 'twoNumsResult', twoNumsResult, 'thirdNumber', thirdNumber, 'firstOperator', firstOperator, 'secondOperator', secondOperator);
</script>

<div class="questionContainer" style="--fontSize:{fontSize};--questionContainerMargin:{questionContainerMargin}">
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{ (blankBoxIndex == 1 && !showAnswer) ? '' : firstNumber }
	</div>
	<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">
		{@html firstOperator}
	</div>
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{ (blankBoxIndex == 2 && !showAnswer) ? '' : secondNumber }
	</div>
	<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">
		{@html secondOperator}
	</div>
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{ (blankBoxIndex == 3 && !showAnswer) ? '' : thirdNumber }
	</div>
	<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">=</div>
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{ (blankBoxIndex == 0 && !showAnswer) ? '' : answer }
	</div>

	<table cellspacing="0" style="--questionFontSize:{fontSize}; margin-left:1.5mm;" >
        <tbody>
			<tr>
				{#if roughPaperMode}
					{#each Array(questionGridColumns) as i}
						<td><div></div></td>
					{/each}
				{:else}
					{#each Array(questionGridColumns - (blankBoxIndex == 1 ? 0 : firstNumber.length)) as i}
						<td><div></div></td>
					{/each}
					{#if blankBoxIndex != 1}
						{#each firstNumber as digit}
							<td><div>{digit}</div></td>
						{/each}
					{/if}
				{/if}
            </tr>

            <tr>
				{#if roughPaperMode}
					{#each Array(questionGridColumns) as i}
						<td><div></div></td>
					{/each}
				{:else}
					<td>{@html firstOperator}</td>
					{#each Array(questionGridColumns - (blankBoxIndex == 2 ? 1 : (secondNumber.length + 1 ))) as i}
						<td><div></div></td>
					{/each}
					{#if blankBoxIndex != 2}
						{#each secondNumber as digit}
							<td><div>{digit}</div></td>
						{/each}
					{/if}
				{/if}
            </tr>
            
			<tr>
				{#if roughPaperMode}
					{#each Array(questionGridColumns) as i}
						<td  class="tableTdAnswerCell" ><div></div></td>
					{/each}
				{:else}
					{#each Array(questionGridColumns - ((blankBoxIndex != 1 && blankBoxIndex != 2) ? 0 : (twoNumsResult.length )) ) as i}
						<td class="tableTdAnswerCell" style="border-top: 2px solid black"><div></div></td>
					{/each}
					{#if !(blankBoxIndex != 1 && blankBoxIndex != 2)}                
						{#each twoNumsResult as digit}
							<td class="tableTdAnswerCell" style="border-top: 2px solid black"><div>{digit}</div></td>
						{/each}
					{/if}
				{/if}
			</tr>

			<tr>
				{#if roughPaperMode}
					{#each Array(questionGridColumns) as i}
						<td><div></div></td>
					{/each}
				{:else}
					<td>{@html secondOperator}</td>
					{#each Array(questionGridColumns - (blankBoxIndex == 3 ? 1 : (thirdNumber.length + 1))) as i}
						<td><div></div></td>
					{/each}
					{#if blankBoxIndex != 3}                
						{#each thirdNumber as digit}
							<td><div>{digit}</div></td>
						{/each}
					{/if}
				{/if}
            </tr>

            <tr>
				{#if roughPaperMode}
					{#each Array(questionGridColumns) as i}
						<td  class="tableTdAnswerCell"><div></div></td>
					{/each}
				{:else}
					{#each Array(questionGridColumns - (blankBoxIndex == 0 ? 0 : answer.length)) as i}
						<td class="tableTdAnswerCell" style="border-top: 2px solid black"><div></div></td>
					{/each}
					{#if blankBoxIndex != 0}                
						{#each answer as digit}
							<td class="tableTdAnswerCell" style="border-top: 2px solid black"><div>{digit}</div></td>
						{/each}
					{/if}
				{/if}
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



	div.questionContainer {
		display: flex;
		flex-wrap: wrap;
		color: black;
		font-family: Verdana, sans-serif;
		font-stretch: expanded;
		text-align: center;
		font-size: var(--fontSize);
		margin: var(--questionContainerMargin);		
	}
	div.numberBox {
		width: var(--width);
		height: var(--height);
		margin: var(--numberBoxMargin);
		padding: 0px;
		border: 1px solid;
		border-radius: 5px;
	}
	div.operatorBox {
		height: var(--height);
		margin: var(--operatorBoxMargin);
		padding: 0px;
	}
</style>