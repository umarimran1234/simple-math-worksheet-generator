import { AppFunction } from '../../../constants';
import type { WorkSheet, ThreeNumbersQuestion, ThreeNumbersQuestionGeneratorConfig } from '../ThreeNumbersQuestionConstants';
import { shuffleArray } from '../../common/utils/array-utils';
import { parseRange } from '../../../utils/number-ranage-parser-utils';
import { operationMap } from '../../common/utils/math-utils';


export class SimpleMathQuestionUtils {

    static generateThreeNumbersQuestions(threeNumbersQuestionGeneratorConfig: ThreeNumbersQuestionGeneratorConfig): WorkSheet[] {

        console.log('threeNumbersQuestionGeneratorConfig', threeNumbersQuestionGeneratorConfig);

        let num1Arr: number[] = parseRange(
            threeNumbersQuestionGeneratorConfig.firstNumRange, threeNumbersQuestionGeneratorConfig.firstNumReverse);
        
        let num2Arr: number[] = parseRange(
            threeNumbersQuestionGeneratorConfig.secondNumRange, threeNumbersQuestionGeneratorConfig.secondNumReverse);

        let num3Arr: number[] = parseRange(
            threeNumbersQuestionGeneratorConfig.thirdNumRange, threeNumbersQuestionGeneratorConfig.thirdNumReverse);

        let worksheetData = this.generateThreeNumbersQuestionsWithParam(
            num1Arr,
            num2Arr,
            num3Arr,
            threeNumbersQuestionGeneratorConfig.resultMin,
            threeNumbersQuestionGeneratorConfig.resultMax,
            threeNumbersQuestionGeneratorConfig.questionOperator,
            threeNumbersQuestionGeneratorConfig.allowNegative,            
            threeNumbersQuestionGeneratorConfig.randomOrder);

        console.log('generateThreeNumbersQuestions worksheetData: ', worksheetData);

        return worksheetData;
    }

    private static generateThreeNumbersQuestionsWithParam(
        num1Arr: number[], num2Arr: number[], num3Arr: number[],
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, randomOrder: boolean): WorkSheet[] {

        let questionArr: ThreeNumbersQuestion[] = [];

        for (const operator of operators) {
            for (const num1 of num1Arr) {
                for (const num2 of num2Arr) {
                    for (const num3 of num3Arr) {
                        let answer = (operationMap.get(operator))([num1, num2, num3]);
                        if (!(!allowNegative && answer < 0)
                            && !(resultMin && resultMin > answer)
                            && !(resultMax && resultMax < answer)
                            /* && !(!allowRemainder && requiresRemainderCheckMap(operator) && (num1 % num2 > 0) */
                            ) {
                            questionArr.push(this.createThreeNumbersQuestionType(num1, num2, num3, operator, answer));
                        }
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

    private static createThreeNumbersQuestionType(num1: number, num2: number, num3: number, operator: string, answer: number): ThreeNumbersQuestion {
        return <ThreeNumbersQuestion>{
            questionType: AppFunction.THREE_NUMBERS.id,
            num1: num1,
            num2: num2,
            num3: num3,
            operator: operator,
            answer: answer
        }
    }


}