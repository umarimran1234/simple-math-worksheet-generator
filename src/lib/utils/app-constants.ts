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
    questionContainerMargin: string,
    columnForm: boolean,
    showAnswers: boolean
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
    resultMin: number,
    resultMax: number,
    allowNegative: boolean,
    allowRemainder: boolean,
    randomOrder: boolean,
    questionOperator: string[],
}

export type NumberSequenceQuestionGeneratorConfig = {
    start: number;
    end: number;
    noOfEmptyBoxes: number;
    reverse: boolean;
    numOfCols: number;
    fontSize: string;
    cellMinWidth: string;
    numberOfQuestions: number;
    questionsPerPage: number;
}

export const AppConstants = {

    FLEX_DIRECTION_OPTIONS: Object.values(FlexDirectionOptions),
    FLEX_WRAP_OPTIONS: Object.values(FlexWrapOptions),
    FLEX_JUSTIFY_CONTENT_OPTIONS: Object.values(FlexJustifyContentOptions),
 
    WORKSHEET_SIZE_OPTIONS: [PaperSize.A4, PaperSize.A4_LANDSCAPE],

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

    DEFAULT_NUM_SEQUENCE_QUESTION_GENERATOR_CONFIG: <NumberSequenceQuestionGeneratorConfig> {
        start: 1,
        end: 100,
        noOfEmptyBoxes: 55,
        reverse: false,
        numOfCols: 10,
        fontSize: '55px',
        cellMinWidth: '29.2mm',
        numberOfQuestions: 1,
        questionsPerPage : 1
    },

    WORKSHEET_DEFAULT_CONFIG : {
        A4: <WorksheetConfig> {
            pageSize: WorkSheetSize.A4,
            pageConfig: <PageConfig>{                
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            },
            twoNumbersQuestionsPerPage: 25,
            twoNumbersQuestionStyleConfig: <TwoNumbersQuestionStyleConfig> {
                fontSize: '50px',
                numberBoxWidth: '18mm',
                numberBoxHeight: '18mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px',
                columnForm: true,
                showAnswers: false
            }
        },
        A4_LANDSCAPE: <WorksheetConfig> {
            pageSize: WorkSheetSize.A4_LANDSCAPE,
            pageConfig: <PageConfig>{                
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            },
            twoNumbersQuestionsPerPage: 12,
            twoNumbersQuestionStyleConfig: <TwoNumbersQuestionStyleConfig>{
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
                columnForm: false,
                showAnswers: false
            }            
        }
    }
} as const;