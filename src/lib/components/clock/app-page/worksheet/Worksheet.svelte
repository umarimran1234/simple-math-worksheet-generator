<script lang="ts">
    
    import WorksheetPage from "$lib/components/common/worksheet/WorksheetPage.svelte";
 
    import { AppFunction, AppConstants } from "$lib/constants/AppConstants";
    
	import ClockQuestionType1 from "$lib/components/clock/app-page/question/ClockQuestionType1.svelte";
	import type { ClockQuestionWorksheetConfig  } from "../../ClockConstants";
		
    import { ClockQuestionType, DigitalClockType } from "../../ClockConstants";

    export let worksheetPages:any = [];

    let defaultQuestionWorksheetConfig: ClockQuestionWorksheetConfig = AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4;

 

    export let questionConfig = defaultQuestionWorksheetConfig.questionConfig;   
    export let worksheetConfig = defaultQuestionWorksheetConfig.worksheetConfig;
    export let worksheetCointainerStyleConfig = defaultQuestionWorksheetConfig.worksheetCointainerStyleConfig;

    // let now = new Date();
    // // let seconds = now.getSeconds();
    // let seconds = 0;
    // let minutes = now.getMinutes();
    // let hours = now.getHours();

    // console.log('now ', now, ' hours ', hours, ' minutes ', minutes, ' seconds ', seconds);
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
            {#if question.questionType === ClockQuestionType.DIGITAL_CLOCK_QUESTION }
                <ClockQuestionType1 questionNo={questionIndex + 1} 
                    hours={question.hour} minutes={question.minute} seconds={0}
                    showDigitalClockHour={questionConfig.showAnswerHour}
                    showDigitalClockMinute={questionConfig.showAnswerMinute}
                    showSecondMarking={true}
                    amPmMode={DigitalClockType.TYPE_AM_PM === question.digitalClockType}/>
            {:else if question.questionType === ClockQuestionType.ANALOG_CLOCK_QUESTION}
                <ClockQuestionType1 questionNo={questionIndex + 1} 
                    hours={question.hour} minutes={question.minute} seconds={0}
                    showHourHand={questionConfig.showAnswerHour} 
                    showMinuteHand={questionConfig.showAnswerMinute}
                    showSecondMarking={true}
                    amPmMode={DigitalClockType.TYPE_AM_PM === question.digitalClockType}/>
            {:else}
            {/if}        
        {/each}
    </WorksheetPage>    
{/each}