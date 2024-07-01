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
        ClockWorksheetSize, CLOCK_WORKSHEET_SIZE,
        ClockQuestionType
    } from '../ClockConstants';


    import { AppConstants } from '$lib/constants/AppConstants';

    import {
        questionConfigStore,
        worksheetConfigStore,
        worksheetContainerStyleConfigStore,
        
        worksheetDataCountStore
    } from '../stores';

    import { getWorksheetMsg } from '$lib/components/common/worksheet';
	

    let selectedWorksheetSize = ClockWorksheetSize.A4;

    let totalPages: number = 0;
    let worksheetMsg: string = '';

    $: {
        console.log(`selectedWorksheetSize is ${selectedWorksheetSize}`);
        worksheetConfigStore.worksheetSize = selectedWorksheetSize;

        if(selectedWorksheetSize === ClockWorksheetSize.A4) {
            console.log("set stores with A4 default config");
            questionConfigStore.set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);
            worksheetConfigStore.set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);
            worksheetContainerStyleConfigStore.set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);
        }

        totalPages = Math.ceil($worksheetDataCountStore / $worksheetConfigStore.questionsPerPage);
        worksheetMsg = getWorksheetMsg($worksheetDataCountStore, totalPages);
    }

    let basicSettingsOpen:boolean = true;
    let layoutSettingsOpen:boolean = false;

    let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div style="margin-left:0.5em" class="nonPrintable">

    <div style="margin-left:0.5em">
        <details class="mdc-typography--subtitle1" style="padding-top:0.5em" bind:open={basicSettingsOpen}>
            <summary>Basic Settings</summary>

            <Textfield bind:value={$worksheetConfigStore.questionsPerPage} label="Questions per page" type="number" />

            <FormField>
                <Switch bind:checked={$questionConfigStore.showAnswerHour} />
                <span slot="label">Show Hour answer</span>
            </FormField>

            <FormField>
                <Switch bind:checked={$questionConfigStore.showAnswerMinute} />
                <span slot="label">Show Minute answer</span>
            </FormField>
            
        </details>
    
        <details class="mdc-typography--subtitle1" style="padding-top:0.5em" bind:open={layoutSettingsOpen}>
            <summary>Page Layout Settings</summary>

            <div>
                <Textfield bind:value={$worksheetContainerStyleConfigStore.pagePadding} label="Page padding" />
                <Textfield bind:value={$worksheetContainerStyleConfigStore.contentContainerHeight} label="Page container height" />

                <Select bind:value={$worksheetContainerStyleConfigStore.flexDirection} label="Flex direction">
                    <Option value="" />
                    {#each FLEX_DIRECTION_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>
                
                <Select bind:value={$worksheetContainerStyleConfigStore.flexWrap} label="Flex wrap">
                    <Option value="" />
                    {#each FLEX_WRAP_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>

                <Select bind:value={$worksheetContainerStyleConfigStore.flexJustifyContent} label="Flex justify content">
                    <Option value="" />
                    {#each FLEX_JUSTIFY_CONTENT_OPTIONS as choice}
                        <Option value={choice}>{choice}</Option>
                    {/each}                                
                </Select>                            
            </div>

        </details>

        <p class="mdc-typography--body2">{worksheetMsg}</p>
    </div>
</div>


<style>
    
</style>