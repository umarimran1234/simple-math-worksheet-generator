<script>
    // import carbon components
    import { Button } from "carbon-components-svelte";

    // import controls
    import PageConfigControls from "$components/config/page-config-controls.svelte";
    import QuestionsPerPageControls from "$components/config/questions-per-page-controls.svelte";
    import PageSizeControls from "$components/config/page-size-controls.svelte";
    import TwoNumbersQuestionStyleConfigControls from '$components/config/two-numbers-question-style-config-controls.svelte';

    // import utils
    import { AppConstants } from "$utils/app-constants";

    // import stores
    import { pageConfigStore } from "$stores/page-config-stores";
    import { pageSizeStore } from "$stores/page-size-stores";
    import { twoNumbersQuestionStyleConfigStore } from "$stores/two-numbers-question-style-stores";
    import { questionsPerPageStore } from "$stores/questions-per-page-stores";

</script>

<div class="pagesize-and-questionsperpage-controls-content">
    <!-- Question per page update questionsPerPageStore -->
    <QuestionsPerPageControls />

    <!-- Page Size Config update pageSizeStore -->
    <PageSizeControls />

    <Button size="small" on:click={(e) => { 
        e.preventDefault(); 
        $pageSizeStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageSize;
        $questionsPerPageStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.questionsPerPage;
        $pageConfigStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageConfig;
        $twoNumbersQuestionStyleConfigStore =  AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.twoNumbersQuestionStyleConfig; }} >
        A4 default config
    </Button>
    
    <Button size="small" on:click={(e) => { 
        e.preventDefault(); 
        $pageSizeStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize;
        $questionsPerPageStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.questionsPerPage;
        $pageConfigStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig;
        $twoNumbersQuestionStyleConfigStore =  AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig; }} >
        A4 Landscape default config
    </Button>
</div>

<!-- Page Config update pageConfigStore -->
<PageConfigControls />

<!-- Two Numbers Question Style Config update twoNumbersQuestionStyleStore-->
<TwoNumbersQuestionStyleConfigControls />


<style>
    .pagesize-and-questionsperpage-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>