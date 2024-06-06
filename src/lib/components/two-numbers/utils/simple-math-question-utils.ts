import { AppFunction } from '../../../constants';
import type { WorkSheet, TwoNumbersQuestion, TwoNumbersQuestionGeneratorConfig } from '../TwoNumbersQuestionConstants';
import { shuffleArray, getArrRandomIndex, sortNumberArray } from '../../common/utils/array-utils';
import { parseRange } from '../../../utils/number-ranage-parser-utils';
import { requiresRemainderCheckMap, calculate, getRandomInt } from '../../common/utils/math-utils';
import { MathOperators } from '../../../constants';


export class SimpleMathQuestionUtils {

    static generateTwoNumbersQuestions(twoNumbersQuestionGeneratorConfig: TwoNumbersQuestionGeneratorConfig): WorkSheet[] {

        console.log('twoNumbersQuestionGeneratorConfig', twoNumbersQuestionGeneratorConfig);

        let num1Arr: number[] = sortNumberArray(parseRange(
            twoNumbersQuestionGeneratorConfig.firstNumRange, twoNumbersQuestionGeneratorConfig.firstNumReverse));
        
        let num2Arr: number[] = sortNumberArray(parseRange(
            twoNumbersQuestionGeneratorConfig.secondNumRange, twoNumbersQuestionGeneratorConfig.secondNumReverse));

        // console.log('generateTwoNumbersQuestions num1Arr: ', num1Arr);
        // console.log('generateTwoNumbersQuestions num2Arr: ', num2Arr);

        // let worksheetData = this.generateTwoNumbersQuestionsWithParam(
        //     num1Arr,
        //     num2Arr,
        //     twoNumbersQuestionGeneratorConfig.resultMin,
        //     twoNumbersQuestionGeneratorConfig.resultMax,
        //     twoNumbersQuestionGeneratorConfig.questionOperator,
        //     twoNumbersQuestionGeneratorConfig.allowNegative,
        //     twoNumbersQuestionGeneratorConfig.allowRemainder,
        //     twoNumbersQuestionGeneratorConfig.randomOrder);

        let worksheetData = this.generateTwoNumbersQuestionsWithParamAndNumberOfQuestions(
            num1Arr,
            num2Arr,
            twoNumbersQuestionGeneratorConfig.resultMin,
            twoNumbersQuestionGeneratorConfig.resultMax,
            twoNumbersQuestionGeneratorConfig.questionOperator,
            twoNumbersQuestionGeneratorConfig.allowNegative,
            twoNumbersQuestionGeneratorConfig.allowRemainder,
            twoNumbersQuestionGeneratorConfig.randomOrder,
            twoNumbersQuestionGeneratorConfig.numberOfQuestions,
        );

        console.log('generateTwoNumbersQuestions worksheetData: ', worksheetData);

        return worksheetData;
    }

    // private static generateTwoNumbersQuestionsWithParam(
    //     num1Arr: number[], num2Arr: number[],
    //     resultMin: number, resultMax: number,
    //     operators: string[],
    //     allowNegative: boolean, allowRemainder: boolean, randomOrder: boolean): WorkSheet[] {

    //     let questionArr: TwoNumbersQuestion[] = [];

    //     for (const operator of operators) {
    //         for (const num1 of num1Arr) {
    //             for (const num2 of num2Arr) {
    //                 let answer = calculate(operator, [num1, num2]);
    //                 if (!(!allowNegative && answer < 0)
    //                     && !(resultMin && resultMin > answer)
    //                     && !(resultMax && resultMax < answer)
    //                     && !(!allowRemainder && requiresRemainderCheckMap(operator) && (num1 % num2 > 0))
    //                 ) {
    //                     questionArr.push(this.createTwoNumbersQuestionType(num1, num2, operator, answer));
    //                 }
    //             }
    //         }
    //     }

    //     if (randomOrder) {
    //         shuffleArray(questionArr);
    //     }

    //     // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
    //     return [<WorkSheet>{ questions: questionArr }];
    // }

