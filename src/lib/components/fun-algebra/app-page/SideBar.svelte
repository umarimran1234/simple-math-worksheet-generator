<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    import { FUN_ALGEBRA_QUESTION_TYPE } from '../FunAlgebraConstants';

    import { questionGeneratorConfigStore } from '../stores';	
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.ratioBToA} label="B = (n) A" />

    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.ratioCToB} label="C = (m) B" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.resultMax} label="Result max value (n x m)" type="number" />
</div>
    
<div>
    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.randomOrder} />
        <span slot="label">Random Order</span>
    </FormField>
 </div>

 <Set chips={FUN_ALGEBRA_QUESTION_TYPE} let:chip filter bind:selected={$questionGeneratorConfigStore.questionTypes}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>

<style>
</style>