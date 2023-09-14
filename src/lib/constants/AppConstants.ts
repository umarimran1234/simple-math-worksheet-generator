import { 
    FlexDirectionOptions, 
    FlexWrapOptions, 
    FlexJustifyContentOptions, 
    PaperSize
} from "./WorksheetPageConstants";

import { MathOperators } from "./MathsConstants";

import { TwoNumbersQuestionFormat, TwoNumbersWorksheetSize } from "./TwoNumbersQuestionConstants";

import type { TwoNumbersQuestionWorksheetConfig, TwoNumbersQuestionGeneratorConfig } from "./TwoNumbersQuestionConstants";

export enum QuestionTypes {
    TWO_NUMBERS = 'twoNumbers'
}


// export type NumberSequenceQuestionGeneratorConfig = {
//     start: number;
//     end: number;
//     noOfEmptyBoxes: number;
//     reverse: boolean;
//     numOfCols: number;
//     fontSize: string;
//     cellMinWidth: string;
//     numberOfQuestions: number;
//     questionsPerPage: number;
// }

export type AppPageTopBarFunction = {
    iconButtonName: string;
    fn: any
}

export const AppConstants = {

    // FLEX_DIRECTION_OPTIONS: Object.values(FlexDirectionOptions),
    // FLEX_WRAP_OPTIONS: Object.values(FlexWrapOptions),
    // FLEX_JUSTIFY_CONTENT_OPTIONS: Object.values(FlexJustifyContentOptions),

    // WORKSHEET_SIZE_OPTIONS: [PaperSize.A4, PaperSize.A4_LANDSCAPE],

    OPERATOR_OPTIONS: Object.values(MathOperators),

    DEFAULT_QUESTIONS_PER_PAGE: 20,

    DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG: <TwoNumbersQuestionGeneratorConfig>{
        firstNumRange: '2 - 20',
        firstNumReverse: true,
        secondNumRange: '1 - 10',
        secondNumReverse: true,
        resultMin: 0,
        resultMax: 17,
        allowNegative: false,
        allowRemainder: false,
        randomOrder: true,
        questionOperator: [MathOperators.PLUS, MathOperators.MINUS],
    },

    TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG: {
        A4: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.COLUMN_METHOD,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '50px',
                numberBoxWidth: '18mm',
                numberBoxHeight: '18mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '8mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4,
                questionsPerPage: 25
            },
            worksheetCointainerStyleConfig: {                
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.HORIZONTAL_METHOD,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '8mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    }
} as const;