    private static generateTwoNumbersQuestionsWithParamAndNumberOfQuestions(
        sortedNum1Arr: number[], sortedNum2Arr: number[],
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, allowRemainder: boolean, randomOrder: boolean, numberOfQuestions: number): WorkSheet[] {

        let numberOfQuestionsForEachType = 0;
        numberOfQuestionsForEachType = (operators && operators.length > 0) ? (numberOfQuestions / operators.length) : 0;

        let questionArr: TwoNumbersQuestion[] = [];

        let maxTry = 500; /* maximum try to generate a question */

        for (const operator of operators) {
            let remainQuestionToGen = numberOfQuestions - questionArr.length;
            let numOfQuestionToGen = (remainQuestionToGen < numberOfQuestionsForEachType) ? remainQuestionToGen : numberOfQuestionsForEachType;

            let num1Arr = sortedNum1Arr;
            let num2Arr = sortedNum2Arr;
            if(operator == MathOperators.DIVIDE) {
                num2Arr = parseRange('1-99', false);
            }

            let twoNumberQuestionsByType: TwoNumbersQuestion[] = this.generateTwoNumbersQuestionsByType(
                num1Arr, num2Arr, resultMin, resultMax, operator, allowNegative, allowRemainder, numOfQuestionToGen, maxTry);

            questionArr = questionArr.concat(twoNumberQuestionsByType);
        }

        if (randomOrder) {
            shuffleArray(questionArr);
        }

        // return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
        return [<WorkSheet>{ questions: questionArr }];
    }

    private static generateTwoNumbersQuestionsByType(sortedNum1Arr: number[], sortedNum2Arr: number[],
        resultMin: number, resultMax: number,
        operator: string,
        allowNegative: boolean, allowRemainder: boolean, numberOfQuestions: number, maxTry: number): TwoNumbersQuestion[] {

        
        let questionArr: TwoNumbersQuestion[] = [];
        let tryCount = 0;

        // pre-filter values that out of range for operation
        let filteredNum1Arr = this.prefilterNum1Arr(sortedNum1Arr, resultMin, resultMax, operator);
        let filteredNum2Arr = this.prefilterNum2Arr(sortedNum2Arr, resultMin, resultMax, operator);
        
        while(questionArr.length < numberOfQuestions && tryCount < maxTry) {
            // console.log('generateTwoNumbersQuestionsByType questionArr.length: ', questionArr.length, ' numberOfQuestions: ', numberOfQuestions);
            let twoNumbersQuestion: TwoNumbersQuestion = this.generateTwoNumbersQuestion(filteredNum1Arr, filteredNum2Arr, resultMin, resultMax, operator, allowNegative, allowRemainder);
            if(this.isValidQuestion(twoNumbersQuestion, resultMin, resultMax)) {
                questionArr.push(twoNumbersQuestion);
            } else {
                console.log('generateTwoNumbersQuestionsByType invalid twoNumbersQuestion, will not insert to the list: ', twoNumbersQuestion);
                tryCount += 1;
            }
        }

        console.log('generateTwoNumbersQuestionsByType count: ', questionArr.length, ' questionArr: ', questionArr);
        return questionArr;
    }

    private static prefilterNum1Arr(sortedNum1Arr: number[], resultMin: number, resultMax: number, operator: string) {
        return this.filterNumArrForAddOrMultiply(sortedNum1Arr, resultMin, resultMax, operator);
    }

    private static prefilterNum2Arr(sortedNum2Arr: number[], resultMin: number, resultMax: number, operator: string) {
        let filteredNum2Arr = this.filterNumArrForAddOrMultiply(sortedNum2Arr, resultMin, resultMax, operator);

        if(operator == MathOperators.DIVIDE && sortedNum2Arr[0] == 0) {
            filteredNum2Arr.shift;
        }

        return filteredNum2Arr;
    }

    private static filterNumArrForAddOrMultiply(sortedNumArr: number[], resultMin: number, resultMax: number, operator: string): number[] {
        let filteredNumArr : number[] = sortedNumArr;

        if(operator == MathOperators.TIMES && resultMin > 0 && sortedNumArr[0] == 0) {
            filteredNumArr.shift();
        }

        if(operator == MathOperators.PLUS || operator == MathOperators.TIMES) {
            filteredNumArr = filteredNumArr.filter((num) => num <= resultMax );
        }

        return filteredNumArr;
    }

