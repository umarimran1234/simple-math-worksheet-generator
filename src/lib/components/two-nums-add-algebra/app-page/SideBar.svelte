<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // import contants    
    import { TWO_NUMS_ADD_ALGEBRA_MATH_OPERATORS } from '../TwoNumsAddAlgebraQuestionConstants';

    // import stores
    import { questionGeneratorConfigStore } from '../stores';
</script>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.firstNumRange} label="1st Number range" />


    <!-- <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField> -->
 </div>


 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.secondNumRange} label="2nd Number range" />


    <!-- <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.secondNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField> -->
 </div>

 <div>
    <Textfield style="margin-left:0.5em" 
        bind:value={$questionGeneratorConfigStore.resultMin} label="Result min value" type="number" />
    
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.resultMax} label="Result max value" type="number" />
    </div>
    
<div>
    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowNegative} />
        <span slot="label">Allow negative</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowRemainder} />
        <span slot="label">Allow remainder</span>
    </FormField>

    <!-- <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.randomOrder} />
        <span slot="label">Random Order</span>
    </FormField> -->
 </div>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.numberOfQuestions} label="Max Number of questions" type="number" />
 </div>

<Set chips={TWO_NUMS_ADD_ALGEBRA_MATH_OPERATORS} let:chip filter bind:selected={$questionGeneratorConfigStore.questionOperator}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>



<style>
</style>