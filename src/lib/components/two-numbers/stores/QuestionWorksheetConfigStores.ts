import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';

import type { 
    TwoNumbersQuestionConfig, 
    TwoNumbersQuestionHorizontalMethodStyleConfig,
    TwoNumberQuestionColumnMethodStyleConfig,
    TwoNumberQuestionColumnMethodWithGridLineStyleConfig,
    TwoNumberWorksheetConfig
} from '../TwoNumbersQuestionConstants'

import type {
    WorksheetContainerStyleConfig
} from '$lib/components/common/worksheet';

/**
 * Supposed would like to create a store with data structure like TwoNumbersQuestionWorksheetConfig
 * However svelte stores by default does not support nested structure
 * So instead of nested structure TwoNumbersQuestionWorksheetConfig, we can separate different stores
 * e.g.
 * Original nested structure TwoNumbersQuestionWorksheetConfig
 * - TwoNumbersQuestionWorksheetConfig
 *      - questionConfig: TwoNumbersQuestionConfig,
*       - horizonalMethodStyleConfig: TwoNumbersQuestionHorizontalMethodStyleConfig,
 *      - columnMethodStyleConfig: TwoNumberQuestionColumnMethodStyleConfig
 *      - worksheetConfig: WorksheetConfig,
 *      
 * 
 * Separate into 5 stores for each structure
 * - TwoNumbersQuestionConfig
 *      - showAnswers: boolean
 *      - questionFormat: TwoNumbersQuestionFormat
 * 
 * - TwoNumbersQuestionHorizontalMethodStyleConfig
 *      - fontSize: string,
 *      - numberBoxWidth: string,
 *      - numberBoxHeight: string,
 *      - numberBoxMargin: string,
 *      - operatorBoxMargin: string,
 *      - questionContainerMargin: string
 * 
 * - TwoNumberQuestionColumnMethodStyleConfig
 *      - showQuestionId: boolean,
 *      - questionIdFontSize: string,
 *      - questionIdWidth: string,
 *      - questionFontSize: string,
 *      - questionContainerMargin: string,
 *      - questionContainerPadding: string,
 *      - questionRowNumberWidth: string
 * 
 * - TwoNumberWorksheetConfig
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
    const { subscribe, set, update } = writable<TwoNumbersQuestionConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

    return {
        subscribe,
        set: (config: TwoNumbersQuestionConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig)
    };
}


function createHorizontalMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<TwoNumbersQuestionHorizontalMethodStyleConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig);

    return {
        subscribe,
        set: (config: TwoNumbersQuestionHorizontalMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig)
    };
}



function createColumnMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<TwoNumberQuestionColumnMethodStyleConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);

    return {
        subscribe,
        set: (config: TwoNumberQuestionColumnMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig)
    };
}

function createColumnMethodWithGridLineStyleConfigStore() {
    const { subscribe, set, update } = writable<TwoNumberQuestionColumnMethodWithGridLineStyleConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodWithGridLineStyleConfig);

    return {
        subscribe,
        set: (config: TwoNumberQuestionColumnMethodWithGridLineStyleConfig) => set(config),
        reset: () => set(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodWithGridLineStyleConfig)
    };
}

function createWorksheetConfigStore() {
    const { subscribe, set, update } = writable<TwoNumberWorksheetConfig>(AppConstants.TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);

    return {
        subscribe,
        set: (config: TwoNumberWorksheetConfig) => set(config),
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
export const horizontalMethodStyleConfigStore = createHorizontalMethodStyleConfigStore();
export const columnMethodStyleConfigStore = createColumnMethodStyleConfigStore();
export const columnMethodWithGridLineStyleConfigStore = createColumnMethodWithGridLineStyleConfigStore();
export const worksheetConfigStore = createWorksheetConfigStore();
export const worksheetContainerStyleConfig = createWorksheetContainerStyleConfigStore();
