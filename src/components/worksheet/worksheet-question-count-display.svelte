<script>
    // import stores
    import { worksheetDataCountStore } from '$stores/worksheet-data-stores'; 
</script>

{#if $worksheetDataCountStore > 0}
    <h5>Total {$worksheetDataCountStore} questions are generated.</h5>
{:else}
    <h5>No questions are generated.</h5>
{/if}    

<style>

</style>