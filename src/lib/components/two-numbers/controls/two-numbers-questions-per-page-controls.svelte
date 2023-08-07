<script lang='ts'>
    import { NumberInput } from "carbon-components-svelte";

    // import stores
    import { twoNumbersQuestionsPerPageStore } from '$stores/two-numbers';
</script>

<NumberInput size="sm" label="Questions per page" placeholder=""
    min={1}  
    bind:value={$twoNumbersQuestionsPerPageStore} 
/>
