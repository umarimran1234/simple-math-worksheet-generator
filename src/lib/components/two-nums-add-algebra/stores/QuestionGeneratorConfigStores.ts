import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';
import type { TwoNumsAddAlgebraQuestionGeneratorConfig } from '../TwoNumsAddAlgebraQuestionConstants';

function createGeneratorConfigStore() {
    const { subscribe, set } = writable<TwoNumsAddAlgebraQuestionGeneratorConfig>(AppConstants.DEFAULT_TWO_NUMS_ADD_ALGEBRA_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: TwoNumsAddAlgebraQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_TWO_NUMS_ADD_ALGEBRA_QUESTION_GENERATOR_CONFIG)
    };
}

/**
 * twoNumbersQuestionGeneratorConfigStore
 * - stores for Two Number Question generator config
 */
export const questionGeneratorConfigStore = createGeneratorConfigStore();