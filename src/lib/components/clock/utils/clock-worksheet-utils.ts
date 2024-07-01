import { AppFunction, MathOperators } from "../../../constants";

import { parseRange } from "$lib/utils/number-ranage-parser-utils";
import { shuffleArray } from "$lib/components/common/utils/array-utils";

import { 
    ClockQuestionType, type ClockQuestion, type ClockQuestionGeneratorConfig, 
    type ClockType1Question, type ClockType2Question, 
    HoursRangeType, MinutesRangeType, 
    RANGE_MINS_ALL_STR, RANGE_MINS_5_STR, RANGE_MINS_15_STR, RANGE_MINS_30_STR, RANGE_MINS_60_STR, 
    RANGE_AM_STR, RANGE_PM_STR, RANGE_24_HRS_STR
} from "../ClockConstants";


export const getHoursRange = (hoursRangeType: string) => {
    if(HoursRangeType.RANGE_AM === hoursRangeType) {
        return parseRange(RANGE_AM_STR, false);
    }

    if(HoursRangeType.RANGE_PM === hoursRangeType) {
        return parseRange(RANGE_PM_STR, false);
    }

    return parseRange(RANGE_24_HRS_STR, false); 
}

export const getMinutesRange = (minutesRangeType: string) => {
 
    if(MinutesRangeType.RANGE_MINS_ALL === minutesRangeType) {
        return parseRange(RANGE_MINS_ALL_STR, false);
    }

    if(MinutesRangeType.RANGE_MINS_5 === minutesRangeType) {
        return parseRange(RANGE_MINS_5_STR, false);
    }

    if(MinutesRangeType.RANGE_MINS_15 === minutesRangeType) {
        return parseRange(RANGE_MINS_15_STR, false);
    }

    if(MinutesRangeType.RANGE_MINS_30 === minutesRangeType) {
        return parseRange(RANGE_MINS_30_STR, false);
    }

    if(MinutesRangeType.RANGE_MINS_60 === minutesRangeType) {
        return parseRange(RANGE_MINS_60_STR, false);
    }

    return parseRange(RANGE_MINS_15_STR, false);
}

export const generateAllClockWorksheet = (
    randomQuestionConfig: boolean,
    clockQuestionGeneratorConfig: ClockQuestionGeneratorConfig
) => {
    console.log('randomQuestionConfig', randomQuestionConfig);
    console.log('clockQuestionGeneratorConfig', clockQuestionGeneratorConfig);

    let questionArr: ClockQuestion[] = [];

    let hoursRange = getHoursRange(clockQuestionGeneratorConfig.hoursRangeType);
    let minutesRange = getMinutesRange(clockQuestionGeneratorConfig.minutesRangeType);


    for(const questionType of clockQuestionGeneratorConfig.enableQuestionTypes) {
        if(ClockQuestionType.DIGITAL_CLOCK_QUESTION === questionType) {
            questionArr = questionArr.concat(generateClockType1Question(hoursRange, minutesRange, 
                clockQuestionGeneratorConfig.digitalClockType));
        }

        if(ClockQuestionType.ANALOG_CLOCK_QUESTION === questionType) {
            questionArr = questionArr.concat(generateClockType2Question(hoursRange, minutesRange, 
                clockQuestionGeneratorConfig.digitalClockType));
        }
    }

    if (randomQuestionConfig) {
        shuffleArray(questionArr);
    }

    let worksheetData = [<WorkSheet>{ questions: questionArr }];

    console.log('generateAllClockWorksheet worksheetData: ', worksheetData);
    return worksheetData;
}


const generateClockType1Question = (hoursRange: number[], minutesRange: number[], digitalClockType: string): ClockType1Question[] => {
    console.log('generateClockType1Question');

    let questionArr: ClockType1Question[] = [];

    for(const hour of hoursRange) {
        for(const minute of minutesRange) {
            let clockType1Question = <ClockType1Question> {
                questionType: ClockQuestionType.DIGITAL_CLOCK_QUESTION,
                hour: hour,
                minute: minute,
                digitalClockType: digitalClockType
            };
            questionArr.push(clockType1Question);
        }
    }

    return questionArr;
}

const generateClockType2Question = (hoursRange: number[], minutesRange: number[], digitalClockType: string): ClockType2Question[] => {
    console.log('generateClockType2Question');

    let questionArr: ClockType2Question[] = [];

    for(const hour of hoursRange) {
        for(const minute of minutesRange) {
            let clockType1Question = <ClockType2Question> {
                questionType: ClockQuestionType.ANALOG_CLOCK_QUESTION,
                hour: hour,
                minute: minute,
                digitalClockType: digitalClockType
            };
            questionArr.push(clockType1Question);
        }
    }

    return questionArr;
}
