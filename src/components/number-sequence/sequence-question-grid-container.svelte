<script lang="ts">
    import { LetterSequenceType } from '$utils/letter-sequence-utils'; 
    import { AppConstants } from '$utils/app-constants';

    import { Page } from '$components/common';

    export let questions: Array<Array<LetterSequenceType>>;

    export let fontSize: string = '25px';

    export let numOfCols: number = 10;

    export let cellMinWidth: string = '29.7mm';

    export let pageSize = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize;
	export let pageConfig = AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig;
</script>

<Page size={pageSize} 
		padding={pageConfig.pagePadding} 
		contentHeight={pageConfig.contentContainerHeight} 
		contentFlexDirection={pageConfig.flexDirection}
		contentFlexWrap={pageConfig.flexWrap}
		contentJustifyContent={pageConfig.flexJustifyContent} >

    {#if questions }
        {#each questions as question}
        <div class="sequence-question-grid-container" style="--numOfCols:{numOfCols};--cellMinWidth:{cellMinWidth};--fontSize:{fontSize}">
            {#each question as box}
                <div class="item">
                    {#if !(box.emptyBoxFlag)}
                        {@html box.letter}
                    {/if}
                </div>
            {/each}
        </div>
        {/each}
    {/if}
</Page>

<style>
    .sequence-question-grid-container {
        display: grid;
        grid-template-columns:repeat(var(--numOfCols), minmax(var(--cellMinWidth),1fr));
        /* grid-gap: 1mm; */
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        margin: 10mm;

        font-size: var(--fontSize);
    }

    .sequence-question-grid-container .item {
        padding: 2mm;
        text-align: center;
        border-top: 1px solid black;
        border-right: 1px solid black;
    }

    @media print {
        .sequence-question-grid-container {
            display: grid;
            grid-template-columns:repeat(var(--numOfCols), minmax(var(--cellMinWidth),1fr));
            /* grid-gap: 1mm; */
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            /* margin: 5mm; */

            font-size: var(--fontSize);
        }
    }
</style>

