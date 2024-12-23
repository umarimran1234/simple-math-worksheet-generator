import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

import { worksheetConfigStore } from './QuestionWorksheetConfigStores';

function createWorksheetDataStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (worksheetData) => set(worksheetData),
        update: (worksheetData) => update(worksheetData),
        reset: () => set([])
    };
}

export const worksheetDataStore = createWorksheetDataStore();

export const worksheetDataJsonStore = derived(
    worksheetDataStore,
    $worksheetDataStore => JSON.stringify($worksheetDataStore, null, 2)
);

export const worksheetDataCountStore = derived(
    worksheetDataStore,
    $worksheetDataStore =>
        ($worksheetDataStore && $worksheetDataStore[0] && $worksheetDataStore[0].questions)
            ? $worksheetDataStore[0].questions.length
            : 0
);

export const worksheetDataWithPageSplitStore = derived(
    [worksheetDataStore, worksheetConfigStore],
    ([$worksheetDataStore, $worksheetConfigStore]) => {

        let questionsArr = $worksheetDataStore.flatMap(worksheet => worksheet.questions);

        let questionsPerPageVal = $worksheetConfigStore.questionsPerPage ? $worksheetConfigStore.questionsPerPage : 8;

        return [...Array(Math.ceil(questionsArr.length / questionsPerPageVal))].map(_ => questionsArr.splice(0, questionsPerPageVal));

    }
);