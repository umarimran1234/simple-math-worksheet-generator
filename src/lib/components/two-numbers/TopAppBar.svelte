<script lang="ts">

    // SMUI IconButton
    import IconButton from '@smui/icon-button';

    import { SimpleMathQuestionUtils } from '$lib/utils/simple-math-question-utils';
    import {
      twoNumbersQuestionGeneratorConfigStore,
      twoNumbersWorksheetDataStore,      
    } from '$lib/stores/two-numbers';

    function generateWorksheet() {
      twoNumbersWorksheetDataStore.update((worksheetData) => SimpleMathQuestionUtils.generateTwoNumbersQuestions(
        $twoNumbersQuestionGeneratorConfigStore));
    }

    // import stores
    import {
        twoNumberWorksheetConfigStore
    } from "$lib/stores/two-numbers";

    import { triggerPrinter } from '$lib/utils/print-utils';
    function printWorksheet() {
      triggerPrinter($twoNumberWorksheetConfigStore.worksheetSize);
    }
</script>


<IconButton class="material-icons" on:click="{generateWorksheet}">play_circle</IconButton>

<IconButton class="material-icons" on:click="{printWorksheet}">print</IconButton>


<style>
</style>