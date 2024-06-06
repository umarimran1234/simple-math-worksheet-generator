<script lang="ts">
    
    import QuestionHorizontal from "../question/QuestionHorizontal.svelte";
    import QuestionVertical from "../question/QuestionVertical.svelte";
    import DivisionQuestionVertical from "../question/DivisionQuestionVertical.svelte";

    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
	
    import type { TwoNumbersQuestionWorksheetConfig } from "$lib/components/two-numbers/TwoNumbersQuestionConstants";    
    import { TwoNumbersQuestionFormat } from "$lib/components/two-numbers/TwoNumbersQuestionConstants";
    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
		
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
            {#if question.questionType === AppFunction.TWO_NUMBERS.id}
                {#if questionConfig.questionFormat === TwoNumbersQuestionFormat.HORIZONTAL_METHOD}
                    <QuestionHorizontal 
                        firstNumber={question.num1}
						secondNumber={question.num2}
						operator={question.operator}
                        answer={question.answer}
                        showFirstNumber={questionConfig.showFirstNumber}
                        showSecondNumber={questionConfig.showSecondNumber}
                        showOperator={questionConfig.showOperator}
                        showAnswer = {questionConfig.showAnswers}
						
                        width={horizonalMethodStyleConfig.numberBoxWidth}
						height={horizonalMethodStyleConfig.numberBoxHeight}
						fontSize={horizonalMethodStyleConfig.fontSize}
						numberBoxMargin={horizonalMethodStyleConfig.numberBoxMargin}
						operatorBoxMargin={horizonalMethodStyleConfig.operatorBoxMargin}
						questionContainerMargin={horizonalMethodStyleConfig.questionContainerMargin}
                    />
                {:else}                    
                    {#if MathOperators.DIVIDE === question.operator }                    
                        <DivisionQuestionVertical 
                            questionId={String(questionIndex+1)}
                            dividend={question.num1.toString()}
                            divisor={question.num2.toString()}

                            showQuestionId={columnMethodStyleConfig.showQuestionId}
                            questionIdFontSize={columnMethodStyleConfig.questionIdFontSize}
                            questionIdWidth={columnMethodStyleConfig.questionIdWidth}
                            questionFontSize={columnMethodStyleConfig.questionFontSize}
                            questionContainerMargin={columnMethodStyleConfig.questionContainerMargin}
                            questionContainerPadding={columnMethodStyleConfig.questionContainerPadding}
                            questionRowNumberWidth={columnMethodStyleConfig.questionRowNumberWidth}
                        />
                    {:else}
                        <QuestionVertical 
                            questionId={String(questionIndex+1)}
                            firstNumber={question.num1.toString()}
                            secondNumber={question.num2.toString()}
                            operator={question.operator}
                            answer={questionConfig.showAnswers ? question.answer.toString() : ''}

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
            {/if}
        {/each}
    </WorksheetPage>    
{/each}