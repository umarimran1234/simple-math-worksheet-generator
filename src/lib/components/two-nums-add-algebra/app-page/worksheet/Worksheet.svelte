<script lang="ts">
    import QuestionVertical from "../question/QuestionVertical.svelte";

    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
	
    // import type { TwoNumbersQuestionWorksheetConfig } from "$lib/components/two-numbers/TwoNumbersQuestionConstants";    
    // import { TwoNumbersQuestionFormat } from "$lib/components/two-numbers/TwoNumbersQuestionConstants";
    
    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
	import type { TwoNumsAddAlgebraQuestionWorksheetConfig } from "../../TwoNumsAddAlgebraQuestionConstants";
		
    export let worksheetPages:any = [];

    let defaultTwoNumbersQuestionWorksheetConfig: TwoNumsAddAlgebraQuestionWorksheetConfig = AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4;

    export let questionConfig = defaultTwoNumbersQuestionWorksheetConfig.questionConfig;
    export let columnMethodStyleConfig = defaultTwoNumbersQuestionWorksheetConfig.columnMethodStyleConfig; 
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
                <QuestionVertical 
                    questionId={String(questionIndex+1)}
                    firstNumber={question.num1.toString()}
                    secondNumber={question.num2.toString()}
                    operator={question.operator}
                    answer={question.answer.toString()}
                    showAnswers={questionConfig.showAnswers}                    
                    blockIndices={[question.blockIndex1, question.blockIndex2]}

                    showQuestionId={columnMethodStyleConfig.showQuestionId}
                    questionIdFontSize={columnMethodStyleConfig.questionIdFontSize}
                    questionIdWidth={columnMethodStyleConfig.questionIdWidth}
                    questionFontSize={columnMethodStyleConfig.questionFontSize}
                    questionContainerMargin={columnMethodStyleConfig.questionContainerMargin}
                    questionContainerPadding={columnMethodStyleConfig.questionContainerPadding}
                    questionRowNumberWidth={columnMethodStyleConfig.questionRowNumberWidth}
                />
            {/if}
        {/each}
    </WorksheetPage>    
{/each}