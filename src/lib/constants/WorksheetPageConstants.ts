export enum FlexDirectionOptions {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse'
}
export const FLEX_DIRECTION_OPTIONS = Object.values(FlexDirectionOptions);

export enum FlexWrapOptions {
    NO_WRAP = 'nowrap',
    WRAP = 'wrap',
    WRAP_REVERSE = 'wrap-reverse'
}
export const FLEX_WRAP_OPTIONS = Object.values(FlexWrapOptions);

export enum FlexJustifyContentOptions {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly'
}
export const FLEX_JUSTIFY_CONTENT_OPTIONS = Object.values(FlexJustifyContentOptions);

export const PaperSize = {
    A3 : 'A3',
    A3_LANDSCAPE : 'A3 landscape',
    A4 : 'A4',
    A4_LANDSCAPE : 'A4 landscape',
    A5 : 'A5',
    A5_LANDSCAPE : 'A5 landscape',
} as const;
export type PaperSize = typeof PaperSize[keyof typeof PaperSize];
export const PAPER_SIZE = Object.values(PaperSize);

export type WorksheetContainerStyleConfig = {
    contentContainerHeight: string,
    pagePadding: string,
    flexDirection: FlexDirectionOptions,
    flexWrap: FlexWrapOptions,
    flexJustifyContent: FlexJustifyContentOptions,
}