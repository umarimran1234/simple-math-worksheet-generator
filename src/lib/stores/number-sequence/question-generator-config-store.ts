import { writable } from 'svelte/store';
import { AppConstants } from '$utils/app-constants';
import type { NumberSequenceQuestionGeneratorConfig } from '$utils/app-constants';

function createNumberSequenceQuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<NumberSequenceQuestionGeneratorConfig>(AppConstants.DEFAULT_NUM_SEQUENCE_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: NumberSequenceQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_NUM_SEQUENCE_QUESTION_GENERATOR_CONFIG)
    };
}

export const numberSequenceQuestionGeneratorConfigStore = createNumberSequenceQuestionGeneratorConfigStore();