import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

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