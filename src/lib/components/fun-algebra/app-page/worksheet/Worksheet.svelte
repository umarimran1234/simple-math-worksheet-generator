<script lang="ts">
    
    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
        
    import { FunAlgebraQuestionType, type FunAlgebraWorksheetConfig } from "../../FunAlgebraConstants";
    
    import { FunAlgebraQuestionFormat } from "../../FunAlgebraConstants";

    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    import { MathOperators } from "$lib/constants/MathsConstants";
	import PictureAlgebraRow from "../question/PictureAlgebraRow.svelte";
	import AlgebraBasicLevel1Question from "../question/AlgebraBasicLevel1Question.svelte";
    import AlgebraBasicLevel2Question from "../question/AlgebraBasicLevel2Question.svelte";
    import AlgebraBasicLevel3Question from "../question/AlgebraBasicLevel3Question.svelte";
		
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

                    showAnswer={questionConfig.show1stAnswer}
                     />
            {:else if question.questionType === FunAlgebraQuestionType.BASIC_LVL_2 }
                <AlgebraBasicLevel2Question
                    questionNo={questionIndex + 1}
                    numA = {question.numA}
                    numB = {question.numB}
                    numC = {question.numC}

                    numAShowAnser = {questionConfig.show1stAnswer}
                    numBShowAnser = {questionConfig.show2ndAnswer}
                    numCShowAnser = {questionConfig.show3rdAnswer}
                    />
            {:else if question.questionType === FunAlgebraQuestionType.BASIC_LVL_3 }
                <AlgebraBasicLevel3Question
                    questionNo={questionIndex + 1}
                    numA = {question.numA}
                    numB = {question.numB}
                    numC = {question.numC}
                    
                    numAShowAnser = {questionConfig.show1stAnswer}
                    numBShowAnser = {questionConfig.show2ndAnswer}
                    numCShowAnser = {questionConfig.show3rdAnswer}
                    />
            {:else}
            {/if}            
        {/each}
    </WorksheetPage>    
{/each}