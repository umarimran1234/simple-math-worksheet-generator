<script lang="ts">

    import TwoNumbersQuestionVertical from "../question/TwoNumbersQuestionVertical.svelte";
    import TwoNumbersQuestionHorizontal from "../question/TwoNumbersQuestionHorizontal.svelte";

    import WorksheetPage from "$lib/components/worksheet/WorksheetPage.svelte";
	
    import type { TwoNumbersQuestionWorksheetConfig } from "$lib/constants/TwoNumbersQuestionConstants";    
    import { TwoNumbersQuestionFormat } from "$lib/constants/TwoNumbersQuestionConstants";
    import { QuestionTypes, AppConstants } from "$lib/constants/AppConstants";

	
    export let worksheetPages:any = [];

    let defaultTwoNumbersQuestionWorksheetConfig: TwoNumbersQuestionWorksheetConfig = AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4;

    export let questionConfig = defaultTwoNumbersQuestionWorksheetConfig.questionConfig;
    export let columnMethodStyleConfig = defaultTwoNumbersQuestionWorksheetConfig.columnMethodStyleConfig;
    export let horizonalMethodStyleConfig = defaultTwoNumbersQuestionWorksheetConfig.horizonalMethodStyleConfig;    
    export let worksheetConfig = defaultTwoNumbersQuestionWorksheetConfig.worksheetConfig;
    export let worksheetCointainerStyleConfig = defaultTwoNumbersQuestionWorksheetConfig.worksheetCointainerStyleConfig;
</script>

<!-- Worksheet contains mutliple pages -->

{#each worksheetPages as page}
    <WorksheetPage
        size={worksheetConfig.worksheetSize}
        padding={worksheetCointainerStyleConfig.pagePadding}
        contentHeight={worksheetCointainerStyleConfig.contentContainerHeight} 
		contentFlexDirection={worksheetCointainerStyleConfig.flexDirection}
		contentFlexWrap={worksheetCointainerStyleConfig.flexWrap}
		contentJustifyContent={worksheetCointainerStyleConfig.flexJustifyContent} 
		contentAlignContent='center' >

        {#each page as question, questionIndex }
            {#if question.questionType === QuestionTypes.TWO_NUMBERS}
                {#if questionConfig.questionFormat === TwoNumbersQuestionFormat.HORIZONTAL_METHOD}
                    <TwoNumbersQuestionHorizontal 
                        firstNumber={question.num1}
						secondNumber={question.num2}
						operator={question.operator}
                        answer={questionConfig.showAnswers ? question.answer : ''}
						
                        width={horizonalMethodStyleConfig.numberBoxWidth}
						height={horizonalMethodStyleConfig.numberBoxHeight}
						fontSize={horizonalMethodStyleConfig.fontSize}
						numberBoxMargin={horizonalMethodStyleConfig.numberBoxMargin}
						operatorBoxMargin={horizonalMethodStyleConfig.operatorBoxMargin}
						questionContainerMargin={horizonalMethodStyleConfig.questionContainerMargin}
                    />
                {:else}
                    <TwoNumbersQuestionVertical 
                        questionId={questionIndex+1}
						firstNumber={question.num1}
						secondNumber={question.num2}
						operator={question.operator}
                        answer={questionConfig.showAnswers ? question.answer : ''}

                        showQuestionId={columnMethodStyleConfig.showQuestionId}
                        questionIdFontSize={columnMethodStyleConfig.questionIdFontSize}
                        questionIdWidth={columnMethodStyleConfig.questionIdWidth}
                        questionFontSize={columnMethodStyleConfig.questionFontSize}
                        questionContainerMargin={columnMethodStyleConfig.questionContainerMargin}
                        questionContainerPadding={columnMethodStyleConfig.questionContainerPadding}
                        questionRowNumberWidth={columnMethodStyleConfig.questionRowNumberWidth}
                    />
                {/if}
            {/if}
        {/each}
    </WorksheetPage>    
{/each}