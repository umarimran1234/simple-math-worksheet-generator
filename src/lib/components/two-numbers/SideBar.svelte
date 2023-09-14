<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // import contants
    import { MATH_OPERATORS } from '$lib/constants/MathsConstants';

    // import stores
    import { twoNumbersQuestionGeneratorConfigStore } from '$lib/stores/two-numbers';    

</script>

<div class="columns margins ">
    <div style="margin-left:0.5em">
        <Textfield bind:value={$twoNumbersQuestionGeneratorConfigStore.firstNumRange} label="1st Number range" />    
    </div>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>

    <div style="margin-left:0.5em">
        <Textfield bind:value={$twoNumbersQuestionGeneratorConfigStore.secondNumRange} label="2nd Number range" />
    </div>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.secondNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>

    <div style="margin-left:0.5em">
        <Textfield bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMin} label="Result min value" type="number" />
    </div>
    <div style="margin-left:0.5em">
        <Textfield bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMax} label="Result max value" type="number" />
    </div>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowNegative} />
        <span slot="label">Allow negative</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowRemainder} />
        <span slot="label">Allow remainder</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.randomOrder} />
        <span slot="label">Random Order</span>
    </FormField>

    <Set chips={MATH_OPERATORS} let:chip filter bind:selected={$twoNumbersQuestionGeneratorConfigStore.questionOperator}>
        <Chip {chip} touch>
            <ChipText>{@html chip}</ChipText>
        </Chip>
    </Set>
</div>


<style>
</style>