<script lang="ts">

    import { onMount } from 'svelte';
    
    // import stores
    import { numberSequenceWorksheetDataStore, numberSequenceQuestionGeneratorConfigStore } from '$stores/number-sequence';

    import { pageConfigStore } from '$stores/page-config-stores';
    import { pageSizeStore } from '$stores/page-size-stores';

    // import components
    import SequenceQuestionContainer from '$components/number-sequence/sequence-question-container.svelte';
    import SequenceQuestionGridContainer from '$components/number-sequence/sequence-question-grid-container.svelte';

    // import utils
    import { LetterSequenceUtils } from '$utils/letter-sequence-utils';

    let cellMinWidth = '107px';
    let fontSize = '50px';

    // let cellsPerRow = 10;

    // const chunk = (arr, size) =>
    //     Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    //     arr.slice(i * size, i * size + size)
    // );

    // let questionChunks;
    

    // initial generate the number sequence worksheet using default values
    onMount(() => {
        numberSequenceWorksheetDataStore.update((worksheetData) => LetterSequenceUtils.generateNumberRangeQuestion(
            $numberSequenceQuestionGeneratorConfigStore.start, 
            $numberSequenceQuestionGeneratorConfigStore.end, 
            $numberSequenceQuestionGeneratorConfigStore.noOfEmptyBoxes,
            $numberSequenceQuestionGeneratorConfigStore.reverse));
    });

</script>

<SequenceQuestionGridContainer 
    questions={$numberSequenceWorksheetDataStore} 
    numOfCols={$numberSequenceQuestionGeneratorConfigStore.numOfCols} 
    cellMinWidth={$numberSequenceQuestionGeneratorConfigStore.cellMinWidth} 
    fontSize={$numberSequenceQuestionGeneratorConfigStore.fontSize} 
    pageSize={$pageSizeStore} 
    pageConfig={$pageConfigStore}
/>