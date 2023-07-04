<script lang="ts" >

    // stores import
    import { twoNumbersQuestionStyleConfigStore, twoNumbersWorksheetDataWithPageSplitStore } from '$stores/two-numbers';
    import { pageConfigStore } from '$stores/page-config-stores';
    import { pageSizeStore } from '$stores/page-size-stores';

    // import components
    import { TwoNumbersQuestionPagesContainer } from '$components/two-numbers';

</script>


<TwoNumbersQuestionPagesContainer
    worksheets = { $twoNumbersWorksheetDataWithPageSplitStore }
    pageSize = { $pageSizeStore }
    pageConfig = { $pageConfigStore }
    twoNumbersQuestionStyleConfig = { $twoNumbersQuestionStyleConfigStore } /> 