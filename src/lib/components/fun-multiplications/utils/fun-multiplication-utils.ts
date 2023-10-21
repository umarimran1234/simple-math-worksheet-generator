import { AppFunction, MathOperators } from "../../../constants";

import { operationMap } from "$lib/components/common/utils/math-utils";

import { parseRange } from "$lib/utils/number-ranage-parser-utils";
import { shuffleArray } from "$lib/components/common/utils/array-utils";

import { type FunMultiplicationQuestion, type WorkSheet } from "../FunMultiplicationConstants";
import { type FunMultiplicationQuestionGeneratorConfig } from "../FunMultiplicationConstants";

export const generateFunMultiplicationWorksheet = (
    funMultiplicationQuestionGeneratorConfig: FunMultiplicationQuestionGeneratorConfig
) => {

    console.log('funMultiplicationQuestionGeneratorConfig', funMultiplicationQuestionGeneratorConfig);

    let num1Arr: number[] = parseRange(
        funMultiplicationQuestionGeneratorConfig.firstNumRange, funMultiplicationQuestionGeneratorConfig.firstNumReverse);

    let num2Arr: number[] = parseRange(
        funMultiplicationQuestionGeneratorConfig.secondNumRange, funMultiplicationQuestionGeneratorConfig.secondNumReverse);

    let worksheetData = generateFunMultiplicationWorksheetWithParams(num1Arr, num2Arr, 
        funMultiplicationQuestionGeneratorConfig.resultMin, 
        funMultiplicationQuestionGeneratorConfig.resultMax,
        funMultiplicationQuestionGeneratorConfig.allowNegative, funMultiplicationQuestionGeneratorConfig.randomOrder);
    
    console.log('generateFunMultiplicationWorksheet worksheetData: ', worksheetData);
    return worksheetData;    
}

const generateFunMultiplicationWorksheetWithParams = (
    num1Arr: number[], num2Arr: number[],
    resultMin: number, resultMax: number,    
    allowNegative: boolean, randomOrder: boolean
    ): WorkSheet[] => {

    let operator = MathOperators.TIMES;

    let questionArr: FunMultiplicationQuestion[] = [];
    for (const num1 of num1Arr) {
        for (const num2 of num2Arr) {
            let answer = (operationMap.get(operator))([num1, num2]);
            if (isAnswerWithinRange(answer, allowNegative, resultMin, resultMax)) {
                questionArr.push(createFunMultiplicationQuestion(num1, num2, operator, answer));
            }
        }
    }

    if(randomOrder) {
        shuffleArray(questionArr);
    }
    
    return [<WorkSheet>{ questions: questionArr }];
}

const isAnswerWithinRange = (answer: number, allowNegative: boolean, resultMin: number, resultMax: number): boolean => {
    return !(!allowNegative && answer < 0)
        && !(resultMin && resultMin > answer)
        && !(resultMax && resultMax < answer);
}

const createFunMultiplicationQuestion = (num1: number, num2: number, operator: string, answer: number): FunMultiplicationQuestion => {
    return <FunMultiplicationQuestion>{
        questionType: AppFunction.FUN_MULTIPLICATION.id,
        num1: num1,
        num2: num2,
        operator: operator,
        answer: answer
    }
}