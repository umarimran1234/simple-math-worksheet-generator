<script lang="ts">
    // import components
    import TagSelect from "$components/common/tag-select.svelte";

    // import stores
    import { pageConfigStore } from '$stores/page-config-stores';

    // import utils
    import { AppConstants } from '$utils/app-constants';
</script>

<div class="page-config-flex-section">
    <TagSelect labelText="Flex direction" options={AppConstants.FLEX_DIRECTION_OPTIONS} bind:selected={$pageConfigStore.flexDirection}/>
    <TagSelect labelText="Flex wrap" options={AppConstants.FLEX_WRAP_OPTIONS} bind:selected={$pageConfigStore.flexWrap}/>
    <TagSelect labelText="Flex Justify Content" options={AppConstants.FLEX_JUSTIFY_CONTENT_OPTIONS} bind:selected={$pageConfigStore.flexJustifyContent}/>
</div>


<style>
    .page-config-flex-section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>