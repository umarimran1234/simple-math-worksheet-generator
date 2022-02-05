import { isMinusToken } from "typescript";

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

    static generateTwoNumbersQuestionsWorksheetsJson(range: number, descOrder: boolean, questionsPerPage: number): WorkSheetType[] {

        let questionsArr: TwoNumbersQuestionType[] = this.generateTwoNumbersMinusQuestions(range, descOrder);

        return [...Array(Math.ceil(questionsArr.length / questionsPerPage))].map(_ => <WorkSheetType>{ 
            size: "A4", questions: questionsArr.splice(0, questionsPerPage)
        });
    }

    private static generateNumArr(range: number, reverse: boolean): number[] {
        let numArr: number[] = [...Array(range).keys()].map(i => i + 1);
        if(reverse) {
            return numArr.reverse();
        }
        return numArr;
    }

    static generateTwoNumbersMinusQuestions(range: number, reverse: boolean): TwoNumbersQuestionType[] {

        let questionArr = [];

        let numArr = this.generateNumArr(range, reverse);
        
        numArr.map(num1 => {
            let num2Arr = this.generateNumArr(num1, false);
            num2Arr.forEach(num2 => {
                questionArr.push({ questionType: "twoNumbers", num1: num1, num2: num2, operator: "&minus"});
            })
        });

        return questionArr;
    }
}