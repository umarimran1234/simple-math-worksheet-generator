import { writable } from 'svelte/store';

import { AppConstants } from '../../../constants';


import type { WorksheetContainerStyleConfig } from '../../common/worksheet/WorksheetPageConstants';
import type { ClockQuestionConfig, ClockWorksheetConfig } from '../ClockConstants';

/**
 * Supposed would like to create a store with data structure like TwoNumbersQuestionWorksheetConfig
 * However svelte stores by default does not support nested structure
 * So instead of nested structure TwoNumbersQuestionWorksheetConfig, we can separate different stores
 * e.g.
 * Original nested structure TwoNumbersQuestionWorksheetConfig
 * - export type FunAlgebraQuestionWorksheetConfig = {
 *     questionConfig: FunAlgebraQuestionConfig,
 *     horizonalMethodStyleConfig: FunAlgebraHorizontalMethodStyleConfig,
 *     columnMethodStyleConfig: FunAlgebraColumnMethodStyleConfig,
 *     worksheetConfig: FunAlgebraWorksheetConfig,
 *     worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
 *   }
 * 
 * Separate into 5 stores for each structure
 * - export type FunAlgebraQuestionConfig = {
 *     showFirstNum: boolean;
 *     showSecondNum: boolean;
 *     showAnswer: boolean
 * }
 * 
 * export type FunAlgebraHorizontalMethodStyleConfig = {
 *     fontSize: string,
 *     numberBoxWidth: string,
 *     numberBoxHeight: string,
 *     numberBoxMargin: string,
 *     operatorBoxMargin: string,
 *     questionContainerMargin: string
 * }
 * 
 * export type FunAlgebraColumnMethodStyleConfig = {
 *     questionIdFontSize: string,
 *     questionIdWidth: string,
 *     questionFontSize: string,
 *     questionContainerMargin: string,
 *     questionContainerPadding: string,
 *     questionRowNumberWidth: string
 * }
 * 
 * export type FunAlgebraWorksheetConfig = {
 *     worksheetSize: FunAlgebraWorksheetSize,
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


function createQuestionConfigStore() {
    const { subscribe, set, update } = writable<ClockQuestionConfig>(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig);

    return {
        subscribe,
        set: (config: ClockQuestionConfig) => set(config),
        reset: () => set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.questionConfig)
    };
}


function createWorksheetConfigStore() {
    const { subscribe, set, update } = writable<ClockWorksheetConfig>(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig);

    return {
        subscribe,
        set: (config: ClockWorksheetConfig) => set(config),
        reset: () => set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetConfig)
    };
}

function createWorksheetContainerStyleConfigStore() {
    const { subscribe, set, update } = writable<WorksheetContainerStyleConfig>(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig);

    return {
        subscribe,
        set: (config: WorksheetContainerStyleConfig) => set(config),
        reset: () => set(AppConstants.CLOCK_WORKSHEET_DEFAULT_CONFIG.A4.worksheetCointainerStyleConfig)
    };
}


export const questionConfigStore = createQuestionConfigStore();
export const worksheetConfigStore = createWorksheetConfigStore();
export const worksheetContainerStyleConfigStore = createWorksheetContainerStyleConfigStore();
