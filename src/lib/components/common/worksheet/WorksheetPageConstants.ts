export const FlexDirectionOptions = {
    ROW : 'row',
    ROW_REVERSE : 'row-reverse',
    COLUMN : 'column',
    COLUMN_REVERSE : 'column-reverse'
} as const
export type FlexDirectionOptions = typeof FlexDirectionOptions[keyof typeof FlexDirectionOptions];
export const FLEX_DIRECTION_OPTIONS = Object.values(FlexDirectionOptions);

export const FlexWrapOptions = {
    NO_WRAP : 'nowrap',
    WRAP : 'wrap',
    WRAP_REVERSE : 'wrap-reverse'
} as const
export type FlexWrapOptions = typeof FlexWrapOptions[keyof typeof FlexWrapOptions];
export const FLEX_WRAP_OPTIONS = Object.values(FlexWrapOptions);

export const FlexJustifyContentOptions = {
    FLEX_START : 'flex-start',
    FLEX_END : 'flex-end',
    CENTER : 'center',
    SPACE_BETWEEN : 'space-between',
    SPACE_AROUND : 'space-around',
    SPACE_EVENLY : 'space-evenly'
} as const
export type FlexJustifyContentOptions = typeof FlexJustifyContentOptions[keyof typeof FlexJustifyContentOptions];
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