import { derived } from 'svelte/store';
import { twoNumbersWorksheetDataStore } from './worksheet-data-stores';
import { twoNumbersQuestionsPerPageStore } from './questions-per-page-stores';

export const twoNumbersWorksheetDataWithPageSplitStore = derived(
    [twoNumbersWorksheetDataStore, twoNumbersQuestionsPerPageStore],
    ([$twoNumbersWorksheetDataStore, $twoNumbersQuestionsPerPageStore]) => {

        let questionsArr = $twoNumbersWorksheetDataStore.flatMap(worksheet => worksheet.questions);
        
        let questionsPerPageVal = $twoNumbersQuestionsPerPageStore ? $twoNumbersQuestionsPerPageStore : 8;

        return [...Array(Math.ceil(questionsArr.length / questionsPerPageVal))].map(_ => questionsArr.splice(0, questionsPerPageVal));

    }
);