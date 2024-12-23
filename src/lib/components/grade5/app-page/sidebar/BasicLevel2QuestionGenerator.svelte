<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl2QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numARange} label="Number A range" />

    
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numBRange} label="Number B range" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numCRange} label="Number C range" />
</div>

<style>    
</style>