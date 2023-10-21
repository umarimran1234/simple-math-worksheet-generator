<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    import { questionGeneratorConfigStore } from '../stores';	
	
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.firstNumRange} label="1st Number range" />


    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>

    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.secondNumRange} label="2nd Number range" />


    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.secondNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>
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
        <Checkbox bind:checked={$questionGeneratorConfigStore.randomOrder} />
        <span slot="label">Random Order</span>
    </FormField>
 </div>

<style>
</style>