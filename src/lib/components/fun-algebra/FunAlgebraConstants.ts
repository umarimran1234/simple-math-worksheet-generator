import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";

export type FunAlgebraQuestion = {
    questionType: string,
    numA: number,
    ratioBToA: number,
    numB: number,
    ratioCToB: number,
    numC: number
}

export type WorkSheet = {
    // size: string;
    questions: FunAlgebraQuestion[];
}


/**
 * KidMultiplicationQuestionGeneratorConfig
 * - config to generate two numbers multiplication
 */
export type FunAlgebraQuestionGeneratorConfig = {
    /**
     * c = (ratioCToB) b
     * b = (ratioBToA) a
     * a = 1
     * 
     * resultMax = ratioBToA * ratioCToB
     *  */
    numA: number,
    ratioBToA: string, /* expected 1-3 for kid level */
    ratioCToB: string, /* expected 1-3 for kid level */    
    resultMax: number,
    randomOrder: boolean,
    questionTypes: string[] /* expected FunAlgebraQuestionType */

    firstNumRange: '1 - 10',
    firstNumReverse: false,
    secondNumRange: '1 - 10',
    secondNumReverse: false,
    resultMin: 1,    
    allowNegative: false,    
}

export const FunAlgebraQuestionType = {
    BASIC_LVL_1: 'Basic Lvl 1'
} as const;
export type FunAlgebraQuestionType = typeof FunAlgebraQuestionType[keyof typeof FunAlgebraQuestionType];
export const FUN_ALGEBRA_QUESTION_TYPE = Object.values(FunAlgebraQuestionType);

export const FunAlgebraQuestionFormat = {
    COLUMN_METHOD: 'column',
    HORIZONTAL_METHOD: 'horizontal'
} as const;
export type FunAlgebraQuestionFormat = typeof FunAlgebraQuestionFormat[keyof typeof FunAlgebraQuestionFormat];
export const FUN_ALGEBRA_QUESTION_FORMAT = Object.values(FunAlgebraQuestionFormat);


export const FunAlgebraWorksheetSize = {
    A4: PaperSize.A4,
    A4_LANDSCAPE: PaperSize.A4_LANDSCAPE
} as const;
export type FunAlgebraWorksheetSize = typeof FunAlgebraWorksheetSize[keyof typeof FunAlgebraWorksheetSize];
export const FUN_ALGEBRA_WORKSHEET_SIZE = Object.values(FunAlgebraWorksheetSize);


/**
 * FunAlgebraQuestionWorksheetConfig
 * - Fun Algebra question maths worksheet config 
 */
export type FunAlgebraQuestionWorksheetConfig = {
    questionConfig: FunAlgebraQuestionConfig,
    horizonalMethodStyleConfig: FunAlgebraHorizontalMethodStyleConfig,
    columnMethodStyleConfig: FunAlgebraColumnMethodStyleConfig,
    worksheetConfig: FunAlgebraWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}

export type FunAlgebraQuestionConfig = {    
    showAnswers: boolean,
    questionFormat: FunAlgebraQuestionFormat
}

export type FunAlgebraWorksheetConfig = {
    worksheetSize: FunAlgebraWorksheetSize,
    questionsPerPage: number
}

/**
 * Two numbers question CSS style config (Horizontal method)
 */
export type FunAlgebraHorizontalMethodStyleConfig = {
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
export type FunAlgebraColumnMethodStyleConfig = {
    questionIdFontSize: string,
    questionIdWidth: string,
    questionFontSize: string,
    questionContainerMargin: string,
    questionContainerPadding: string,
    questionRowNumberWidth: string
}
