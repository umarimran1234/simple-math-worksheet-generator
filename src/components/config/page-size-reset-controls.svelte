<script lang='ts'>
    // import carbon components
    import { ButtonSet, Button } from "carbon-components-svelte";

    // import utils
    import { AppConstants } from "$utils/app-constants";

    // import stores
    import { pageConfigStore } from "$stores/page-config-stores";
    import { pageSizeStore } from "$stores/page-size-stores";
    import { twoNumbersQuestionStyleConfigStore } from "$stores/two-numbers/two-numbers-question-style-stores";
    import { twoNumbersQuestionsPerPageStore } from "$stores/two-numbers/two-numbers-questions-per-page-stores";
</script>


<ButtonSet stacked>
    <Button size="small" on:click={(e) => { 
        e.preventDefault(); 
        $pageSizeStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageSize;
        $twoNumbersQuestionsPerPageStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.twoNumbersQuestionsPerPage;
        $pageConfigStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageConfig;
        $twoNumbersQuestionStyleConfigStore =  AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.twoNumbersQuestionStyleConfig; }} >
        A4 config
    </Button>
    
    <Button size="small" on:click={(e) => { 
        e.preventDefault(); 
        $pageSizeStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize;
        $twoNumbersQuestionsPerPageStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionsPerPage;
        $pageConfigStore = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig;
        $twoNumbersQuestionStyleConfigStore =  AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig; }} >
        A4 Landscape config
    </Button>
</ButtonSet>
