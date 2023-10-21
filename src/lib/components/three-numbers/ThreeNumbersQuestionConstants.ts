import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";

export type ThreeNumbersQuestion = {
    questionType: string;
    num1: number;
    num2: number;
    num3: number;
    operator: string;
    answer: number;
}

export type WorkSheet = {
    // size: string;
    questions: ThreeNumbersQuestion[];
}

/**
 * ThreeNumbersQuestionGeneratorConfig
 * - config to generate maths questions (two numbers)
 */
export type ThreeNumbersQuestionGeneratorConfig = {
    firstNumRange: string,
    firstNumReverse: boolean,
    secondNumRange: string,
    secondNumReverse: boolean,
    thirdNumRange: string,
    thirdNumReverse: boolean,
    resultMin: number,
    resultMax: number,
    allowNegative: boolean,
    allowRemainder: boolean,
    randomOrder: boolean,
    questionOperator: string[],
}

export const ThreeNumbersQuestionFormat = {
    COLUMN_METHOD : 'column',
    HORIZONTAL_METHOD : 'horizontal'
} as const;
export type ThreeNumbersQuestionFormat = typeof ThreeNumbersQuestionFormat[keyof typeof ThreeNumbersQuestionFormat];
export const THREE_NUMBERS_QUESTION_FORMAT = Object.values(ThreeNumbersQuestionFormat);


export const ThreeNumbersWorksheetSize = {
    A4 : PaperSize.A4,
    A4_LANDSCAPE : PaperSize.A4_LANDSCAPE
} as const;
export type ThreeNumbersWorksheetSize = typeof ThreeNumbersWorksheetSize[keyof typeof ThreeNumbersWorksheetSize];
export const THREE_NUMBERS_WORKSHEET_SIZE = Object.values(ThreeNumbersWorksheetSize);

/**
 * ThreeNumbersQuestionWorksheetConfig
 * - Three numbers question maths worksheet config 
 */
export type ThreeNumbersQuestionWorksheetConfig = {
    questionConfig: TwoNumbersQuestionConfig,
    horizonalMethodStyleConfig: ThreeNumbersQuestionHorizontalMethodStyleConfig,
    columnMethodStyleConfig: ThreeNumberQuestionColumnMethodStyleConfig,
    worksheetConfig: ThreeNumberWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}


export type ThreeNumbersQuestionConfig = {
    questionFormat: ThreeNumbersQuestionFormat,
    showAnswers: boolean
}

export type ThreeNumberWorksheetConfig =  {
    worksheetSize: ThreeNumbersWorksheetSize,
    questionsPerPage: number
}

/**
 * Three numbers question CSS style config (Horizontal method)
 */
export type ThreeNumbersQuestionHorizontalMethodStyleConfig = {
    fontSize: string,
    numberBoxWidth: string,
    numberBoxHeight: string,
    numberBoxMargin: string,
    operatorBoxMargin: string,
    questionContainerMargin: string
}

/**
 * Three numbers question CSS style config (Column method)
 */
export type ThreeNumberQuestionColumnMethodStyleConfig = {
    showQuestionId: boolean,
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string,
    questionContainerPadding: string,
    questionRowNumberWidth: string
}