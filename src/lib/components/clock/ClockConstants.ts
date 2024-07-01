import { PaperSize } from "../common/worksheet/WorksheetPageConstants";
import type { WorksheetContainerStyleConfig } from "../common/worksheet/WorksheetPageConstants";


export const RANGE_24_HRS_STR = '0-23';
export const RANGE_AM_STR = '0-11';
export const RANGE_PM_STR = '12-23';

export const RANGE_MINS_ALL_STR = '0-59';
export const RANGE_MINS_5_STR = '0,5,10,15,20,25,30,35,40,45,50,55';
export const RANGE_MINS_15_STR = '0,15,30,45';
export const RANGE_MINS_30_STR = '0,30';
export const RANGE_MINS_60_STR = '0';


export type ClockQuestion = DigitalClockQuestion | AnalogClockQuestion;

/**
 * DigitalClockQuestion - fill in the digital clock based on analog clock
 * AnalogClockQuestion - fill in the analog clock based on digital clock
 */
export type DigitalClockQuestion = {
    questionType: string, /* ClockQuestionType */
    hour: number,
    minute: number,
    digitalClockType: string,
}

export type AnalogClockQuestion = {
    questionType: string, /* ClockQuestionType */
    hour: number,
    minute: number,
    digitalClockType: string,
}

export type WorkSheet = {
    // size: string;
    questions: ClockQuestion[];
}

/**
 * ClockType1QuestionGeneratorConfig
 * - config to generate clock type 1 question
 * - fill in the digital clock based on analog clock
 */
export type ClockQuestionGeneratorConfig = {
    hoursRangeType: string, /* HoursRangeType */
    minutesRangeType: string, /* MinutesRangeType */
    digitalClockType: string, /* DigitalClockType */
    enableQuestionTypes: string[]; /* ClockQuestionType */
}


export const ClockQuestionType = {
    DIGITAL_CLOCK_QUESTION: 'Fill in time value',
    ANALOG_CLOCK_QUESTION: 'Draw clock hands'
} as const;
export type ClockQuestionType = typeof ClockQuestionType[keyof typeof ClockQuestionType];
export const CLOCK_QUESTION_TYPE = Object.values(ClockQuestionType);

export const HoursRangeType = {
    RANGE_24_HRS: '24 Hrs',
    RANGE_AM: 'AM (0 - 11)',
    RANGE_PM: 'PM (12 - 23)'
} as const;
export type HoursRangeType = typeof HoursRangeType[keyof typeof HoursRangeType];
export const HOURS_RANGE_TYPE = Object.values(HoursRangeType);

export const MinutesRangeType = {
    RANGE_MINS_5: '0, 5, 10...55',
    RANGE_MINS_15: '0, 15, 30, 45',
    RANGE_MINS_30: '0, 30',
    RANGE_MINS_60: '0',
    RANGE_MINS_ALL: '0 To 59',
} as const;
export type MinutesRangeType = typeof MinutesRangeType[keyof typeof MinutesRangeType];
export const MINUTES_RANGE_TYPE = Object.values(MinutesRangeType);

export const DigitalClockType = {
    TYPE_AM_PM: 'AM/PM',
    TYPE_24_HOURS: '24H'
} as const;
export type DigitalClockType = typeof DigitalClockType[keyof typeof DigitalClockType];
export const DIGITAL_CLOCK_TYPE = Object.values(DigitalClockType);



export const ClockWorksheetSize = {
    A4: PaperSize.A4,
    // A4_LANDSCAPE: PaperSize.A4_LANDSCAPE
} as const;
export type ClockWorksheetSize = typeof ClockWorksheetSize[keyof typeof ClockWorksheetSize];
export const CLOCK_WORKSHEET_SIZE = Object.values(ClockWorksheetSize);


/**
 * ClcokQuestionWorksheetConfig
 * - Clock question worksheet config 
 */
export type ClockQuestionWorksheetConfig = {
    questionConfig: ClockQuestionConfig,
    worksheetConfig: ClockWorksheetConfig,
    worksheetCointainerStyleConfig: WorksheetContainerStyleConfig
}

export type ClockQuestionConfig = {
    showAnswerHour: boolean,
    showAnswerMinute: boolean
}

export type ClockWorksheetConfig = {
    worksheetSize: ClockWorksheetSize,
    questionsPerPage: number
}

