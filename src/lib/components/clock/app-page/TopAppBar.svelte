<script lang="ts">
    // SMUI IconButton
    import IconButton from '@smui/icon-button';

    // SMUI Tooltip
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // import stores (generate worksheet)    
    import { 
      randomQuestionConfigStore, 
      clockQuestionGeneratorConfigStore,
      worksheetDataStore 
    } from '../stores';

    import { generateAllClockWorksheet } from '../utils/clock-worksheet-utils';

    function generateWorksheet() {
        worksheetDataStore.update((worksheetData) =>
            generateAllClockWorksheet(
              $randomQuestionConfigStore,
              $clockQuestionGeneratorConfigStore)
        )
    }

    // import stores (print)
    import { worksheetConfigStore, worksheetDataCountStore } from '../stores';

    import { triggerPrinter } from '$lib/utils/print-utils';
    function printWorksheet() {
      triggerPrinter($worksheetConfigStore.worksheetSize);
    }
</script>

<Wrapper>
  <IconButton class="material-icons" on:click="{generateWorksheet}" title="Generate worksheet">play_circle</IconButton>
  <!-- <Tooltip>Generate worksheet</Tooltip> -->
</Wrapper>

{#if $worksheetDataCountStore > 0}
  <IconButton class="material-icons" on:click="{printWorksheet}">print</IconButton>
{/if}


<style>    
</style>