<script lang="ts">
    
    import QuestionHorizontal from "../question/QuestionHorizontal.svelte";
    import QuestionVertical from "../question/QuestionVertical.svelte";
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
                    <QuestionHorizontal 
                        firstNumber={question.num1}
						secondNumber={question.num2}
                        thirdNumber={question.num3}
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
                    {#if MathOperators.DIVIDE === question.operator }                    
                        <DivisionQuestionVertical 
                            questionId={String(questionIndex+1)}
                            dividend={question.num1}
                            divisor={question.num2}

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
            {/if}
        {/each}
    </WorksheetPage>    
{/each}