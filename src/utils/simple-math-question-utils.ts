// import { isMinusToken } from "typescript";
import { QuestionTypes, MathOperators } from './app-constants';

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

    static generateMinusTwoNumbersQuestions(range: number, reverse: boolean, questionsPerPage: number, size: string): WorkSheetType[] {
        let questionArr: TwoNumbersQuestionType[] = [];

        let numArr = this.generateNumArr(range, reverse);
        
        numArr.map(num1 => {
            let num2Arr = this.generateNumArr(num1, false);
            num2Arr.forEach(num2 => {
                questionArr.push(this.createTwoNumbersQuestionType(num1, num2, MathOperators.MINUS));
            })
        });

        return this.generateWorksheets(questionArr, questionsPerPage, size);
    }

    static generateTwoNumbersQuestions(firstNumRange: number, secondNumRange: number, operator: string, questionsPerPage: number, size: string): WorkSheetType[] {

        let questionArr: TwoNumbersQuestionType[] = [];

        for(let num1 = 1; num1 <= firstNumRange; num1++) {
            for(let num2 = 1; num2 <= secondNumRange; num2++) {
                questionArr.push(this.createTwoNumbersQuestionType(num1, num2, operator));
            }
        }

        return this.generateWorksheets(questionArr, questionsPerPage, size);
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
}