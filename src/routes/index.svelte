<script lang="ts">
    import { onMount } from 'svelte';
	import Page from '$components/page.svelte';
	import TwoNumbersQuestion from '$components/two-numbers-question.svelte';
    import {WorkSheetType, SimpleMathQuestionUtils} from '$utils/simple-math-question-utils';

	let questionBoxWidth = '18mm';
	let questionBoxHeight = '18mm';
	let questionFontSize = '50px';
	let numberBoxMargin = '20px 1px 5px 1px';
	let operatorBoxMargin = '20px 1px 5px 1px';

	let pageContentContainerHeight = '276mm';

	let flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
	let flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
	let flexJustifyContentOptions = [
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly'
	];

	let pageContentContainerFlexDirection = 'column';
	let pageContentContainerFlexWrap = 'wrap';
	let pageContentContainerJustifyContent = 'flex-start';

	let worksheetsTextAreaStr = '';
	let worksheets = [];

	function handleTextAreaSubmit() {
		worksheets = JSON.parse(worksheetsTextAreaStr);
	}

    let range: number = 10;
    let descOrder: boolean = true;
    let questionsPerPage: number = 20;

    onMount(async () => {
		const defaultPageJsonStr = JSON.stringify(SimpleMathQuestionUtils.generateTwoNumbersQuestionsWorksheetsJson(range, descOrder, questionsPerPage));
        worksheetsTextAreaStr = defaultPageJsonStr;
        handleTextAreaSubmit();
	});


</script>

<main>
	{#each worksheets as page}
		<Page size={page.size}>
			<div
				class="pageContentContainer"
				style="--pageContentContainerHeight:{pageContentContainerHeight}; --pageContentContainerFlexDirection:{pageContentContainerFlexDirection}; --pageContentContainerFlexWrap:{pageContentContainerFlexWrap}; --pageContentContainerJustifyContent:{pageContentContainerJustifyContent}"
			>
				{#each page.questions as question}
					{#if question.questionType === 'twoNumbers'}
						<TwoNumbersQuestion
							firstNumber={question.num1}
							secondNumber={question.num2}
							operator="{question.operator};"
							width={questionBoxWidth}
							height={questionBoxHeight}
							fontSize={questionFontSize}
							{numberBoxMargin}
							{operatorBoxMargin}
						/>
					{/if}
				{/each}
			</div>
		</Page>
	{/each}

	<div class="container">
        <div class="settingsRow">
            <label for="questionBoxWidthInput" class="label">Question Box width: {questionBoxWidth}</label>
            <input id="questionBoxWidthInput" bind:value={questionBoxWidth} />
        </div>

        <div class="settingsRow">
            <label for="questionBoxHeightInput" class="label">Question Box height: {questionBoxHeight}</label>
            <input id="questionBoxHeightInput" bind:value={questionBoxHeight} />
        </div>

        <div class="settingsRow">
            <label for="questionFontSizeInput" class="label">Question Font size: {questionFontSize}</label>
            <input id="questionFontSizeInput" bind:value={questionFontSize} />
        </div>
            
        <div class="settingsRow">
            <label for="questionNumberBoxMarginInput" class="label">Question Number box margin: {numberBoxMargin}</label>
            <input id="questionNumberBoxMarginInput" bind:value={numberBoxMargin} />
        </div>

        <div class="settingsRow">
            <label for="questionOperationBoxMarginInput" class="label">Question Operation box margin: {operatorBoxMargin}</label>
            <input id="questionOperationBoxMarginInput" bind:value={operatorBoxMargin} />
        </div>

        <div class="settingsRow">
            <label for="pageContentContainerHeightInput" class="label">Page Content flex height</label>
            <input id="pageContentContainerHeightInput" bind:value={pageContentContainerHeight} />
        </div>

        <div class="settingsRow">
            <div class="label">Page Content flex direction: {pageContentContainerFlexDirection}</div>
            {#each flexDirectionOptions as flexDirectionOption}
                <label>
                    <input
                        type="radio"
                        bind:group={pageContentContainerFlexDirection}
                        value={flexDirectionOption}
                    />
                    {flexDirectionOption}
                </label>
            {/each}
        </div>

        <div class="settingsRow">
            <div class="label">Page Content flex wrap: {pageContentContainerFlexWrap}</div>
            {#each flexWrapOptions as flexWrapOption}
                <label>
                    <input type="radio" bind:group={pageContentContainerFlexWrap} value={flexWrapOption} />
                    {flexWrapOption}
                </label>
            {/each}
        </div>

        <div class="settingsRow">
            <div class="label">Page Content flex justify content: {pageContentContainerJustifyContent}</div>
            {#each flexJustifyContentOptions as flexJustifyContentOption}
                <label>
                    <input
                        type="radio"
                        bind:group={pageContentContainerJustifyContent}
                        value={flexJustifyContentOption}
                    />
                    {flexJustifyContentOption}
                </label>
            {/each}
        </div>

        <div class="settingsRow">
            <div class="label">Questions set in json</div>
            <form on:submit|preventDefault={handleTextAreaSubmit}>
                <textarea bind:value={worksheetsTextAreaStr} class="worksheetJsonTextArea"/>

                <button type="submit">Submit</button>
            </form>
        </div>
	</div>
</main>

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
        width: 300px;
        height: 100px;
    }

    .label {
        font-size: 0.875em;
        font-weight: bold;
    }

</style>
