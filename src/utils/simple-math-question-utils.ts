// import { isMinusToken } from "typescript";
import { QuestionTypes, MathOperators } from './app-constants';
import { parseRangeStr } from './number-range-parser';

export type TwoNumbersQuestionType = {
    questionType: string;
    num1: number;
    num2: number;
    operator: string;
}

export type WorkSheetType = {
    size: string;
    questions: TwoNumbersQuestionType[];
}

export class SimpleMathQuestionUtils {

    static generateTwoNumbersQuestions(
        firstNumRange: string, firstNumReverse: boolean, secondNumRange: string, secondNumReverse: boolean, operator: string,
        allowNegative: boolean, randomOrder: boolean, questionsPerPage: number, pageSize: string): WorkSheetType[] {

        let questionArr: TwoNumbersQuestionType[] = [];

        let num1Arr = this.parseRange(firstNumRange, firstNumReverse);
        let num2Arr = this.parseRange(secondNumRange, secondNumReverse);


        for (const num1 of num1Arr) {
            for (const num2 of num2Arr) {
                if(!(!allowNegative && this.calculateAnswer(num1, num2, operator) < 0)) {
                    questionArr.push(this.createTwoNumbersQuestionType(num1, num2, operator));
                }
            }
        }

        if (randomOrder) {
            this.shuffleArray(questionArr);
        }

        return this.generateWorksheets(questionArr, questionsPerPage, pageSize);
    }

    private static createTwoNumbersQuestionType(num1: number, num2: number, operator: string): TwoNumbersQuestionType {
        return <TwoNumbersQuestionType> {
                questionType: QuestionTypes.TWO_NUMBERS,
                num1: num1, 
                num2: num2, 
                operator: operator
        }
    }

    private static generateWorksheets(questionsArr: TwoNumbersQuestionType[], questionsPerPage: number, size: string): WorkSheetType[] {
        return [...Array(Math.ceil(questionsArr.length / questionsPerPage))].map(_ => <WorkSheetType>{
            size: size, questions: questionsArr.splice(0, questionsPerPage)
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

    // TODO: refactor this logic not to use if else conditions
    private static calculateAnswer(num1:number, num2:number, operator: string) {
        if(MathOperators.PLUS === operator) {
            return num1 + num2;
        } else if(MathOperators.MINUS === operator) {
            return num1 - num2;
        } else if(MathOperators.TIMES === operator) {
            return num1 * num2;
        } else if(MathOperators.DIVIDE === operator) {
            return num1 / num2;
        }
    }

}