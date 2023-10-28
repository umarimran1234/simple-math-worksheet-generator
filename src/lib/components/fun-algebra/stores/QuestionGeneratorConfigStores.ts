import { writable } from 'svelte/store';

import { AppConstants } from '../../../constants';
import { 
    FunAlgebraQuestionType, 
    type FunAlgebraBasicLvl1QuestionGeneratorConfig,
    type FunAlgebraBasicLvl2QuestionGeneratorConfig,
    type FunAlgebraBasicLvl3QuestionGeneratorConfig
} from '../FunAlgebraConstants';

function createRandomQuestionConfigStore() {
    const { subscribe, set } = writable<boolean>(true);

    return {
        subscribe,
        set: (config: boolean) => set(config),
        reset: () => set(true)
    };
}

function createQuestionTypesToGenerateConfigStore() {
    const { subscribe, set } = writable<string[]>([FunAlgebraQuestionType.BASIC_LVL_1]);

    return {
        subscribe,
        set: (config: string[]) => set(config),
        reset: () => set([FunAlgebraQuestionType.BASIC_LVL_1])
    };
}

function createBasicLvl1QuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<FunAlgebraBasicLvl1QuestionGeneratorConfig>(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_1_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: FunAlgebraBasicLvl1QuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_1_QUESTION_GENERATOR_CONFIG)
    };
}

function createBasicLvl2QuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<FunAlgebraBasicLvl2QuestionGeneratorConfig>(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_2_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: FunAlgebraBasicLvl2QuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_2_QUESTION_GENERATOR_CONFIG)
    };
}

function createBasicLvl3QuestionGeneratorConfigStore() {
    const { subscribe, set } = writable<FunAlgebraBasicLvl3QuestionGeneratorConfig>(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_3_QUESTION_GENERATOR_CONFIG);

    return {
        subscribe,
        set: (config: FunAlgebraBasicLvl3QuestionGeneratorConfig) => set(config),
        reset: () => set(AppConstants.DEFAULT_FUN_ALGEBRA_BASIC_LVL_3_QUESTION_GENERATOR_CONFIG)
    };
}

export const randomQuestionConfigStore = createRandomQuestionConfigStore();
export const questionTypestToGenerateConfigStore = createQuestionTypesToGenerateConfigStore();

/**
 * basicLvl1QuestionGeneratorConfigStore
 * - stores for Fun Algebra Basic Lvl 1 Question generator config
 */
export const basicLvl1QuestionGeneratorConfigStore = createBasicLvl1QuestionGeneratorConfigStore();
export const basicLvl2QuestionGeneratorConfigStore = createBasicLvl2QuestionGeneratorConfigStore();
export const basicLvl3QuestionGeneratorConfigStore = createBasicLvl3QuestionGeneratorConfigStore();