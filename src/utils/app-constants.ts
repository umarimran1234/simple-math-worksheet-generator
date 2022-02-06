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

export const AppConstants = {

    FLEX_DIRECTION_OPTIONS: Object.values(FlexDirectionOptions),
    FLEX_WRAP_OPTIONS: Object.values(FlexWrapOptions),
    FLEX_JUSTIFY_CONTENT_OPTIONS: Object.values(FlexJustifyContentOptions),
 
    WORKSHEET_SIZE_OPTIONS: [PaperSize.A4, PaperSize.A4_LANDSCAPE],

    OPERATOR_OPTIONS: Object.values(MathOperators),

    DEFAULT_QUESTIONS_PER_PAGE: 20
} as const;