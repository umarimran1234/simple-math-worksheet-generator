import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";

export type TwoNumbersQuestion = {
    questionType: string;
    num1: number;
    num2: number;
    operator: string;
    answer: number;
}

export type WorkSheet = {
    // size: string;
    questions: TwoNumbersQuestion[];
}

/**
 * TwoNumbersQuestionGeneratorConfig
 * - config to generate maths questions (two numbers)
 */
export type TwoNumbersQuestionGeneratorConfig = {
    firstNumRange: string,
    firstNumReverse: boolean,
    secondNumRange: string,
    secondNumReverse: boolean,
    resultMin: number,
    resultMax: number,
    allowNegative: boolean,
    allowRemainder: boolean,
    randomOrder: boolean,
    questionOperator: string[],
    numberOfQuestions: number,
    allCombintationsMode: boolean
}

export const TwoNumbersQuestionFormat = {
    COLUMN_METHOD : 'column',
    HORIZONTAL_METHOD : 'horizontal'
} as const;
export type TwoNumbersQuestionFormat = typeof TwoNumbersQuestionFormat[keyof typeof TwoNumbersQuestionFormat];
export const TWO_NUMBERS_QUESTION_FORMAT = Object.values(TwoNumbersQuestionFormat);


export const TwoNumbersWorksheetSize = {
    A4 : PaperSize.A4,
    A4_LANDSCAPE : PaperSize.A4_LANDSCAPE
} as const;
export type TwoNumbersWorksheetSize = typeof TwoNumbersWorksheetSize[keyof typeof TwoNumbersWorksheetSize];
export const TWO_NUMBERS_WORKSHEET_SIZE = Object.values(TwoNumbersWorksheetSize);

/**
 * TwoNumbersQuestionWorksheetConfig
 * - Two numbers question maths worksheet config 
 */
export type TwoNumbersQuestionWorksheetConfig = {
    questionConfig: TwoNumbersQuestionConfig,
    horizonalMethodStyleConfig: TwoNumbersQuestionHorizontalMethodStyleConfig,
    columnMethodStyleConfig: TwoNumberQuestionColumnMethodStyleConfig,
    columnMethodWithGridLineStyleConfig: TwoNumberQuestionColumnMethodWithGridLineStyleConfig, 
    worksheetConfig: TwoNumberWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}


export type TwoNumbersQuestionConfig = {
    questionFormat: TwoNumbersQuestionFormat,
    showFirstNumber: boolean,
    showSecondNumber: boolean,
    showOperator: boolean,
    showAnswers: boolean,
    showGridLines: boolean,
    questionGridColumns: number
}

export type TwoNumberWorksheetConfig =  {
    worksheetSize: TwoNumbersWorksheetSize,
    questionsPerPage: number
}

/**
 * Two numbers question CSS style config (Horizontal method)
 */
export type TwoNumbersQuestionHorizontalMethodStyleConfig = {
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
export type TwoNumberQuestionColumnMethodStyleConfig = {
    showQuestionId: boolean,
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string,
    questionContainerPadding: string,
    questionRowNumberWidth: string
}

/**
 * Two numbers question CSS style config (Column method)
 */
export type TwoNumberQuestionColumnMethodWithGridLineStyleConfig = {
    showQuestionId: boolean,
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string
}