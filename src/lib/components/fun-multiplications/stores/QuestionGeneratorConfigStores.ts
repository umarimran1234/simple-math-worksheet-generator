import { writable } from 'svelte/store';

import { AppConstants } from '../../../constants';
import type { FunMultiplicationQuestionGeneratorConfig } from '../FunMultiplicationConstants';

function createQuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<FunMultiplicationQuestionGeneratorConfig>(AppConstants.DEFAULT_FUN_MULTIPLICATION_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: FunMultiplicationQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_FUN_MULTIPLICATION_QUESTION_GENERATOR_CONFIG)
    };
}

/**
 * questionGeneratorConfigStore
 * - stores for Fun Multiplication Question generator config
 */
export const questionGeneratorConfigStore = createQuestionGeneratorConfigStore();