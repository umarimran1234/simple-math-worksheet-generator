import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

function createNumberSequenceWorksheetDataStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (worksheetData) => set(worksheetData),
        update: (worksheetData) => update(worksheetData),
        reset: () => set([])
    };
}

export const numberSequenceWorksheetDataStore = createNumberSequenceWorksheetDataStore();

export const numberSequenceWorksheetDataJsonStore = derived(
    numberSequenceWorksheetDataStore,
    $numberSequenceWorksheetDataStore => JSON.stringify($numberSequenceWorksheetDataStore, null, 2)
);