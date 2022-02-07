<script lang="ts">
    import { onMount } from 'svelte';

    import {
        AppConstants, QuestionTypes, MathOperators, WorkSheetSize, 
        FlexDirectionOptions, FlexWrapOptions, FlexJustifyContentOptions
    } from '$utils/app-constants';
    
	import Page from '$components/page.svelte';
	import TwoNumbersQuestion from '$components/two-numbers-question.svelte';
    import {WorkSheetType, SimpleMathQuestionUtils} from '$utils/simple-math-question-utils';

	let questionBoxWidth = '18mm';
	let questionBoxHeight = '18mm';
	let questionFontSize = '50px';
	let numberBoxMargin = '20px 1px 5px 1px';
	let operatorBoxMargin = '20px 1px 5px 1px';
    let questionContainerMargin = '0px 0px 0px 0px';

	let pageContentContainerHeight = '276mm';

	let pageContentContainerFlexDirection = FlexDirectionOptions.COLUMN;
	let pageContentContainerFlexWrap = FlexWrapOptions.WRAP;
	let pageContentContainerJustifyContent = FlexJustifyContentOptions.FLEX_START;

    let worksheetSize = WorkSheetSize.A4;
    let questionsPerWorksheet: number = AppConstants.DEFAULT_QUESTIONS_PER_PAGE;

	let worksheetsTextAreaStr = '';
	let worksheets = [];

	function handleTextAreaSubmit() {
		worksheets = JSON.parse(worksheetsTextAreaStr);
	}

    let firstNumRange: string = '1-10';
    let firstNumReverse: boolean = true;
    let secondNumRange: string = '1-10';
    let secondNumReverse: boolean = true;
    let allowNegative: boolean = false;
    let randomOrder: boolean = false;
    let questionOperator: string = MathOperators.PLUS;

    function handleGenerateTwoNumbersWorksheetsSubmit() {
        worksheetsTextAreaStr = JSON.stringify(SimpleMathQuestionUtils.generateTwoNumbersQuestions(
            firstNumRange, firstNumReverse, secondNumRange, secondNumReverse, questionOperator,
            allowNegative, randomOrder, questionsPerWorksheet, worksheetSize), null, 2);

        handleTextAreaSubmit();
    }

    onMount(async () => {
        handleGenerateTwoNumbersWorksheetsSubmit();
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
					{#if question.questionType === QuestionTypes.TWO_NUMBERS}
						<TwoNumbersQuestion
							firstNumber={question.num1}
							secondNumber={question.num2}
							operator={question.operator}
							width={questionBoxWidth}
							height={questionBoxHeight}
							fontSize={questionFontSize}
							{numberBoxMargin}
							{operatorBoxMargin}
                            {questionContainerMargin}
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
            <label for="questionOperationBoxMarginInput" class="label">Question container margin: {questionContainerMargin}</label>
            <input id="questionOperationBoxMarginInput" bind:value={questionContainerMargin} />
        </div>

        <div class="settingsRow">
            <label for="pageContentContainerHeightInput" class="label">Page Content flex height</label>
            <input id="pageContentContainerHeightInput" bind:value={pageContentContainerHeight} />
        </div>

        <div class="settingsRow">
            <div class="label">Page Content flex direction: {pageContentContainerFlexDirection}</div>
            {#each AppConstants.FLEX_DIRECTION_OPTIONS as flexDirectionOption}
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
            {#each AppConstants.FLEX_WRAP_OPTIONS as flexWrapOption}
                <label>
                    <input type="radio" bind:group={pageContentContainerFlexWrap} value={flexWrapOption} />
                    {flexWrapOption}
                </label>
            {/each}
        </div>

        <div class="settingsRow">
            <div class="label">Page Content flex justify content: {pageContentContainerJustifyContent}</div>
            {#each AppConstants.FLEX_JUSTIFY_CONTENT_OPTIONS as flexJustifyContentOption}
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
            <label for="worksheetSizeInput" class="label">Worksheet size</label>
            {#each AppConstants.WORKSHEET_SIZE_OPTIONS as worksheetSizeOption}
                <label>
                    <input
                        type="radio"
                        bind:group={worksheetSize}
                        value={worksheetSizeOption}
                    />
                    {worksheetSizeOption}
                </label>
            {/each}
        </div>

        <div class="settingsRow">
            <label for="questionsPerWorksheetInput" class="label">Questions per worksheet</label>
            <input id="questionsPerWorksheetInput" bind:value={questionsPerWorksheet} />
        </div>

        <div class="settingsRow">
            <div class="label">Generate 2 numbers worksheets</div>
            <br/>
            <form on:submit|preventDefault={handleGenerateTwoNumbersWorksheetsSubmit}>
                <label for="firstNumRangeInput" class="label">1st number range</label>
                <input id="firstNumRangeInput" bind:value={firstNumRange} />
                <br/>
                <label>
                    <input type=checkbox bind:checked={firstNumReverse}>
	                1st number range in descending order:
                </label>
                <br/>
                <label for="secondNumRangeInput" class="label">2nd number range</label>
                <input id="secondNumRangeInput" bind:value={secondNumRange} />
                <br/>
                <label>
                    <input type=checkbox bind:checked={secondNumReverse}>
	                2nd number range in descending order:
                </label>
                <br/>
                <label>
                    <input type=checkbox bind:checked={allowNegative}>
	                Allow questions with negative answer:
                </label>
                <br/>
                <label>
                    <input type=checkbox bind:checked={randomOrder}>
	                Questions in random order:
                </label>
                <br/>           
                <label for="questionOperatorInput" class="label">Operator (&plus; / &minus; / &times; / &divide;)</label>
                {#each AppConstants.OPERATOR_OPTIONS as operatorOption}
                <label>
                    <input
                        type="radio"
                        bind:group={questionOperator}
                        value={operatorOption}
                    />
                    {@html operatorOption}
                </label>
                {/each}
                <br/>
                <button type="submit">Submit</button>
            </form>
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
        width: 100%;
        height: 200px;
    }

    .label {
        font-size: 0.875em;
        font-weight: bold;
    }

</style>
