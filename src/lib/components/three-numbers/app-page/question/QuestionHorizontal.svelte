<script lang="ts">
	export let width = '300px';
	export let height = '300px';
	export let fontSize = '15px';
	export let firstNumber = '';
	export let secondNumber = '';
	export let thirdNumber = '';
	export let firstOperator = '';
	export let secondOperator = '';
	export let answer = '';
	export let blankBoxIndex: number = 0;
	export let showAnswer: boolean = false;

	export let numberBoxMargin = '0';
	export let operatorBoxMargin = '0';
	export let questionContainerMargin = '';
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
	}
</style>