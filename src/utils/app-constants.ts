export enum QuestionTypes {
    TWO_NUMBERS = 'twoNumbers'
}

export enum MathOperators {
    PLUS = '&plus;',
    MINUS = '&minus;',
    TIMES = '&times;',
    DIVIDE = '&divide;'
}

export enum FlexDirectionOptions {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse'
}

export enum FlexWrapOptions {
    NO_WRAP = 'nowrap',
    WRAP = 'wrap',
    WRAP_REVERSE = 'wrap-reverse'
}

export enum FlexJustifyContentOptions {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly'
}

export enum PaperSize {
    A3 = 'A3',
    A3_LANDSCAPE = 'A3 landscape',
    A4 = 'A4',
    A4_LANDSCAPE = 'A4 landscape',
    A5 = 'A5',
    A5_LANDSCAPE = 'A5 landscape',
}

export enum WorkSheetSize {
    A4 = PaperSize.A4,
    A4_LANDSCAPE = PaperSize.A4_LANDSCAPE,
}

export type TwoNumbersQuestionStyleConfig = {
    fontSize: string,
    numberBoxWidth: string,
    numberBoxHeight: string,
    numberBoxMargin: string,
    operatorBoxMargin: string,
    questionContainerMargin: string
}

export type PageConfig = {    
    contentContainerHeight: string,
    pagePadding: string,
    flexDirection: FlexDirectionOptions,
    flexWrap: FlexWrapOptions,
    flexJustifyContent: FlexJustifyContentOptions,
}

export type WorksheetConfig = {
    pageSize : WorkSheetSize,
    questionsPerPage: number,
    pageConfig: PageConfig,
    twoNumbersQuestionsPerPage: number,
    twoNumbersQuestionStyleConfig: TwoNumbersQuestionStyleConfig
}

export type TwoNumbersQuestionGeneratorConfig = {
    firstNumRange: string,
    firstNumReverse: boolean,
    secondNumRange: string,
    secondNumReverse: boolean,
    resultMax: number,
    allowNegative: boolean,
    allowRemainder: boolean,
    randomOrder: boolean,
    questionOperator: string[],
}

export const AppConstants = {

    FLEX_DIRECTION_OPTIONS: Object.values(FlexDirectionOptions),
    FLEX_WRAP_OPTIONS: Object.values(FlexWrapOptions),
    FLEX_JUSTIFY_CONTENT_OPTIONS: Object.values(FlexJustifyContentOptions),
 
    WORKSHEET_SIZE_OPTIONS: [PaperSize.A4, PaperSize.A4_LANDSCAPE],

    OPERATOR_OPTIONS: Object.values(MathOperators),

    DEFAULT_QUESTIONS_PER_PAGE: 20,

    DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG: <TwoNumbersQuestionGeneratorConfig>{
        firstNumRange: '2 - 9',
        firstNumReverse: true,
        secondNumRange: '1 - 5',
        secondNumReverse: true,
        resultMax: null,
        allowNegative: false,
        allowRemainder: false,
        randomOrder: false,
        questionOperator: [MathOperators.PLUS, MathOperators.MINUS],
    },

    WORKSHEET_DEFAULT_CONFIG : {
        A4: <WorksheetConfig> {
            pageSize: WorkSheetSize.A4,
            questionsPerPage: 20,
            pageConfig: <PageConfig>{                
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START
            },
            twoNumbersQuestionsPerPage: 20,
            twoNumbersQuestionStyleConfig: <TwoNumbersQuestionStyleConfig> {
                fontSize: '50px',
                numberBoxWidth: '18mm',
                numberBoxHeight: '18mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px'
            }
        },
        A4_LANDSCAPE: <WorksheetConfig> {
            pageSize: WorkSheetSize.A4_LANDSCAPE,
            questionsPerPage: 8,
            pageConfig: <PageConfig>{                
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START
            },
            twoNumbersQuestionsPerPage: 10,
            twoNumbersQuestionStyleConfig: <TwoNumbersQuestionStyleConfig>{
                fontSize: '60px',
                numberBoxWidth: '20mm',
                numberBoxHeight: '20mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '30px 90px 30px 90px'
            }            
        }
    }
} as const;