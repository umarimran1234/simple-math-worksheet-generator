import { AppFunction, MathOperators } from "../../../constants";

import { parseRange } from "$lib/utils/number-ranage-parser-utils";
import { shuffleArray } from "$lib/components/common/utils/array-utils";

import { FunAlgebraQuestionType, type FunAlgebraQuestion, type WorkSheet } from "../FunAlgebraConstants";
import { type FunAlgebraQuestionGeneratorConfig } from "../FunAlgebraConstants";

export const generateFunAlgebraWorksheet = (
    funAlgebraQuestionGeneratorConfig: FunAlgebraQuestionGeneratorConfig
) => {

    console.log('funAlgebraQuestionGeneratorConfig', funAlgebraQuestionGeneratorConfig);

    let ratioBToA: number[] = parseRange(funAlgebraQuestionGeneratorConfig.ratioBToA, false);
    let ratioCToB: number[] = parseRange(funAlgebraQuestionGeneratorConfig.ratioCToB, false);   

    let worksheetData = generateFunAlgebraWorksheetWithParams(
        funAlgebraQuestionGeneratorConfig.numA, 
        ratioBToA, ratioCToB, 
        funAlgebraQuestionGeneratorConfig.resultMax, 
        funAlgebraQuestionGeneratorConfig.randomOrder, 
        funAlgebraQuestionGeneratorConfig.questionTypes);
    
    console.log('generateFunAlgebraWorksheet worksheetData: ', worksheetData);
    return worksheetData;    
}

const generateFunAlgebraWorksheetWithParams = (
    numA: number, ratioBToA: number[], ratioCToB: number[], 
    resultMax: number, randomOrder: boolean,
    questionTypes: string[]
    ): WorkSheet[] => {

    let questionArr: FunAlgebraQuestion[] = [];
    for (const questionType of questionTypes) {
        if(FunAlgebraQuestionType.BASIC_LVL_1 === questionType) {            
            questionArr = questionArr.concat(generateBasicLvl1TypeQuestion(numA, ratioBToA, ratioCToB, resultMax));
        }
        /* add other question types */
    }

    if(randomOrder) {
        shuffleArray(questionArr);
    }
    
    return [<WorkSheet>{ questions: questionArr }];
}

const generateBasicLvl1TypeQuestion = (
    numA: number, ratioBToA: number[], ratioCToB: number[],
    resultMax: number
): FunAlgebraQuestion[] => {
    console.log('generateBasicLvl1TypeQuestion');

    let questionArr: FunAlgebraQuestion[] = [];
    for(const rb of ratioBToA) {        
        for(const rc of ratioCToB) {
            let numB = rb;
            let numC = rc * numB;

            if(numC <= resultMax) {
                let basicLvl1Question = <FunAlgebraQuestion> {
                    questionType: FunAlgebraQuestionType.BASIC_LVL_1,
                    numA: numA,
                    ratioBToA: rb,
                    numB: numB,
                    ratioCToB: rc,
                    numC: numC
                }
                questionArr.push(basicLvl1Question);
            }
        }
    }
    console.log('generateBasicLvl1TypeQuestion questionArr', questionArr);
    return questionArr;
}