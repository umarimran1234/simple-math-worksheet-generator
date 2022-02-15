<script lang='ts'>

    // import components
    import TagSelect from "$components/common/tag-select.svelte";

    // import stores
    import { pageSizeStore } from '$stores/page-size-stores';

    // import utils
    import { AppConstants } from '$utils/app-constants';

</script>

<TagSelect labelText="Page Size" options={AppConstants.WORKSHEET_SIZE_OPTIONS} bind:selected={$pageSizeStore}/>
