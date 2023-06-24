export type LetterSequenceType = {
    letter: string;
    emptyBoxFlag: boolean;
}

export class LetterSequenceUtils {
    
    public static generateNumberRangeQuestions(start: number = 1, end: number = 100, numEmptyBoxes: number = 55, reverse: boolean = false, numberOfQuestions: number): Array<Array<LetterSequenceType>> {
        let questions = [];
        for(let i=0; i<numberOfQuestions; i++) {
            questions.push(this.generateNumberRangeQuestion(start, end, numEmptyBoxes, reverse));
        }
        return questions;
    }

    public static generateNumberRangeQuestion(start: number = 1, end: number = 100, numEmptyBoxes: number = 55, reverse: boolean = false): Array<LetterSequenceType> {
        let arr = this.randomEmptyBoxes(this.numberRange(start, end), numEmptyBoxes);
        if (reverse) {
            arr.reverse();
        }
        return arr;
    }

    public static generateCharacterRange(startChar: string, endChar: string, numEmptyBoxes: number = 10, reverse: boolean = false): Array<LetterSequenceType> {
        let arr = this.randomEmptyBoxes(this.characterRange(startChar, endChar), numEmptyBoxes);
        if (reverse) {
            arr.reverse();
        }
        return arr;
    }

    // public static numberRange(start: number = 1, end: number = 10): Array<number>{
    private static numberRange(start: number = 1, end: number = 10): Array<LetterSequenceType> {    
        return [...Array(end - start + 1).keys()].map(i => this.createLetterSequence(i + start, false));
    }

    // public static characterRange(startChar: string, endChar: string): Array<string> {
    private static characterRange(startChar: string, endChar: string): Array<LetterSequenceType> {    
        return [...Array(endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1).keys()]
            .map(i => this.createLetterSequence(String.fromCharCode(i + startChar.charCodeAt(0)), false));
    }

    private static createLetterSequence(letter, emptyBoxFlag) {
        return <LetterSequenceType>{ letter: letter, emptyBoxFlag: emptyBoxFlag }
    }

    public static randomEmptyBoxes(arr: LetterSequenceType[], numEmptyBoxes) {
        // console.log('randomEmptyBoxes(numEmptyBoxes), numEmptyBoxes=', numEmptyBoxes);
        let count = 0;

        // console.log('arr before random calc', arr);

        while (count < numEmptyBoxes) {
            let rnd = Math.floor(Math.random() * arr.length);
            // console.log('rnd', rnd);
            if (!arr[rnd].emptyBoxFlag) {
                arr[rnd].emptyBoxFlag = true;
                count += 1;
            }
        }

        // console.log('arr after random calc', arr);
        return arr;
    }
}