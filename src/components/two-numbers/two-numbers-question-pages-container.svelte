<script lang='ts'>
    import { QuestionTypes, AppConstants } from '$utils/app-constants';

    import { Page } from '$components/common';
	import TwoNumbersQuestion from './two-numbers-question.svelte';
	import TwoNumbersQuestionVertical from './two-numbers-question-vertical.svelte';
	
    export let worksheets = [];
    
	export let pageSize = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize;
	export let pageConfig = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig;
	export let twoNumbersQuestionStyleConfig = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig;
 
</script>

{#each worksheets as page}
	<Page size={pageSize} 
		padding={pageConfig.pagePadding} 
		contentHeight={pageConfig.contentContainerHeight} 
		contentFlexDirection={pageConfig.flexDirection}
		contentFlexWrap={pageConfig.flexWrap}
		contentJustifyContent={pageConfig.flexJustifyContent} 
		contentAlignContent={pageConfig.contentAlignContent} >
						
		{#each page as question, questionIndex}
			{#if question.questionType === QuestionTypes.TWO_NUMBERS}
				{#if twoNumbersQuestionStyleConfig.verticalDisplay == false}
					<TwoNumbersQuestion
						firstNumber={question.num1}
						secondNumber={question.num2}
						operator={question.operator}
						width={twoNumbersQuestionStyleConfig.numberBoxWidth}
						height={twoNumbersQuestionStyleConfig.numberBoxHeight}
						fontSize={twoNumbersQuestionStyleConfig.fontSize}
						numberBoxMargin={twoNumbersQuestionStyleConfig.numberBoxMargin}
						operatorBoxMargin={twoNumbersQuestionStyleConfig.operatorBoxMargin}
						questionContainerMargin={twoNumbersQuestionStyleConfig.questionContainerMargin}
						answer={twoNumbersQuestionStyleConfig.showAnswers ? question.answer : ''}
					/>
				{:else}
					<TwoNumbersQuestionVertical
						questionId={questionIndex+1}
						firstNumber={question.num1}
						secondNumber={question.num2}
						operator={question.operator}
						answer={twoNumbersQuestionStyleConfig.showAnswers ? question.answer : ''}
					/>
				{/if}
			{/if}
		{/each}
	</Page>
{/each}