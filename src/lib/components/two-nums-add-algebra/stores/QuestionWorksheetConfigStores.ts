import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';

import type { 
    TwoNumsAddAlgebraQuestionConfig, 
    TwoNumsAddAlgebraQuestionColumnMethodStyleConfig,
    TwoNumsAddAlgebraWorksheetConfig
} from '../TwoNumsAddAlgebraQuestionConstants'

import type {
    WorksheetContainerStyleConfig
} from '$lib/components/common/worksheet';

/**
 * Supposed would like to create a store with data structure like TwoNumbersQuestionWorksheetConfig
 * However svelte stores by default does not support nested structure
 * So instead of nested structure TwoNumbersQuestionWorksheetConfig, we can separate different stores
 * e.g.
 * Original nested structure TwoNumsAddAlgebraQuestionWorksheetConfig
 * - TwoNumsAddAlgebraQuestionWorksheetConfig
 *      - questionConfig: TwoNumbersQuestionConfig,
 *      - columnMethodStyleConfig: TwoNumberQuestionColumnMethodStyleConfig
 *      - worksheetConfig: WorksheetConfig,
 *      
 * 
 * Separate into 5 stores for each structure
 * - TwoNumsAddAlgebraQuestionConfig
 *      - showAnswers: boolean
 *      - questionFormat: TwoNumbersQuestionFormat
 *  
 * - TwoNumsAddAlgebraQuestionColumnMethodStyleConfig
 *      - showQuestionId: boolean,
 *      - questionIdFontSize: string,
 *      - questionIdWidth: string,
 *      - questionFontSize: string,
 *      - questionContainerMargin: string,
 *      - questionContainerPadding: string,
 *      - questionRowNumberWidth: string
 * 
 * - TwoNumsAddAlgebraWorksheetConfig
 *      - worksheetSize: TwoNumbersWorksheetSize,
 *      - questionsPerPage: number
 * 
 * - WorksheetContainerStyleConfig
 *      - contentContainerHeight: string,
 *      - pagePadding: string,
 *      - flexDirection: FlexDirectionOptions,
 *      - flexWrap: FlexWrapOptions,
 *      - flexJustifyContent: FlexJustifyContentOptions,
 */

// function createTwoNumbersQuestionConfigStore() {
//     const { subscribe, set, update } = writable<TwoNumbersQuestionConfig>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

//     return {
//         subscribe,
//         set: (config: TwoNumbersQuestionConfig) => set(config)
//     };
// }
// export const twoNumbersQuestionConfigStore = createTwoNumbersQuestionConfigStore();

function createQuestionConfigStore() {
    const { subscribe, set, update } = writable<TwoNumsAddAlgebraQuestionConfig>(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

    return {
        subscribe,
        set: (config: TwoNumsAddAlgebraQuestionConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMS_ADD_ALGEBRA_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig)
    };
}



function createColumnMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<TwoNumsAddAlgebraQuestionColumnMethodStyleConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);

    return {
        subscribe,
        set: (config: TwoNumsAddAlgebraQuestionColumnMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig)
    };
}

function createWorksheetConfigStore() {
    const { subscribe, set, update } = writable<TwoNumsAddAlgebraWorksheetConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);

    return {
        subscribe,
        set: (config: TwoNumsAddAlgebraWorksheetConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig)
    };
}

function createWorksheetContainerStyleConfigStore() {
    const { subscribe, set, update } = writable<WorksheetContainerStyleConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);

    return {
        subscribe,
        set: (config: WorksheetContainerStyleConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig)
    };
}


export const questionConfigStore = createQuestionConfigStore();
export const columnMethodStyleConfigStore = createColumnMethodStyleConfigStore();
export const worksheetConfigStore = createWorksheetConfigStore();
export const worksheetContainerStyleConfig = createWorksheetContainerStyleConfigStore();
