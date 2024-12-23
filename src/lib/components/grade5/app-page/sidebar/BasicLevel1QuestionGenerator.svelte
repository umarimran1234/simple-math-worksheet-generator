<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl1QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.ratioBToA} label="n (e.g. B = (n) A)" />

    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.ratioCToB} label="m (e.g.C = (m) B)" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.resultMax} label="Result max value (n x m)" type="number" />
</div>


<style>

</style>