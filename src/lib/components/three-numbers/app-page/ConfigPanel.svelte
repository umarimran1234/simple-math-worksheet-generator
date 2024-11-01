<script lang="ts">

    // SMUI text input
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    // SMUI checkbox
    import FormField from '@smui/form-field';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // SMUI switch
    import Switch from '@smui/switch';

    // SMUI select
    import Select, { Option } from '@smui/select';
    
    // import types and constants
    import { FLEX_DIRECTION_OPTIONS, FLEX_WRAP_OPTIONS, FLEX_JUSTIFY_CONTENT_OPTIONS, PaperSize } from '../../common/worksheet/WorksheetPageConstants';

    import { 
        ThreeNumbersQuestionFormat, THREE_NUMBERS_QUESTION_FORMAT, 
        ThreeNumbersWorksheetSize, THREE_NUMBERS_WORKSHEET_SIZE
    } from "../ThreeNumbersQuestionConstants";

    import { AppConstants } from '$lib/constants/AppConstants';

    // import stores   
    import { 
        questionConfigStore,
        horizontalMethodStyleConfigStore,
        columnMethodStyleConfigStore,
        worksheetConfigStore,
        worksheetContainerStyleConfig,
        worksheetDataCountStore
    } from "../stores";

    import { getWorksheetMsg } from '$lib/components/common/worksheet';

    let selectedWorksheetSize = ThreeNumbersWorksheetSize.A4;

    let totalPages: number = 0;
    let worksheetMsg: string = '';

    $: {
        console.log(`selectedWorksheetSize is ${selectedWorksheetSize}`);
        worksheetConfigStore.worksheetSize = selectedWorksheetSize;

        if(selectedWorksheetSize === ThreeNumbersWorksheetSize.A4) {
            console.log("set stores with A4 default config");
            questionConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);
            horizontalMethodStyleConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig);
            columnMethodStyleConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);
            worksheetConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);
            worksheetContainerStyleConfig.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);
        } else {
            console.log("set stores with A4_LANDSCAPE default config");
            questionConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.questionConfig);
            horizontalMethodStyleConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.horizonalMethodStyleConfig);
            columnMethodStyleConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.columnMethodStyleConfig);
            worksheetConfigStore.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetConfig);
            worksheetContainerStyleConfig.set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetCointainerStyleConfig);
        }

        totalPages = Math.ceil($worksheetDataCountStore / $worksheetConfigStore.questionsPerPage);
        worksheetMsg = getWorksheetMsg($worksheetDataCountStore, totalPages);
    }

    let basicSettingsOpen:boolean = true;
    let layoutSettingsOpen:boolean = false;

    let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div style="margin-left:0.5em" class="nonPrintable">

    <div style="margin-left:0.5em">
        <details class="mdc-typography--subtitle1" style="padding-top:0.5em" bind:open={basicSettingsOpen}>
            <summary>Basic Settings</summary>

            <Set chips={THREE_NUMBERS_WORKSHEET_SIZE} let:chip choice bind:selected={selectedWorksheetSize}>
                <Chip {chip}>
                    <ChipText>{chip}</ChipText>
                </Chip>
            </Set>

            <Textfield bind:value={$worksheetConfigStore.questionsPerPage} label="Questions per page" type="number" />
            
            <!-- <Select bind:value={$questionConfigStore.questionFormat} label="Question format">
                <Option value="" />
                {#each THREE_NUMBERS_QUESTION_FORMAT as choice}
                    <Option value={choice}>{choice}</Option>
                {/each}
            </Select> -->

            <Textfield bind:value={$questionConfigStore.questionGridColumns} label="Question Grid Columns" type="number" />
            
            <FormField>
                <Switch bind:checked={$questionConfigStore.roughPaperMode} />
                <span slot="label">Rough Paper Mode</span>
            </FormField>

            <FormField>
                <Switch bind:checked={$questionConfigStore.showAnswers} />
                <span slot="label">Show answers</span>
            </FormField>
        </details>
    
        <details class="mdc-typography--subtitle1" style="padding-top:0.5em" bind:open={layoutSettingsOpen}>
            <summary>Page Layout Settings</summary>

            <div>
                <Textfield bind:value={$worksheetContainerStyleConfig.pagePadding} label="Page padding" />
                <Textfield bind:value={$worksheetContainerStyleConfig.contentContainerHeight} label="Page container height" />

                <Select bind:value={$worksheetContainerStyleConfig.flexDirection} label="Flex direction">
                    <Option value="" />
                    {#each FLEX_DIRECTION_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>
                
                <Select bind:value={$worksheetContainerStyleConfig.flexWrap} label="Flex wrap">
                    <Option value="" />
                    {#each FLEX_WRAP_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>

                <Select bind:value={$worksheetContainerStyleConfig.flexJustifyContent} label="Flex justify content">
                    <Option value="" />
                    {#each FLEX_JUSTIFY_CONTENT_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>                            
            </div>

            {#if $questionConfigStore.questionFormat === ThreeNumbersQuestionFormat.HORIZONTAL_METHOD}
                <div>
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.fontSize} label="QuestionFontSize" />
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.numberBoxWidth} label="Number box width" />
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.numberBoxHeight} label="Number box height" />
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.numberBoxMargin} label="Question number box margin" />
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.operatorBoxMargin} label="Question operation box margin" />
                    <Textfield bind:value={$horizontalMethodStyleConfigStore.questionContainerMargin} label="Question container margin" />
                </div>
            {:else if $questionConfigStore.questionFormat === ThreeNumbersQuestionFormat.COLUMN_METHOD}
                <div>                    
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionIdFontSize} label="Question ID font size" />
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionIdWidth} label="Question ID width" />
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionFontSize} label="Question font size" />
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionContainerMargin} label="Question container margin" />
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionContainerPadding} label="Question container padding" />
                    <Textfield bind:value={$columnMethodStyleConfigStore.questionRowNumberWidth} label="Question row number width" />
                    <FormField>
                        <Switch bind:checked={$columnMethodStyleConfigStore.showQuestionId} />
                        <span slot="label">Show question ID</span>
                    </FormField>
                </div>
            {/if}
        </details>

        <p class="mdc-typography--body2">{worksheetMsg}</p>
    </div>
</div>


<style>
    
</style>