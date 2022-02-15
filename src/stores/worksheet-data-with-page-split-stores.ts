import { derived } from 'svelte/store';
import { worksheetDataStore } from '$stores/worksheet-data-stores';
import { questionsPerPageStore } from '$stores/questions-per-page-stores';

export const worksheetDataWithPageSplitStore = derived(
    [worksheetDataStore, questionsPerPageStore],
    ([$worksheetDataStore, $questionsPerPageStore]) => {
        // console.log('inside worksheetDataWithPageSplitStore $worksheetDataStore', $worksheetDataStore, '$questionsPerPageStore', $questionsPerPageStore);
        let questionsArr = $worksheetDataStore.flatMap(worksheet => worksheet.questions);
        
        let questionsPerPageVal = $questionsPerPageStore ? $questionsPerPageStore : 8;
        // console.log('inside worksheetDataWithPageSplitStore $questionsPerPageStore', $questionsPerPageStore, 'questionsPerPageVal', questionsPerPageVal); 
        
        // console.log('inside worksheetDataWithPageSplitStore questionsArr', questionsArr);
        return [...Array(Math.ceil(questionsArr.length / questionsPerPageVal))].map(_ => questionsArr.splice(0, questionsPerPageVal));

    }
);