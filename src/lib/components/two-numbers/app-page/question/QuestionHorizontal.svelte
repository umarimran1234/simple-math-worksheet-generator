<script lang="ts">
	export let width = '300px';
	export let height = '300px';
	export let fontSize = '15px';
	export let firstNumber = '';
	export let secondNumber = '';
	export let operator = '';
	export let answer = '';

	export let showFirstNumber = true;
	export let showSecondNumber = true;
	export let showOperator = true;
	export let showAnswer = true;

	export let numberBoxMargin = '0';
	export let operatorBoxMargin = '0';
	export let questionContainerMargin = '';
</script>

<div class="questionContainer" style="--fontSize:{fontSize};--questionContainerMargin:{questionContainerMargin}">
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{#if showFirstNumber}
			{firstNumber}
		{/if}
	</div>
	<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">
		{#if showOperator}
			{@html operator}
		{:else}
			<div style="border: 1px solid; height:10mm; width:10mm; border-radius: 1mm;"> </div>
		{/if}
	</div>
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{#if showSecondNumber}
			{secondNumber}
		{/if}
	</div>
	<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">=</div>
	<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
		{#if showAnswer}
			{answer}
		{/if}
	</div>
</div>

<style>
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
		display: flex;
    	justify-content: center;
    	align-items: center;
	}
</style>