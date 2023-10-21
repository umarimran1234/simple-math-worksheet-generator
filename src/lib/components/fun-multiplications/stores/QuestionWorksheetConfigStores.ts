import { writable } from 'svelte/store';

import { AppConstants } from '../../../constants';

import type { 
    FunMultiplicationQuestionConfig,
    FunMultiplicationHorizontalMethodStyleConfig,
    FunMultiplicationColumnMethodStyleConfig,
    FunMultiplicationWorksheetConfig,
} from '../FunMultiplicationConstants';


import type { 
    WorksheetContainerStyleConfig 
} from '$lib/components/common/worksheet';

/**
 * Supposed would like to create a store with data structure like TwoNumbersQuestionWorksheetConfig
 * However svelte stores by default does not support nested structure
 * So instead of nested structure TwoNumbersQuestionWorksheetConfig, we can separate different stores
 * e.g.
 * Original nested structure TwoNumbersQuestionWorksheetConfig
 * - export type FunMultiplicationQuestionWorksheetConfig = {
 *     questionConfig: FunMultiplicationQuestionConfig,
 *     horizonalMethodStyleConfig: FunMultiplicationHorizontalMethodStyleConfig,
 *     columnMethodStyleConfig: FunMultiplicationColumnMethodStyleConfig,
 *     worksheetConfig: FunMultiplicationWorksheetConfig,
 *     worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
 *   }
 * 
 * Separate into 5 stores for each structure
 * - export type FunMultiplicationQuestionConfig = {
 *     showFirstNum: boolean;
 *     showSecondNum: boolean;
 *     showAnswer: boolean
 * }
 * 
 * export type FunMultiplicationHorizontalMethodStyleConfig = {
 *     fontSize: string,
 *     numberBoxWidth: string,
 *     numberBoxHeight: string,
 *     numberBoxMargin: string,
 *     operatorBoxMargin: string,
 *     questionContainerMargin: string
 * }
 * 
 * export type FunMultiplicationColumnMethodStyleConfig = {
 *     questionIdFontSize: string,
 *     questionIdWidth: string,
 *     questionFontSize: string,
 *     questionContainerMargin: string,
 *     questionContainerPadding: string,
 *     questionRowNumberWidth: string
 * }
 * 
 * export type FunMultiplicationWorksheetConfig = {
 *     worksheetSize: FunMultiplicationWorksheetSize,
 *     questionsPerPage: number
 * } 
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
    const { subscribe, set, update } = writable<FunMultiplicationQuestionConfig>(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

    return {
        subscribe,
        set: (config: FunMultiplicationQuestionConfig) => set(config),
        reset: () => set(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig)
    };
}


function createHorizontalMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<FunMultiplicationHorizontalMethodStyleConfig>(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig);

    return {
        subscribe,
        set: (config: FunMultiplicationHorizontalMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig)
    };
}



function createColumnMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<FunMultiplicationColumnMethodStyleConfig>(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);

    return {
        subscribe,
        set: (config: FunMultiplicationColumnMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig)
    };
}

function createWorksheetConfigStore() {
    const { subscribe, set, update } = writable<FunMultiplicationWorksheetConfig>(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);

    return {
        subscribe,
        set: (config: FunMultiplicationWorksheetConfig) => set(config),
        reset: () => set(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig)
    };
}

function createWorksheetContainerStyleConfigStore() {
    const { subscribe, set, update } = writable<WorksheetContainerStyleConfig>(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);

    return {
        subscribe,
        set: (config: WorksheetContainerStyleConfig) => set(config),
        reset: () => set(AppConstants.FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig)
    };
}


export const questionConfigStore = createQuestionConfigStore();
export const horizontalMethodStyleConfigStore = createHorizontalMethodStyleConfigStore();
export const columnMethodStyleConfigStore = createColumnMethodStyleConfigStore();
export const worksheetConfigStore = createWorksheetConfigStore();
export const worksheetContainerStyleConfigStore = createWorksheetContainerStyleConfigStore();
