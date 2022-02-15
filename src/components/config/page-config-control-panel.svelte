<script>
    // import controls
    import PageConfigControls from "$components/config/page-config-controls.svelte";
    import QuestionsPerPageControls from "$components/config/questions-per-page-controls.svelte";
    import PageSizeControls from "$components/config/page-size-controls.svelte";
    import TwoNumbersQuestionStyleConfigControls from '$components/config/two-numbers-question-style-config-controls.svelte';

</script>

<div class="pagesize-and-questionsperpage-controls-content">
    <!-- Question per page update questionsPerPageStore -->
    <QuestionsPerPageControls />

    <!-- Page Size Config update pageSizeStore -->
    <PageSizeControls />
</div>

<!-- Page Config update pageConfigStore -->
<PageConfigControls />

<!-- Two Numbers Question Style Config update twoNumbersQuestionStyleStore-->
<div class="two-numbers-question-style-config-controls-content">
    <TwoNumbersQuestionStyleConfigControls />
</div>

<style>
    .pagesize-and-questionsperpage-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }

    .two-numbers-question-style-config-controls-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>