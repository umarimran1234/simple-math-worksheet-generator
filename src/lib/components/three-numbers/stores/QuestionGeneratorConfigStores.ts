import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';
import { type ThreeNumbersQuestionGeneratorConfig } from '../ThreeNumbersQuestionConstants';

function createGeneratorConfigStore() {
    const { subscribe, set } = writable<ThreeNumbersQuestionGeneratorConfig>(AppConstants.DEFAULT_THREE_NUMBERS_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: ThreeNumbersQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_THREE_NUMBERS_QUESTION_GENERATOR_CONFIG)
    };
}

/**
 * threeNumbersQuestionGeneratorConfigStore
 * - stores for Three Number Question generator config
 */
export const questionGeneratorConfigStore = createGeneratorConfigStore();