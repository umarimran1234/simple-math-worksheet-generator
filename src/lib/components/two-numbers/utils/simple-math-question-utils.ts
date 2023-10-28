import { AppFunction } from '../../../constants';
import type { WorkSheet, TwoNumbersQuestion, TwoNumbersQuestionGeneratorConfig } from '../TwoNumbersQuestionConstants';
import { shuffleArray } from '../../common/utils/array-utils';
import { parseRange } from '../../../utils/number-ranage-parser-utils';
import { requiresRemainderCheckMap, calculate } from '../../common/utils/math-utils';


export class SimpleMathQuestionUtils {

    static generateTwoNumbersQuestions(twoNumbersQuestionGeneratorConfig: TwoNumbersQuestionGeneratorConfig): WorkSheet[] {

        console.log('twoNumbersQuestionGeneratorConfig', twoNumbersQuestionGeneratorConfig);

        let num1Arr: number[] = parseRange(
            twoNumbersQuestionGeneratorConfig.firstNumRange, twoNumbersQuestionGeneratorConfig.firstNumReverse);
        
        let num2Arr: number[] = parseRange(
            twoNumbersQuestionGeneratorConfig.secondNumRange, twoNumbersQuestionGeneratorConfig.secondNumReverse);

        let worksheetData = this.generateTwoNumbersQuestionsWithParam(
            num1Arr,
            num2Arr,
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
        num1Arr: number[], num2Arr: number[],
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, allowRemainder: boolean, randomOrder: boolean): WorkSheet[] {

        let questionArr: TwoNumbersQuestion[] = [];

        for (const operator of operators) {
            for (const num1 of num1Arr) {
                for (const num2 of num2Arr) {
                    let answer = calculate(operator, [num1, num2]);
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
            shuffleArray(questionArr);
        }

        // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
        return [<WorkSheet>{ questions: questionArr }];
    }

    private static createTwoNumbersQuestionType(num1: number, num2: number, operator: string, answer: number): TwoNumbersQuestion {
        return <TwoNumbersQuestion>{
            questionType: AppFunction.TWO_NUMBERS.id,
            num1: num1,
            num2: num2,
            operator: operator,
            answer: answer
        }
    }


}