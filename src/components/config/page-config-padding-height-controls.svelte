<script lang="ts">

    // import carbon components
    import { TextInput } from "carbon-components-svelte";

    // import stores
    import { pageConfigStore } from '$stores/page-config-stores';
</script>

<div class="page-config-height-and-padding-section">
    <TextInput labelText="Page padding" placeholder="" bind:value={$pageConfigStore.pagePadding} />
    <TextInput labelText="Page container height" placeholder="" bind:value={$pageConfigStore.contentContainerHeight} />
</div>

<style>
    .page-config-height-and-padding-section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>