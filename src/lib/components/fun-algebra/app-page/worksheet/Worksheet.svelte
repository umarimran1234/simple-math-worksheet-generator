<script lang="ts">
    
    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
        
    import { FunAlgebraQuestionType, type FunAlgebraWorksheetConfig } from "../../FunAlgebraConstants";
    
    import { FunAlgebraQuestionFormat } from "../../FunAlgebraConstants";

    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
	import PictureAlgebraRow from "../question/PictureAlgebraRow.svelte";
	import AlgebraBasicLevel1Question from "../question/AlgebraBasicLevel1Question.svelte";
		
    export let worksheetPages:any = [];

    // let defaultTwoNumbersQuestionWorksheetConfig: TwoNumbersQuestionWorksheetConfig = AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4;
    let defaultQuestionWorksheetConfig: FunAlgebraWorksheetConfig = AppConstants.FUN_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4;

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
            {#if question.questionType === FunAlgebraQuestionType.BASIC_LVL_1}
                <AlgebraBasicLevel1Question
                    questionNo={questionIndex + 1}

                    aNum={question.numA}
                    
                    
                    ratioBToA={question.ratioBToA}
                    bNum={question.numB}
                    

                    ratioCToB={question.ratioCToB}
                    cNum={question.numC}

                    showAnswer={questionConfig.showAnswers}
                     />
            {/if}            
        {/each}
    </WorksheetPage>    
{/each}