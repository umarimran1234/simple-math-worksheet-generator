import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';
import type { TwoNumbersQuestionGeneratorConfig } from '$lib/constants/TwoNumbersQuestionConstants';

function createGeneratorConfigStore() {
    const { subscribe, set } = writable<TwoNumbersQuestionGeneratorConfig>(AppConstants.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: TwoNumbersQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG)
    };
}

/**
 * twoNumbersQuestionGeneratorConfigStore
 * - stores for Two Number Question generator config
 */
export const questionGeneratorConfigStore = createGeneratorConfigStore();