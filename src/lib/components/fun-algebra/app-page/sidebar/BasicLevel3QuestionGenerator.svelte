<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl3QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numARange} label="Number A range" />

    
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numBRange} label="Number B range" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numCRange} label="Number C range" />
</div>

<style>    
</style>