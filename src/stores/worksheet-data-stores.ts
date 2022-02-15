import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

function createWorksheetData() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (worksheetData) => set(worksheetData),
        update: (worksheetData) => update(worksheetData),
        reset: () => set([])
    };
}

export const worksheetDataStore = createWorksheetData();

export const worksheetDataJsonStore = derived(
    worksheetDataStore,
    $worksheetDataStore => JSON.stringify($worksheetDataStore, null, 2)
);

export const worksheetDataCountStore = derived(
    worksheetDataStore,
    $worksheetDataStore => ($worksheetDataStore && $worksheetDataStore[0] && $worksheetDataStore[0].questions) ? $worksheetDataStore[0].questions.length : 0
);