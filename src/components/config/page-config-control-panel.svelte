<script lang='ts'>    
    // import controls
    import QuestionsPerPageControls from "$components/config/questions-per-page-controls.svelte";
    import PageSizeControls from "$components/config/page-size-controls.svelte";
    import TwoNumbersQuestionStyleConfigControls from '$components/config/two-numbers-question-style-config-controls.svelte';
    import PageSizeResetControls from "$components/config/page-size-reset-controls.svelte";

    import PageConfigPaddingHeightControls from "$components/config/page-config-padding-height-controls.svelte"; 
    import PageConfigFlexControls from "$components/config/page-config-flex-controls.svelte";
</script>

<div class="page-config-control-panel">
    <div class="pagesize-and-questionsperpage-controls-content">
        <PageSizeResetControls />

        <!-- Question per page update questionsPerPageStore -->
        <QuestionsPerPageControls />

        <!-- Page config padding and container height settings update pageConfigStore -->
        <PageConfigPaddingHeightControls />

        <!-- Page Size Config update pageSizeStore -->
        <PageSizeControls />
    </div>

    <!-- Page Config flex settings update pageConfigStore -->
    <PageConfigFlexControls />

    <!-- Two Numbers Question Style Config update twoNumbersQuestionStyleStore-->
    <TwoNumbersQuestionStyleConfigControls />
</div>

<style>
    .page-config-control-panel {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        gap: 15px;
    }

    .pagesize-and-questionsperpage-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        gap: 15px;
    }

    
</style>