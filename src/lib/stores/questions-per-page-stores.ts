import { writable } from 'svelte/store';
import { AppConstants, WorkSheetSize } from '$utils/app-constants';


function createQuestionsPerPageStore() {
    const { subscribe, set } = writable<number>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.questionsPerPage);

    return {
        subscribe,
        set: (questionsPerPage: number) => set(questionsPerPage)
    };
}

export const questionsPerPageStore = createQuestionsPerPageStore();