<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    import BasicLevel1QuestionGenerator from './sidebar/BasicLevel1QuestionGenerator.svelte';
    import BasicLevel2QuestionGenerator from './sidebar/BasicLevel2QuestionGenerator.svelte';
    import BasicLevel3QuestionGenerator from './sidebar/BasicLevel3QuestionGenerator.svelte';

    import { FUN_ALGEBRA_QUESTION_TYPE, FunAlgebraQuestionType } from '../FunAlgebraConstants';

    import { 
        randomQuestionConfigStore, 
        questionTypestToGenerateConfigStore 
    } from '../stores';

    let basicLvl1Open: boolean = false;
    let basicLvl2Open: boolean = false;
    let basicLvl3Open: boolean = false;

    let removeFromQuestionTypeArr = (questionTypeToRemove: string) => {
        $questionTypestToGenerateConfigStore = $questionTypestToGenerateConfigStore.filter(t => t !== questionTypeToRemove);
    }
    
</script>

<Set chips={FUN_ALGEBRA_QUESTION_TYPE} let:chip filter bind:selected={$questionTypestToGenerateConfigStore}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>

{#if $questionTypestToGenerateConfigStore.includes(FunAlgebraQuestionType.BASIC_LVL_1)}
    <details class="mdc-typography--subtitle1" style="margin-left: 0.5em; padding-top:0.5em" bind:open={basicLvl1Open}>
                <summary>{FunAlgebraQuestionType.BASIC_LVL_1}</summary>
        <BasicLevel1QuestionGenerator />
    </details>
{/if}

{#if $questionTypestToGenerateConfigStore.includes(FunAlgebraQuestionType.BASIC_LVL_2)}
    <details class="mdc-typography--subtitle1" style="margin-left: 0.5em; padding-top:0.5em" bind:open={basicLvl2Open}>
                <summary>{FunAlgebraQuestionType.BASIC_LVL_2}</summary>
        <BasicLevel2QuestionGenerator />
    </details>
{/if}

{#if $questionTypestToGenerateConfigStore.includes(FunAlgebraQuestionType.BASIC_LVL_3)}
    <details class="mdc-typography--subtitle1" style="margin-left: 0.5em; padding-top:0.5em" bind:open={basicLvl3Open}>
                <summary>{FunAlgebraQuestionType.BASIC_LVL_3}</summary>
        <BasicLevel3QuestionGenerator />
    </details>
{/if}
    
<div>
    <FormField>
        <Checkbox bind:checked={$randomQuestionConfigStore} />
        <span slot="label">Random Order</span>
    </FormField>
 </div>

 

<style>
</style>