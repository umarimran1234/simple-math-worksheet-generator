<script>
    // import stores
    import { worksheetDataCountStore } from '$stores/worksheet-data-stores'; 
    import { questionsPerPageStore } from '$stores/questions-per-page-stores';

    let totalPages = 0;
    $ : {
        totalPages = Math.ceil($worksheetDataCountStore / $questionsPerPageStore);
    }
</script>

{#if $worksheetDataCountStore > 0}
    <h5>Total {$worksheetDataCountStore} questions ({totalPages} pages) are generated.</h5>
{:else}
    <h5>No questions are generated.</h5>
{/if}    

<style>

</style>