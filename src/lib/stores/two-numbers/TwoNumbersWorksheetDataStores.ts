import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

import { twoNumberWorksheetConfigStore } from "./TwoNumbersQuestionWorksheetConfigStores";

function createTwoNumbersWorksheetDataStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (worksheetData) => set(worksheetData),
        update: (worksheetData) => update(worksheetData),
        reset: () => set([])
    };
}

export const twoNumbersWorksheetDataStore = createTwoNumbersWorksheetDataStore();

export const twoNumbersWorksheetDataJsonStore = derived(
    twoNumbersWorksheetDataStore,
    $twoNumbersWorksheetDataStore => JSON.stringify($twoNumbersWorksheetDataStore, null, 2)
);

export const twoNumbersWorksheetDataCountStore = derived(
    twoNumbersWorksheetDataStore,
    $twoNumbersWorksheetDataStore =>
        ($twoNumbersWorksheetDataStore && $twoNumbersWorksheetDataStore[0] && $twoNumbersWorksheetDataStore[0].questions)
            ? $twoNumbersWorksheetDataStore[0].questions.length
            : 0
);

export const twoNumbersWorksheetDataWithPageSplitStore = derived(
    [twoNumbersWorksheetDataStore, twoNumberWorksheetConfigStore],
    ([$twoNumbersWorksheetDataStore, $twoNumberWorksheetConfigStore]) => {

        let questionsArr = $twoNumbersWorksheetDataStore.flatMap(worksheet => worksheet.questions);

        let questionsPerPageVal = $twoNumberWorksheetConfigStore.questionsPerPage ? $twoNumberWorksheetConfigStore.questionsPerPage : 8;

        return [...Array(Math.ceil(questionsArr.length / questionsPerPageVal))].map(_ => questionsArr.splice(0, questionsPerPageVal));

    }
);