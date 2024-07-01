<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // SMUI select
    import Select, { Option } from '@smui/select';

    import { clockQuestionGeneratorConfigStore } from '../../stores';

    import { CLOCK_QUESTION_TYPE, HOURS_RANGE_TYPE, MINUTES_RANGE_TYPE, DIGITAL_CLOCK_TYPE } from '../../ClockConstants';
</script>

<Set chips={CLOCK_QUESTION_TYPE} let:chip filter bind:selected={$clockQuestionGeneratorConfigStore.enableQuestionTypes}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>

<Select bind:value={$clockQuestionGeneratorConfigStore.hoursRangeType} label="Hours range">
    <Option value="" />
    {#each HOURS_RANGE_TYPE as choice}
        <Option value={choice}>{choice}</Option>
    {/each}                                
</Select>

<Select bind:value={$clockQuestionGeneratorConfigStore.minutesRangeType} label="Minutes range">
    <Option value="" />
    {#each MINUTES_RANGE_TYPE as choice}
        <Option value={choice}>{choice}</Option>
    {/each}                                
</Select>



<Select bind:value={$clockQuestionGeneratorConfigStore.digitalClockType} label="Digital clock type">
    <Option value="" />
    {#each DIGITAL_CLOCK_TYPE as choice}
        <Option value={choice}>{choice}</Option>
    {/each}                                
</Select>

<style>

</style>