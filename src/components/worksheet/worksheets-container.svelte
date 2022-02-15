<script lang='ts'>
    import { QuestionTypes, AppConstants } from '$utils/app-constants';

    import Page from '$components/worksheet/page.svelte';
	import TwoNumbersQuestion from '$components/question/two-numbers-question.svelte';

    export let worksheets = [];
    
	export let pageSize = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize;

	export let pageConfig = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig;
	export let twoNumbersQuestionStyleConfig = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig;
 
</script>

{#each worksheets as page}
		<Page size={pageSize}>
			<div
				class="pageContentContainer"
				style="--pageContentContainerHeight:{pageConfig.pageContentContainerHeight}; 
                --pageContentContainerFlexDirection:{pageConfig.flexDirection}; 
                --pageContentContainerFlexWrap:{pageConfig.flexWrap}; 
                --pageContentContainerJustifyContent:{pageConfig.flexJustifyContent}"
			>				
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
			</div>
		</Page>
	{/each}

<style>
    .pageContentContainer {
		display: flex;
		flex-direction: var(--pageContentContainerFlexDirection);
		flex-wrap: var(--pageContentContainerFlexWrap);
		justify-content: var(--pageContentContainerJustifyContent);
		height: var(--pageContentContainerHeight);
        align-content: center;
	}
</style>