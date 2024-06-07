import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";
import { MathOperators } from "$lib/constants";

export const TwoNumsAddAlgebraMathOperators = {
    PLUS : MathOperators.PLUS,
    MINUS : MathOperators.MINUS
} as const;
export const TWO_NUMS_ADD_ALGEBRA_MATH_OPERATORS = Object.values(TwoNumsAddAlgebraMathOperators);

export type TwoNumsAddAlgebraBlockIndex = {
    blockNum: number;
    blockDigit: number;
}

export type TwoNumsAddAlgebraQuestion = {
    questionType: string;
    num1: number;
    num2: number;
    operator: string;
    answer: number;
    blockIndex1: TwoNumsAddAlgebraBlockIndex;
    blockIndex2: TwoNumsAddAlgebraBlockIndex;
}

export type WorkSheet = {
    // size: string;
    questions: TwoNumsAddAlgebraQuestion[];
}

/**
 * TwoNumsAddAlgebraQuestionGeneratorConfig
 * - config to generate maths questions (two numbers)
 */
export type TwoNumsAddAlgebraQuestionGeneratorConfig = {
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
}

export const TwoNumsAddAlgebraQuestionFormat = {
    COLUMN_METHOD : 'column',
} as const;
export type TwoNumsAddAlgebraQuestionFormat = typeof TwoNumsAddAlgebraQuestionFormat[keyof typeof TwoNumsAddAlgebraQuestionFormat];
export const TWO_NUMS_ADD_ALGEBRA_QUESTION_FORMAT = Object.values(TwoNumsAddAlgebraQuestionFormat);


export const TwoNumsAddAlgebraWorksheetSize = {
    A4 : PaperSize.A4,
    A4_LANDSCAPE : PaperSize.A4_LANDSCAPE
} as const;
export type TwoNumsAddAlgebraWorksheetSize = typeof TwoNumsAddAlgebraWorksheetSize[keyof typeof TwoNumsAddAlgebraWorksheetSize];
export const TWO_NUMS_ADD_ALGEBRA_WORKSHEET_SIZE = Object.values(TwoNumsAddAlgebraWorksheetSize);

/**
 * TwoNumsAddAlgebraQuestionWorksheetConfig
 * - Two numbers question maths worksheet config 
 */
export type TwoNumsAddAlgebraQuestionWorksheetConfig = {
    questionConfig: TwoNumsAddAlgebraQuestionConfig,
    columnMethodStyleConfig: TwoNumsAddAlgebraQuestionColumnMethodStyleConfig,
    worksheetConfig: TwoNumsAddAlgebraWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}


export type TwoNumsAddAlgebraQuestionConfig = {
    questionFormat: TwoNumsAddAlgebraQuestionFormat,
    showFirstNumber: boolean,
    showSecondNumber: boolean,
    showOperator: boolean,
    showAnswers: boolean
}

export type TwoNumsAddAlgebraWorksheetConfig =  {
    worksheetSize: TwoNumsAddAlgebraWorksheetSize,
    questionsPerPage: number
}


/**
 * Two numbers question CSS style config (Column method)
 */
export type TwoNumsAddAlgebraQuestionColumnMethodStyleConfig = {
    showQuestionId: boolean,
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string,
    questionContainerPadding: string,
    questionRowNumberWidth: string
}