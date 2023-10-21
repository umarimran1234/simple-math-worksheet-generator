import { writable } from 'svelte/store';

import { AppConstants } from '../../../constants';
import type { FunAlgebraQuestionGeneratorConfig } from '../FunAlgebraConstants';

function createQuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<FunAlgebraQuestionGeneratorConfig>(AppConstants.DEFAULT_FUN_ALGEBRA_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: FunAlgebraQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_FUN_ALGEBRA_QUESTION_GENERATOR_CONFIG)
    };
}

/**
 * questionGeneratorConfigStore
 * - stores for Fun Algebra Question generator config
 */
export const questionGeneratorConfigStore = createQuestionGeneratorConfigStore();