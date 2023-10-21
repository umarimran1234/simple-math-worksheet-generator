<script lang="ts">
    
    import QuestionHorizontal from "../question/QuestionHorizontal.svelte";
    import QuestionVertical from "../question/QuestionVertical.svelte";

    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
        
    import { type FunMultiplicationWorksheetConfig } from "../../FunMultiplicationConstants";
    
    import { FunMultiplicationQuestionFormat } from "../../FunMultiplicationConstants";

    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
		
    export let worksheetPages:any = [];

    // let defaultTwoNumbersQuestionWorksheetConfig: TwoNumbersQuestionWorksheetConfig = AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4;
    let defaultQuestionWorksheetConfig: FunMultiplicationWorksheetConfig = AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4;

    export let questionConfig = defaultQuestionWorksheetConfig.questionConfig;
    export let columnMethodStyleConfig = defaultQuestionWorksheetConfig.columnMethodStyleConfig;
    export let horizonalMethodStyleConfig = defaultQuestionWorksheetConfig.horizonalMethodStyleConfig;    
    export let worksheetConfig = defaultQuestionWorksheetConfig.worksheetConfig;
    export let worksheetCointainerStyleConfig = defaultQuestionWorksheetConfig.worksheetCointainerStyleConfig;
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
            {#if question.questionType === AppFunction.FUN_MULTIPLICATION.id}
                {#if questionConfig.questionFormat === FunMultiplicationQuestionFormat.HORIZONTAL_METHOD}
                    <QuestionHorizontal 
                        firstNumber={question.num1}
                        showFirstNumber={questionConfig.showFirstNum}
						secondNumber={question.num2}
                        showSecondNumber={questionConfig.showSecondNum}
						operator={question.operator}
                        answer={question.answer}
                        showAnswer={questionConfig.showAnswers}
						
                        width={horizonalMethodStyleConfig.numberBoxWidth}
						height={horizonalMethodStyleConfig.numberBoxHeight}
						fontSize={horizonalMethodStyleConfig.fontSize}
						numberBoxMargin={horizonalMethodStyleConfig.numberBoxMargin}
						operatorBoxMargin={horizonalMethodStyleConfig.operatorBoxMargin}
						questionContainerMargin={horizonalMethodStyleConfig.questionContainerMargin}
                    />
                {:else}                    
                    <QuestionVertical 
                        questionId={String(questionIndex+1)}
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