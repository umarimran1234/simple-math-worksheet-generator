import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";

export type FunMultiplicationQuestion = {
    questionType: string;
    num1: number;
    num2: number;
    operator: string;
    answer: number;
}

export type WorkSheet = {
    // size: string;
    questions: FunMultiplicationQuestion[];
}


/**
 * KidMultiplicationQuestionGeneratorConfig
 * - config to generate two numbers multiplication
 */
export type FunMultiplicationQuestionGeneratorConfig = {
    firstNumRange: string,
    firstNumReverse: boolean,
    secondNumRange: string,
    secondNumReverse: boolean,    
    resultMin: number,
    resultMax: number,
    allowNegative: boolean,
    randomOrder: boolean,    
}

export const FunMultiplicationQuestionFormat = {
    COLUMN_METHOD: 'column',
    HORIZONTAL_METHOD: 'horizontal'
} as const;
export type FunMultiplicationQuestionFormat = typeof FunMultiplicationQuestionFormat[keyof typeof FunMultiplicationQuestionFormat];
export const FUN_MULTIPLICATION_QUESTION_FORMAT = Object.values(FunMultiplicationQuestionFormat);


export const FunMultiplicationWorksheetSize = {
    A4: PaperSize.A4,
    A4_LANDSCAPE: PaperSize.A4_LANDSCAPE
} as const;
export type FunMultiplicationWorksheetSize = typeof FunMultiplicationWorksheetSize[keyof typeof FunMultiplicationWorksheetSize];
export const FUN_MULTIPLICATION_WORKSHEET_SIZE = Object.values(FunMultiplicationWorksheetSize);


/**
 * FunMultiplicationQuestionWorksheetConfig
 * - Fun Multiplication question maths worksheet config 
 */
export type FunMultiplicationQuestionWorksheetConfig = {
    questionConfig: FunMultiplicationQuestionConfig,
    horizonalMethodStyleConfig: FunMultiplicationHorizontalMethodStyleConfig,
    columnMethodStyleConfig: FunMultiplicationColumnMethodStyleConfig,
    worksheetConfig: FunMultiplicationWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}

export type FunMultiplicationQuestionConfig = {
    showFirstNum: boolean,
    showSecondNum: boolean,
    showAnswers: boolean,
    questionFormat: FunMultiplicationQuestionFormat
}

export type FunMultiplicationWorksheetConfig = {
    worksheetSize: FunMultiplicationWorksheetSize,
    questionsPerPage: number
}

/**
 * Two numbers question CSS style config (Horizontal method)
 */
export type FunMultiplicationHorizontalMethodStyleConfig = {
    fontSize: string,
    numberBoxWidth: string,
    numberBoxHeight: string,
    numberBoxMargin: string,
    operatorBoxMargin: string,
    questionContainerMargin: string
}

/**
 * Two numbers question CSS style config (Column method)
 */
export type FunMultiplicationColumnMethodStyleConfig = {
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string,
    questionContainerPadding: string,
    questionRowNumberWidth: string
}