    private static generateTwoNumbersQuestion(num1Arr: number[], num2Arr: number[],
        resultMin: number, resultMax: number,
        operator: string,
        allowNegative: boolean, allowRemainder: boolean): TwoNumbersQuestion {

        let maxTry = 100;
        let num1 = num1Arr[getArrRandomIndex(num1Arr)];
        // console.log('generateTwoNumbersQuestion num1: ', num1);

        let num2 = this.getSecondNum(num2Arr, num1, resultMin, resultMax, operator, allowNegative, allowRemainder, maxTry);
        // console.log('generateTwoNumbersQuestion num2: ', num2);
        
        let answer = calculate(operator, [num1, num2]);
        return this.createTwoNumbersQuestionType(num1, num2, operator, answer);
    }

    

    private static getSecondNum(num2Arr: number[], num1: number, 
        resultMin: number, resultMax: number, operator: 
        string, allowNegative: boolean, allowRemainder: boolean, maxTry: number): number {
        let tryCount = maxTry;

        let num2 = num2Arr[getArrRandomIndex(num2Arr)];
        while (tryCount > 0) {
            if(this.isValid2ndNum(num1, num2, resultMin, resultMax, operator, allowNegative, allowRemainder)) {
                // console.log('getSecondNum valid num2: ', num2);
                tryCount = 0;
            } else {
                console.log('getSecondNum invalid num2: ', num2);
                num2 = num2Arr[getArrRandomIndex(num2Arr)];
                tryCount -= 1;
            }
        }
        return num2;
    
    }

    private static isValid2ndNum(num1: number, num2: number, resultMin: number, resultMax: number, operator: string, allowNegative: boolean, allowRemainder: boolean) {
        
        // for division, must be num2 > 0 and num2 <= num1
        if(operator == MathOperators.DIVIDE && (num2 == 0 || num2 > num1)) return false; 

        let answer = calculate(operator, [num1, num2]);
        if (!(!allowNegative && answer < 0)
            && !(resultMin && resultMin > answer)
            && !(resultMax && resultMax < answer)
            && !(!allowRemainder && requiresRemainderCheckMap(operator) && (num1 % num2 > 0))) {
                return true;
        }

        return false;
    }

    private static isValidQuestion(twoNumbersQuestion: TwoNumbersQuestion, 
        resultMin: number, resultMax: number): boolean {
            return twoNumbersQuestion && twoNumbersQuestion.answer >= resultMin && twoNumbersQuestion.answer <= resultMax;
    }

    // private static generateTwoNumbersQuestion(num1Arr: number[], num2Arr: number[],
    //     resultMin: number, resultMax: number,
    //     operator: string,
    //     allowNegative: boolean, allowRemainder: boolean): TwoNumbersQuestion {

    //     let num1ArrMin = num1Arr[0];
    //     let num1ArrMax = num1Arr[num1Arr.length - 1];

    //     let num2ArrMin = num2Arr[0];
    //     let num2ArrMax = num2Arr[num2Arr.length - 1];

    //     // let num1 = num1Arr[getArrRandomIndex(num1Arr)];
    //     let num1 = getRandomInt(num1ArrMin, num1ArrMax > resultMax ? resultMax : num1ArrMax);
    //     let num2 = 0;

    //     if(operator == MathOperators.PLUS) {
    //          num2 = getRandomInt(num2ArrMin, Math.abs(num1 - resultMax));
    //     }

    //     if(operator == MathOperators.MINUS) {
    //         num2 = allowNegative ? getRandomInt(num2ArrMin, num2ArrMax) : getRandomInt(num2ArrMin, num1 - resultMin);
    //     }

    //     if(operator == MathOperators.TIMES) {
    //         num2 = getRandomInt(Math.floor(resultMin / num1) + 1, Math.floor(resultMax / num1));
    //     }

    //     if(operator == MathOperators.DIVIDE) {
    //         num2 = getRandomInt(Math.floor(num1 / resultMin), Math.floor(num1 / resultMax));
    //     }

    //     let answer = calculate(operator, [num1, num2]);
    //     return this.createTwoNumbersQuestionType(num1, num2, operator, answer);

    // }


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