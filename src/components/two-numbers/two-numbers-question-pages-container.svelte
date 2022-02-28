<script lang='ts'>
    import { QuestionTypes, AppConstants } from '$utils/app-constants';

    import { Page } from '$components/common';
	import TwoNumbersQuestion from './two-numbers-question.svelte';
	
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
		contentJustifyContent={pageConfig.flexJustifyContent} >
						
		{#each page as question}
			{#if question.questionType === QuestionTypes.TWO_NUMBERS}
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
				/>
			{/if}
		{/each}
	</Page>
{/each}