import { AppFunction } from '../../../constants';
import type { WorkSheet, TwoNumsAddAlgebraQuestion, TwoNumsAddAlgebraQuestionGeneratorConfig } from '../TwoNumsAddAlgebraQuestionConstants';
import type { TwoNumsAddAlgebraBlockIndex } from '../TwoNumsAddAlgebraQuestionConstants';
import { shuffleArray, getArrRandomIndex, sortNumberArray } from '../../common/utils/array-utils';
import { parseRange } from '../../../utils/number-ranage-parser-utils';
import { requiresRemainderCheckMap, calculate, getRandomInt } from '../../common/utils/math-utils';
import { MathOperators } from '../../../constants';


export class SimpleMathQuestionUtils {

    static generateTwoNumbersQuestions(twoNumsAddAlgebraQuestionGeneratorConfig: TwoNumsAddAlgebraQuestionGeneratorConfig): WorkSheet[] {

        console.log('twoNumsAddAlgebraQuestionGeneratorConfig', twoNumsAddAlgebraQuestionGeneratorConfig);

        let num1Arr: number[] = sortNumberArray(parseRange(
            twoNumsAddAlgebraQuestionGeneratorConfig.firstNumRange, twoNumsAddAlgebraQuestionGeneratorConfig.firstNumReverse));
        
        let num2Arr: number[] = sortNumberArray(parseRange(
            twoNumsAddAlgebraQuestionGeneratorConfig.secondNumRange, twoNumsAddAlgebraQuestionGeneratorConfig.secondNumReverse));
       

        let worksheetData = this.generateTwoNumbersQuestionsWithParamAndNumberOfQuestions(
            num1Arr,
            num2Arr,
            twoNumsAddAlgebraQuestionGeneratorConfig.resultMin,
            twoNumsAddAlgebraQuestionGeneratorConfig.resultMax,
            twoNumsAddAlgebraQuestionGeneratorConfig.questionOperator,
            twoNumsAddAlgebraQuestionGeneratorConfig.allowNegative,
            twoNumsAddAlgebraQuestionGeneratorConfig.allowRemainder,
            twoNumsAddAlgebraQuestionGeneratorConfig.randomOrder,
            twoNumsAddAlgebraQuestionGeneratorConfig.numberOfQuestions,
        );

        console.log('generateTwoNumbersQuestions worksheetData: ', worksheetData);

        return worksheetData;
    }
    
    private static generateTwoNumbersQuestionsWithParamAndNumberOfQuestions(
        sortedNum1Arr: number[], sortedNum2Arr: number[],
        resultMin: number, resultMax: number,
        operators: string[],
        allowNegative: boolean, allowRemainder: boolean, randomOrder: boolean, numberOfQuestions: number): WorkSheet[] {

        let numberOfQuestionsForEachType = 0;
        numberOfQuestionsForEachType = (operators && operators.length > 0) ? (numberOfQuestions / operators.length) : 0;

        let questionArr: TwoNumsAddAlgebraQuestion[] = [];

        let maxTry = 500; /* maximum try to generate a question */

        for (const operator of operators) {
            let remainQuestionToGen = numberOfQuestions - questionArr.length;
            let numOfQuestionToGen = (remainQuestionToGen < numberOfQuestionsForEachType) ? remainQuestionToGen : numberOfQuestionsForEachType;

            let num1Arr = sortedNum1Arr;
            let num2Arr = sortedNum2Arr;
            if(operator == MathOperators.DIVIDE) {
                num2Arr = parseRange('1-99', false);
            }

            let twoNumberQuestionsByType: TwoNumsAddAlgebraQuestion[] = this.generateTwoNumbersQuestionsByType(
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
        allowNegative: boolean, allowRemainder: boolean, numberOfQuestions: number, maxTry: number): TwoNumsAddAlgebraQuestion[] {

        
        let questionArr: TwoNumsAddAlgebraQuestion[] = [];
        let tryCount = 0;

        // pre-filter values that out of range for operation
        let filteredNum1Arr = this.prefilterNum1Arr(sortedNum1Arr, resultMin, resultMax, operator);
        let filteredNum2Arr = this.prefilterNum2Arr(sortedNum2Arr, resultMin, resultMax, operator);
        
        while(questionArr.length < numberOfQuestions && tryCount < maxTry) {
            // console.log('generateTwoNumbersQuestionsByType questionArr.length: ', questionArr.length, ' numberOfQuestions: ', numberOfQuestions);
            let twoNumbersQuestion: TwoNumsAddAlgebraQuestion = this.generateTwoNumbersQuestion(filteredNum1Arr, filteredNum2Arr, resultMin, resultMax, operator, allowNegative, allowRemainder);
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
        allowNegative: boolean, allowRemainder: boolean): TwoNumsAddAlgebraQuestion {

        let maxTry = 100;
        let num1 = num1Arr[getArrRandomIndex(num1Arr)];
        // console.log('generateTwoNumbersQuestion num1: ', num1);

        let num2 = this.getSecondNum(num2Arr, num1, resultMin, resultMax, operator, allowNegative, allowRemainder, maxTry);
        // console.log('generateTwoNumbersQuestion num2: ', num2);
        
        let answer = calculate(operator, [num1, num2]);

        // calculate blockNum and blockDigit
        let blockNumArr = [0, 1, 2];
        // if(num1.toString().length > 1) {
        //     blockNumArr.push(0);
        // }
        // if(num2.toString().length > 1) {
        //     blockNumArr.push(1);
        // }
        // if(answer.toString().length > 1) {
        //     blockNumArr.push(2);
        // }
        let blockNum = blockNumArr.length == 0 ? -1 : blockNumArr[getArrRandomIndex(blockNumArr)];

        let blockDigitArr: number[] = [];
        if (blockNum == 0) {
            blockDigitArr = Array.from(Array(num1.toString().length).keys())
        }
        if (blockNum == 1) {
            blockDigitArr = Array.from(Array(num2.toString().length).keys())
        }
        if (blockNum == 2) {
            blockDigitArr = Array.from(Array(answer.toString().length).keys())
        }

        let blockDigit = blockDigitArr.length == 0 ? -1 : blockDigitArr[getArrRandomIndex(blockDigitArr)];

        let blockIndex1 = this.createTwoNumsAddAlgebraBlockIndex(blockNum, blockDigit);
        let blockIndex2 = this.createTwoNumsAddAlgebraBlockIndex(-1, -1);
        
        return this.createTwoNumbersQuestionType(num1, num2, operator, answer, blockIndex1, blockIndex2);
    }

    private static createTwoNumsAddAlgebraBlockIndex(blockNum: number, blockDigit: number) {
        return <TwoNumsAddAlgebraBlockIndex> {
            blockNum: blockNum,
            blockDigit: blockDigit
        }
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

    private static isValidQuestion(twoNumbersQuestion: TwoNumsAddAlgebraQuestion, 
        resultMin: number, resultMax: number): boolean {
            return twoNumbersQuestion && twoNumbersQuestion.answer >= resultMin && twoNumbersQuestion.answer <= resultMax;
    }

    private static createTwoNumbersQuestionType(num1: number, num2: number, operator: string, answer: number, 
        blockIndex1: TwoNumsAddAlgebraBlockIndex, blockIndex2: TwoNumsAddAlgebraBlockIndex): TwoNumsAddAlgebraQuestion {
        return <TwoNumsAddAlgebraQuestion>{
            questionType: AppFunction.TWO_NUMBERS.id,
            num1: num1,
            num2: num2,
            operator: operator,
            answer: answer,
            blockIndex1: blockIndex1,
            blockIndex2: blockIndex2,
        }
    }


}