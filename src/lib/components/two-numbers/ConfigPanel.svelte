<script lang="ts">

    // SMUI text input
    import Textfield from '@smui/textfield';
    import {default as TextFieldIcon} from '@smui/textfield/icon';
    import HelperText from '@smui/textfield/helper-text';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // SMUI switch
    import Switch from '@smui/switch';

    // SMUI select
    import Select, { Option } from '@smui/select';

    // SMUI accordion
    import Accordion, { Panel, Header as AccordionHeader, Content as AccordionContent } from '@smui-extra/accordion';

    // import types and constants
    import { FLEX_DIRECTION_OPTIONS, FLEX_WRAP_OPTIONS, FLEX_JUSTIFY_CONTENT_OPTIONS, PaperSize } from "$lib/constants/WorksheetPageConstants";

    import { 
        TwoNumbersQuestionFormat, TWO_NUMBERS_QUESTION_FORMAT, 
        TwoNumbersWorksheetSize, TWO_NUMBERS_WORKSHEET_SIZE
    } from "$lib/constants/TwoNumbersQuestionConstants";

    import { AppConstants } from '$lib/constants/AppConstants';

    // import stores   
    import { 
        twoNumbersQuestionConfigStore,
        twoNumbersQuestionHorizontalMethodStyleConfigStore,
        twoNumberQuestionColumnMethodStyleConfigStore,
        twoNumberWorksheetConfigStore,
        twoNumberWorksheetContainerStyleConfig
    } from "$lib/stores/two-numbers";

    let selectedWorksheetSize = TwoNumbersWorksheetSize.A4;

    $: {
        console.log(`selectedWorksheetSize is ${selectedWorksheetSize}`);
        twoNumberWorksheetConfigStore.worksheetSize = selectedWorksheetSize;

        if(selectedWorksheetSize === TwoNumbersWorksheetSize.A4) {
            console.log("set stores with A4 default config");
            twoNumbersQuestionConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);
            twoNumbersQuestionHorizontalMethodStyleConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig);
            twoNumberQuestionColumnMethodStyleConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);
            twoNumberWorksheetConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);
            twoNumberWorksheetContainerStyleConfig.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);
        } else {
            console.log("set stores with A4_LANDSCAPE default config");
            twoNumbersQuestionConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.questionConfig);
            twoNumbersQuestionHorizontalMethodStyleConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.horizonalMethodStyleConfig);
            twoNumberQuestionColumnMethodStyleConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.columnMethodStyleConfig);
            twoNumberWorksheetConfigStore.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetConfig);
            twoNumberWorksheetContainerStyleConfig.set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.worksheetCointainerStyleConfig);
        }
    }
</script>

<div style="margin-left:0.5em"  class="nonPrintable">
    <Set chips={TWO_NUMBERS_WORKSHEET_SIZE} let:chip choice bind:selected={selectedWorksheetSize}>
        <Chip {chip}>
            <ChipText>{chip}</ChipText>
        </Chip>
    </Set>

    <Textfield bind:value={$twoNumberWorksheetConfigStore.questionsPerPage} label="Questions per page" type="number" />
    
    <Select bind:value={$twoNumbersQuestionConfigStore.questionFormat} label="Question format">
        <Option value="" />
        {#each TWO_NUMBERS_QUESTION_FORMAT as choice}
            <Option value={choice}>{choice}</Option>
        {/each}
    </Select>

    <FormField>
        <Switch bind:checked={$twoNumbersQuestionConfigStore.showAnswers} />
        <span slot="label">Show answers</span>
    </FormField>
</div>

<div class="nonPrintable">
<Accordion>
    <Panel extend>
        <AccordionHeader>Question layout settings</AccordionHeader>
        <AccordionContent>
            <div style="margin-left:0.5em">
                <Textfield bind:value={$twoNumberWorksheetContainerStyleConfig.pagePadding} label="Page padding" />
                <Textfield bind:value={$twoNumberWorksheetContainerStyleConfig.contentContainerHeight} label="Page container height" />
            <!-- </div>

            <div style="margin-left:0.5em"> -->
                <Select bind:value={$twoNumberWorksheetContainerStyleConfig.flexDirection} label="Flex direction">
                    <Option value="" />
                    {#each FLEX_DIRECTION_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>
                
                <Select bind:value={$twoNumberWorksheetContainerStyleConfig.flexWrap} label="Flex wrap">
                    <Option value="" />
                    {#each FLEX_WRAP_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>

                <Select bind:value={$twoNumberWorksheetContainerStyleConfig.flexJustifyContent} label="Flex justify content">
                    <Option value="" />
                    {#each FLEX_JUSTIFY_CONTENT_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>                            
            </div>

            {#if $twoNumbersQuestionConfigStore.questionFormat === TwoNumbersQuestionFormat.HORIZONTAL_METHOD}
                <div style="margin-left:0.5em">
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.fontSize} label="QuestionFontSize" />
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.numberBoxWidth} label="Number box width" />
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.numberBoxHeight} label="Number box height" />
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.numberBoxMargin} label="Question number box margin" />
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.operatorBoxMargin} label="Question operation box margin" />
                    <Textfield bind:value={$twoNumbersQuestionHorizontalMethodStyleConfigStore.questionContainerMargin} label="Question container margin" />
                </div>
            {:else if $twoNumbersQuestionConfigStore.questionFormat === TwoNumbersQuestionFormat.COLUMN_METHOD}
                <div style="margin-left:0.5em">                    
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionIdFontSize} label="Question ID font size" />
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionIdWidth} label="Question ID width" />
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionFontSize} label="Question font size" />
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionContainerMargin} label="Question container margin" />
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionContainerPadding} label="Question container padding" />
                    <Textfield bind:value={$twoNumberQuestionColumnMethodStyleConfigStore.questionRowNumberWidth} label="Question row number width" />
                    <FormField>
                        <Switch bind:checked={$twoNumberQuestionColumnMethodStyleConfigStore.showQuestionId} />
                        <span slot="label">Show question ID</span>
                    </FormField>
                </div>
            {/if}
            
        </AccordionContent>
    </Panel>
</Accordion>
</div>


<style>
    
</style>