<script>
    // import stores
    import { twoNumbersWorksheetDataCountStore } from '$stores/two-numbers/two-numbers-worksheet-data-stores'; 
    import { twoNumbersQuestionsPerPageStore } from '$stores/two-numbers/two-numbers-questions-per-page-stores';

    let totalPages = 0;
    $ : {
        totalPages = Math.ceil($twoNumbersWorksheetDataCountStore / $twoNumbersQuestionsPerPageStore);
    }
</script>

{#if $twoNumbersWorksheetDataCountStore > 0}
    <h5>Total {$twoNumbersWorksheetDataCountStore} questions ({totalPages} pages) are generated.</h5>
{:else}
    <h5>No questions are generated.</h5>
{/if}    

<style>

</style>