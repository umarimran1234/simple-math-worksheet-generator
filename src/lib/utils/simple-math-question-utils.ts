// import { QuestionTypes, MathOperators } from './app-constants';
// import type { TwoNumbersQuestionGeneratorConfig, WorkSheetSize } from 'src/utils/app-constants';

import { QuestionTypes } from '$lib/constants/AppConstants';
import { MathOperators } from '$lib/constants/MathsConstants';
import type { TwoNumbersQuestionGeneratorConfig  } from '$lib/constants/TwoNumbersQuestionConstants';
import { parseRangeStr } from './number-ranage-parser-utils';

export type TwoNumbersQuestionType = {
    questionType: string;
    num1: number;
    num2: number;
    operator: string;
    answer: number;
}

export type WorkSheetType = {
    // size: string;
    questions: TwoNumbersQuestionType[];
}

export const addAll = (arr: number[]) => arr.reduce((prev, curr) => prev + curr);
export const minusAll = (arr: number[]) => arr.reduce((prev, curr) => prev - curr);
export const multiplyAll = (arr: number[]) => arr.reduce((prev, curr) => prev * curr);
export const divideAll = (arr: number[]) => arr.reduce((prev, curr) => prev / curr);

export const operationMap = new Map<string, Function>([
    [MathOperators.PLUS, addAll],
    [MathOperators.MINUS, minusAll],
    [MathOperators.TIMES, multiplyAll],
    [MathOperators.DIVIDE, divideAll],
]);

export const requiresRemainderCheckMap = (operator) => MathOperators.DIVIDE === operator;

export class SimpleMathQuestionUtils {

    static generateTwoNumbersQuestions(twoNumbersQuestionGeneratorConfig: TwoNumbersQuestionGeneratorConfig): WorkSheetType[] {

        console.log('twoNumbersQuestionGeneratorConfig', twoNumbersQuestionGeneratorConfig);

        let worksheetData = this.generateTwoNumbersQuestionsWithParam(
            twoNumbersQuestionGeneratorConfig.firstNumRange,
            twoNumbersQuestionGeneratorConfig.firstNumReverse,
            twoNumbersQuestionGeneratorConfig.secondNumRange,
            twoNumbersQuestionGeneratorConfig.secondNumReverse,
            twoNumbersQuestionGeneratorConfig.resultMin,
            twoNumbersQuestionGeneratorConfig.resultMax,
            twoNumbersQuestionGeneratorConfig.questionOperator,
            twoNumbersQuestionGeneratorConfig.allowNegative,
            twoNumbersQuestionGeneratorConfig.allowRemainder,
            twoNumbersQuestionGeneratorConfig.randomOrder);

        console.log('generateTwoNumbersQuestions worksheetData: ', worksheetData);

        return worksheetData;
    }

    private static generateTwoNumbersQuestionsWithParam(
        firstNumRange: string, firstNumReverse: boolean,
        secondNumRange: string, secondNumReverse: boolean,
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, allowRemainder: boolean, randomOrder: boolean): WorkSheetType[] {

        let questionArr: TwoNumbersQuestionType[] = [];

        let num1Arr = this.parseRange(firstNumRange, firstNumReverse);
        let num2Arr = this.parseRange(secondNumRange, secondNumReverse);

        for (const operator of operators) {
            for (const num1 of num1Arr) {
                for (const num2 of num2Arr) {
                    let answer = (operationMap.get(operator))([num1, num2]);
                    if (!(!allowNegative && answer < 0)
                        && !(resultMin && resultMin > answer)
                        && !(resultMax && resultMax < answer)
                        && !(!allowRemainder && requiresRemainderCheckMap(operator) && (num1 % num2 > 0))
                    ) {
                        questionArr.push(this.createTwoNumbersQuestionType(num1, num2, operator, answer));
                    }
                }
            }
        }

        if (randomOrder) {
            this.shuffleArray(questionArr);
        }

        // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
        return [<WorkSheetType>{ questions: questionArr }];
    }

    private static createTwoNumbersQuestionType(num1: number, num2: number, operator: string, answer: number): TwoNumbersQuestionType {
        return <TwoNumbersQuestionType>{
            questionType: QuestionTypes.TWO_NUMBERS,
            num1: num1,
            num2: num2,
            operator: operator,
            answer: answer
        }
    }

    private static generateWorksheets(questionsArr: TwoNumbersQuestionType[], questionsPerPage: number, size: string): WorkSheetType[] {
        return [...Array(Math.ceil(questionsArr.length / questionsPerPage))].map(_ => <WorkSheetType>{
            // size: size, questions: questionsArr.splice(0, questionsPerPage)
            questions: questionsArr.splice(0, questionsPerPage)
        });
    }

    private static generateNumArr(range: number, reverse: boolean): number[] {
        let numArr: number[] = [...Array(range).keys()].map(i => i + 1);
        if (reverse) {
            return numArr.reverse();
        }
        return numArr;
    }

    private static parseRange(rangeStr: string, reverse: boolean) {
        let numArr = parseRangeStr(rangeStr);
        if (reverse) {
            return numArr.reverse();
        }
        return numArr;
    }

    private static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

}