<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // import contants    
    import { MATH_OPERATORS, MathOperators } from '$lib/constants/MathsConstants';

    // import stores
    import { questionGeneratorConfigStore } from '../stores';
</script>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.firstNumRange} label="1st Number range" />
 </div>


 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.secondNumRange} label="2nd Number range" />
 </div>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.thirdNumRange} label="3rd Number range" />
 </div>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.resultMax} label="Result max value" type="number" />
</div>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.maxNumberOfQuestions} label="Max Number of questions" type="number" />
 </div>

 <div>
    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowFirstNumBlank} />
        <span slot="label">
            Allow 1st number blank
        </span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowSecondNumBlank} />
        <span slot="label">
            Allow 2nd number blank
        </span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowThirdNumBlank} />
        <span slot="label">
            Allow 3rd number blank
        </span>
    </FormField>
 </div>

<Set chips={MATH_OPERATORS} let:chip filter bind:selected={$questionGeneratorConfigStore.questionOperator}>
    {#if (chip == MathOperators.PLUS || chip == MathOperators.MINUS) }
        <Chip {chip} touch>
            <ChipText>{@html chip}</ChipText>
        </Chip>
    {/if}
</Set>



<style>
</style>