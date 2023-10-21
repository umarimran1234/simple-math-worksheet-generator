import { writable } from 'svelte/store';

import { AppConstants } from '$lib/constants/AppConstants';

import type { 
    ThreeNumbersQuestionConfig, 
    ThreeNumbersQuestionHorizontalMethodStyleConfig,
    ThreeNumberQuestionColumnMethodStyleConfig,
    ThreeNumberWorksheetConfig
} from '../ThreeNumbersQuestionConstants';

import type {
    WorksheetContainerStyleConfig
} from '$lib/components/common/worksheet';;

/**
 * Supposed would like to create a store with data structure like ThreeNumbersQuestionWorksheetConfig
 * However svelte stores by default does not support nested structure
 * So instead of nested structure ThreeNumbersQuestionWorksheetConfig, we can separate different stores
 * e.g.
 * Original nested structure ThreeNumbersQuestionWorksheetConfig
 * - ThreeNumbersQuestionWorksheetConfig
 *      - questionConfig: ThreeNumbersQuestionConfig,
*       - horizonalMethodStyleConfig: ThreeNumbersQuestionHorizontalMethodStyleConfig,
 *      - columnMethodStyleConfig: ThreeNumberQuestionColumnMethodStyleConfig
 *      - worksheetConfig: WorksheetConfig,
 *      
 * 
 * Separate into 5 stores for each structure
 * - ThreeNumbersQuestionConfig
 *      - showAnswers: boolean
 *      - questionFormat: ThreeNumbersQuestionFormat
 * 
 * - ThreeNumbersQuestionHorizontalMethodStyleConfig
 *      - fontSize: string,
 *      - numberBoxWidth: string,
 *      - numberBoxHeight: string,
 *      - numberBoxMargin: string,
 *      - operatorBoxMargin: string,
 *      - questionContainerMargin: string
 * 
 * - ThreeNumberQuestionColumnMethodStyleConfig
 *      - showQuestionId: boolean,
 *      - questionIdFontSize: string,
 *      - questionIdWidth: string,
 *      - questionFontSize: string,
 *      - questionContainerMargin: string,
 *      - questionContainerPadding: string,
 *      - questionRowNumberWidth: string
 * 
 * - ThreeNumberWorksheetConfig
 *      - worksheetSize: ThreeNumbersWorksheetSize,
 *      - questionsPerPage: number
 * 
 * - WorksheetContainerStyleConfig
 *      - contentContainerHeight: string,
 *      - pagePadding: string,
 *      - flexDirection: FlexDirectionOptions,
 *      - flexWrap: FlexWrapOptions,
 *      - flexJustifyContent: FlexJustifyContentOptions,
 */

// function createThreeNumbersQuestionConfigStore() {
//     const { subscribe, set, update } = writable<ThreeNumbersQuestionConfig>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

//     return {
//         subscribe,
//         set: (config: ThreeNumbersQuestionConfig) => set(config)
//     };
// }
// export const ThreeNumbersQuestionConfigStore = createThreeNumbersQuestionConfigStore();

function createQuestionConfigStore() {
    const { subscribe, set, update } = writable<ThreeNumbersQuestionConfig>(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

    return {
        subscribe,
        set: (config: ThreeNumbersQuestionConfig) => set(config),
        reset: () => set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig)
    };
}


function createHorizontalMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<ThreeNumbersQuestionHorizontalMethodStyleConfig>(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig);

    return {
        subscribe,
        set: (config: ThreeNumbersQuestionHorizontalMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.horizonalMethodStyleConfig)
    };
}



function createColumnMethodStyleConfigStore() {
    const { subscribe, set, update } = writable<ThreeNumberQuestionColumnMethodStyleConfig>(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig);

    return {
        subscribe,
        set: (config: ThreeNumberQuestionColumnMethodStyleConfig) => set(config),
        reset: () => set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.columnMethodStyleConfig)
    };
}

function createWorksheetConfigStore() {
    const { subscribe, set, update } = writable<ThreeNumberWorksheetConfig>(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);

    return {
        subscribe,
        set: (config: ThreeNumberWorksheetConfig) => set(config),
        reset: () => set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig)
    };
}

function createWorksheetContainerStyleConfigStore() {
    const { subscribe, set, update } = writable<WorksheetContainerStyleConfig>(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);

    return {
        subscribe,
        set: (config: WorksheetContainerStyleConfig) => set(config),
        reset: () => set(AppConstants.THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig)
    };
}


export const questionConfigStore = createQuestionConfigStore();
export const horizontalMethodStyleConfigStore = createHorizontalMethodStyleConfigStore();
export const columnMethodStyleConfigStore = createColumnMethodStyleConfigStore();
export const worksheetConfigStore = createWorksheetConfigStore();
export const worksheetContainerStyleConfig = createWorksheetContainerStyleConfigStore();
