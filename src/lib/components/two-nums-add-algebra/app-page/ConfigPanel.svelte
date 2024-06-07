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
        TwoNumsAddAlgebraQuestionFormat, TWO_NUMS_ADD_ALGEBRA_QUESTION_FORMAT, 
        TwoNumsAddAlgebraWorksheetSize, TWO_NUMS_ADD_ALGEBRA_WORKSHEET_SIZE
    } from "../TwoNumsAddAlgebraQuestionConstants";

    import { AppConstants } from '$lib/constants/AppConstants';

    // import stores   
    import { 
        questionConfigStore,
        columnMethodStyleConfigStore,
        worksheetConfigStore,
        worksheetContainerStyleConfig,
        worksheetDataCountStore
    } from "../stores";

    import { getWorksheetMsg } from '$lib/components/common/worksheet';

    let selectedWorksheetSize = TwoNumsAddAlgebraWorksheetSize.A4;

    let totalPages: number = 0;
    let worksheetMsg: string = '';

    $: {
        console.log(`selectedWorksheetSize is ${selectedWorksheetSize}`);
        worksheetConfigStore.worksheetSize = selectedWorksheetSize;

        if(selectedWorksheetSize === TwoNumsAddAlgebraWorksheetSize.A4) {
            console.log("set stores with A4 default config");
            questionConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);
            columnMethodStyleConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);
            worksheetConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);
            worksheetContainerStyleConfig.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);
        } else {
            console.log("set stores with A4_LANDSCAPE default config");
            questionConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.questionConfig);
            columnMethodStyleConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.columnMethodStyleConfig);
            worksheetConfigStore.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetConfig);
            worksheetContainerStyleConfig.set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetCointainerStyleConfig);
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

            <Set chips={TWO_NUMS_ADD_ALGEBRA_WORKSHEET_SIZE} let:chip choice bind:selected={selectedWorksheetSize}>
                <Chip {chip}>
                    <ChipText>{chip}</ChipText>
                </Chip>
            </Set>

            <Textfield bind:value={$worksheetConfigStore.questionsPerPage} label="Questions per page" type="number" />
            
            <Select bind:value={$questionConfigStore.questionFormat} label="Question format">
                <Option value="" />
                {#each TWO_NUMS_ADD_ALGEBRA_QUESTION_FORMAT as choice}
                    <Option value={choice}>{choice}</Option>
                {/each}
            </Select>

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
            
            {#if $questionConfigStore.questionFormat === TwoNumsAddAlgebraQuestionFormat.COLUMN_METHOD}
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