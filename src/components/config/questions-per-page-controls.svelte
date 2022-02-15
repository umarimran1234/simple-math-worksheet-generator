<script lang='ts'>
    import { NumberInput } from "carbon-components-svelte";

    // import stores
    import { questionsPerPageStore } from '$stores/questions-per-page-stores';
</script>

<NumberInput label="Questions per page" placeholder=""
    min={1}  
    bind:value={$questionsPerPageStore} 
/>
