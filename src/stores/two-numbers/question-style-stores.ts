import { writable } from 'svelte/store';
import { AppConstants, WorkSheetSize } from '$utils/app-constants';
import type { TwoNumbersQuestionStyleConfig } from '$utils/app-constants';


function createTwoNumbersQuestionStyleConfigStore() {
    const { subscribe, set, update } = writable<TwoNumbersQuestionStyleConfig>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig);

    return {
        subscribe,
        set: (config: TwoNumbersQuestionStyleConfig) => set(config)
    };
}

export const twoNumbersQuestionStyleConfigStore = createTwoNumbersQuestionStyleConfigStore();