<script lang="ts">
    
    import QuestionHorizontal from "../question/QuestionHorizontal.svelte";
    // import QuestionVertical from "../question/QuestionVertical.svelte";
    import QuestionVerticalGridlines from "../question/QuestionVerticalGridlines.svelte";
    import DivisionQuestionVertical from "../question/DivisionQuestionVertical.svelte";

    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
	
    import type { ThreeNumbersQuestionWorksheetConfig } from "$lib/components/three-numbers/ThreeNumbersQuestionConstants";    
    import { ThreeNumbersQuestionFormat } from "$lib/components/three-numbers/ThreeNumbersQuestionConstants";
    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
		
    export let worksheetPages:any = [];

    let defaultThreeNumbersQuestionWorksheetConfig: ThreeNumbersQuestionWorksheetConfig = AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4;

    export let questionConfig = defaultThreeNumbersQuestionWorksheetConfig.questionConfig;
    export let columnMethodStyleConfig = defaultThreeNumbersQuestionWorksheetConfig.columnMethodStyleConfig;
    export let horizonalMethodStyleConfig = defaultThreeNumbersQuestionWorksheetConfig.horizonalMethodStyleConfig;    
    export let worksheetConfig = defaultThreeNumbersQuestionWorksheetConfig.worksheetConfig;
    export let worksheetCointainerStyleConfig = defaultThreeNumbersQuestionWorksheetConfig.worksheetCointainerStyleConfig;
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
            {#if question.questionType === AppFunction.THREE_NUMBERS.id}
                {#if questionConfig.questionFormat === ThreeNumbersQuestionFormat.HORIZONTAL_METHOD}
                    <!-- <QuestionHorizontal 
                        firstNumber={question.num1}
						secondNumber={question.num2}
                        thirdNumber={question.num3}
						firstOperator={question.firstOperator}
                        secondOperator={question.secondOperator}
                        answer={question.answer}
                        blankBoxIndex={question.blankBoxIndex}
                        showAnswer={questionConfig.showAnswers}
						
                        width={horizonalMethodStyleConfig.numberBoxWidth}
						height={horizonalMethodStyleConfig.numberBoxHeight}
						fontSize={horizonalMethodStyleConfig.fontSize}
						numberBoxMargin={horizonalMethodStyleConfig.numberBoxMargin}
						operatorBoxMargin={horizonalMethodStyleConfig.operatorBoxMargin}
						questionContainerMargin={horizonalMethodStyleConfig.questionContainerMargin}
                    /> -->

                    <QuestionVerticalGridlines
                        firstNumber={question.num1.toString()}
						secondNumber={question.num2.toString()}
                        thirdNumber={question.num3.toString()}
						firstOperator={question.firstOperator}
                        secondOperator={question.secondOperator}
                        twoNumsResult={question.twoNumsResult.toString()}
                        answer={question.answer.toString()}
                        blankBoxIndex={question.blankBoxIndex}
                        showAnswer={questionConfig.showAnswers}
						
                        width={horizonalMethodStyleConfig.numberBoxWidth}
						height={horizonalMethodStyleConfig.numberBoxHeight}
						fontSize={horizonalMethodStyleConfig.fontSize}
						numberBoxMargin={horizonalMethodStyleConfig.numberBoxMargin}
						operatorBoxMargin={horizonalMethodStyleConfig.operatorBoxMargin}
						questionContainerMargin={horizonalMethodStyleConfig.questionContainerMargin}

                        questionGridColumns={questionConfig.questionGridColumns}
                        roughPaperMode={questionConfig.roughPaperMode}
                    />
                {/if}
            {/if}
        {/each}
    </WorksheetPage>    
{/each}