import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';
import {  
    ClockQuestionType,
    type ClockQuestionGeneratorConfig
} from '../ClockConstants';

function createRandomQuestionConfigStore() {
    const { subscribe, set } = writable<boolean>(true);

    return {
        subscribe,
        set: (config: boolean) => set(config),
        reset: () => set(true)
    };
}

function createQuestionTypesToGenerateConfigStore() {
    const { subscribe, set } = writable<string[]>([ClockQuestionType.DIGITAL_CLOCK_QUESTION]);

    return {
        subscribe,
        set: (config: string[]) => set(config),
        reset: () => set([ClockQuestionType.DIGITAL_CLOCK_QUESTION])
    };
}

function createClockQuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<ClockQuestionGeneratorConfig>(AppConstants.DEFAULT_CLOCK_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: ClockQuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_CLOCK_QUESTION_GENERATOR_CONFIG)
    };
}


export const randomQuestionConfigStore = createRandomQuestionConfigStore();
export const questionTypestToGenerateConfigStore = createQuestionTypesToGenerateConfigStore();

/**
 * clockQuestionGeneratorConfigStore
 * - stores for Clock Question generator config
 */
export const clockQuestionGeneratorConfigStore = createClockQuestionGeneratorConfigStore();