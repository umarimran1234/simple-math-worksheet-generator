import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";

export type FunAlgebraQuestion = FunAlgebraBasicLvl1Question | FunAlgebraBasicLvl2Question | FunAlgebraBasicLvl3Question;

export type FunAlgebraBasicLvl1Question = {
    questionType: string,
    numA: number,
    ratioBToA: number,
    numB: number,
    ratioCToB: number,
    numC: number
}

export type FunAlgebraBasicLvl2Question = {
    questionType: string,
    numA: number,
    numB: number,
    numC: number
}

export type FunAlgebraBasicLvl3Question = {
    questionType: string,
    numA: number,
    numB: number,
    numC: number
}

export type WorkSheet = {
    // size: string;
    questions: FunAlgebraQuestion[];
}


/**
 * FunAlgebraBasicLvl1QuestionGeneratorConfig
 * - config to generate fun algebra basic lvl 1 multiplication
 */
export type FunAlgebraBasicLvl1QuestionGeneratorConfig = {
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

    firstNumRange: string,
    firstNumReverse: false,
    secondNumRange: string,
    secondNumReverse: false,
    resultMin: 1,    
    allowNegative: false,    
}

export type FunAlgebraBasicLvl2QuestionGeneratorConfig = {
    /**
     * 1st number (a): for a + a
     * 2nd number (b): if b > a, then display b - a, else display a - b
     * 3rd number (c): if c > b, then display c - b, else display b - c
     * 
     * ask a, b, c 
     */

    numARange: string,
    numBRange: string,
    numCRange: string
}

export type FunAlgebraBasicLvl3QuestionGeneratorConfig = {
    /**
     * a + b =
     * b + c =
     * a + c =
     * 
     * ask a, b, c
     */

    numARange: string,
    numBRange: string,
    numCRange: string
}


export const FunAlgebraQuestionType = {
    BASIC_LVL_1: 'Basic Lvl 1',
    BASIC_LVL_2: 'Basic Lvl 2',
    BASIC_LVL_3: 'Basic Lvl 3'
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
    show1stAnswer: boolean,
    show2ndAnswer: boolean,
    show3rdAnswer: boolean,
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
