<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    import ClockQuestionGenerator from './sidebar/ClockQuestionGenerator.svelte';

    import { 
        randomQuestionConfigStore 
    } from '../stores';

    
</script>

<ClockQuestionGenerator />
    
<div>
    <FormField>
        <Checkbox bind:checked={$randomQuestionConfigStore} />
        <span slot="label">Random Order</span>
    </FormField>
 </div>

 

<style>
</style>