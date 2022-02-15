<script lang="ts">

    // stores import
    import { twoNumbersQuestionStyleConfigStore } from '$stores/two-numbers-question-style-stores';
    import { pageConfigStore } from '$stores/page-config-stores';
    import { pageSizeStore } from '$stores/page-size-stores';
    import { worksheetDataWithPageSplitStore } from '$stores/worksheet-data-with-page-split-stores';

    // import components
    import WorksheetsContainer from '$components/worksheet/worksheets-container.svelte';
    
</script>

<!--<main>-->
    
    <WorksheetsContainer 
        worksheets={$worksheetDataWithPageSplitStore} 
        pageSize={$pageSizeStore} 
        pageConfig={$pageConfigStore} 
        twoNumbersQuestionStyleConfig={$twoNumbersQuestionStyleConfigStore} /> 
    
	<!--<div class="container"> -->
	<!--</div>-->
<!--</main>-->

<style>
	main {
		font-family: sans-serif;
		background: rgb(204, 204, 204);
	}

	.pageContentContainer {
		display: flex;
		flex-direction: var(--pageContentContainerFlexDirection);
		flex-wrap: var(--pageContentContainerFlexWrap);
		justify-content: var(--pageContentContainerJustifyContent);
		height: var(--pageContentContainerHeight);
        align-content: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px 20px;
	}

	.container > * {
		width: 100%;
		max-width: 700px;
	}

    .settingsRow {
        margin-top: 20px;
    }

    .worksheetJsonTextArea {
        width: 100%;
        height: 200px;
    }

    .label {
        font-size: 0.875em;
        font-weight: bold;
    }

</style>
