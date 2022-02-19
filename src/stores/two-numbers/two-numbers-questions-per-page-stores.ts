import { writable } from 'svelte/store';
import { AppConstants } from '$utils/app-constants';


function createQuestionsPerPageStore() {
    const { subscribe, set } = writable<number>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionsPerPage);

    return {
        subscribe,
        set: (twoNumbersQuestionsPerPage: number) => set(twoNumbersQuestionsPerPage)
    };
}

export const twoNumbersQuestionsPerPageStore = createQuestionsPerPageStore();