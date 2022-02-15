import { writable } from 'svelte/store';
import { AppConstants } from '$utils/app-constants';
import type { TwoNumbersQuestionGeneratorConfig } from '$utils/app-constants';

function createTwoNumbersQuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<TwoNumbersQuestionGeneratorConfig>(AppConstants.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: TwoNumbersQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG)
    };
}

export const twoNumbersQuestionGeneratorConfigStore = createTwoNumbersQuestionGeneratorConfigStore();