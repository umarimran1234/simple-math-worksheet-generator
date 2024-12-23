import { AppFunction, MathOperators } from "../../../constants";

import { parseRange } from "$lib/utils/number-ranage-parser-utils";
import { shuffleArray } from "$lib/components/common/utils/array-utils";

import { FunAlgebraQuestionType, type FunAlgebraQuestion, type WorkSheet } from "../FunAlgebraConstants";
import { type FunAlgebraBasicLvl1Question, type FunAlgebraBasicLvl1QuestionGeneratorConfig } from "../FunAlgebraConstants";
import { type FunAlgebraBasicLvl2Question, type FunAlgebraBasicLvl2QuestionGeneratorConfig } from "../FunAlgebraConstants";
import { type FunAlgebraBasicLvl3Question, type FunAlgebraBasicLvl3QuestionGeneratorConfig } from "../FunAlgebraConstants";


export const generateAllFunAlgebraWorksheet = (
    questionTypestToGenerateConfigStore: string[],
    randomQuestionConfig: boolean,
    funAlgebraBasicLvl1QuestionGeneratorConfig: FunAlgebraBasicLvl1QuestionGeneratorConfig,
    funAlgebraBasicLvl2QuestionGeneratorConfig: FunAlgebraBasicLvl2QuestionGeneratorConfig,
    funAlgebraBasicLvl3QuestionGeneratorConfig: FunAlgebraBasicLvl3QuestionGeneratorConfig
) => {

    console.log('questionTypestToGenerateConfigStore', questionTypestToGenerateConfigStore);
    console.log('funAlgebraBasicLvl1QuestionGeneratorConfig', funAlgebraBasicLvl1QuestionGeneratorConfig);
    console.log('funAlgebraBasicLvl2QuestionGeneratorConfig', funAlgebraBasicLvl2QuestionGeneratorConfig);
    console.log('funAlgebraBasicLvl3QuestionGeneratorConfig', funAlgebraBasicLvl3QuestionGeneratorConfig);

    let questionArr: FunAlgebraQuestion[] = [];
    for (const questionType of questionTypestToGenerateConfigStore) {
        if (FunAlgebraQuestionType.BASIC_LVL_1 === questionType) {
            let ratioBToA: number[] = parseRange(funAlgebraBasicLvl1QuestionGeneratorConfig.ratioBToA, false);
            let ratioCToB: number[] = parseRange(funAlgebraBasicLvl1QuestionGeneratorConfig.ratioCToB, false);
            questionArr = questionArr.concat(generateBasicLvl1TypeQuestion(
                funAlgebraBasicLvl1QuestionGeneratorConfig.numA, 
                ratioBToA, ratioCToB, 
                funAlgebraBasicLvl1QuestionGeneratorConfig.resultMax));
        }

        if (FunAlgebraQuestionType.BASIC_LVL_2 === questionType) {
            questionArr = questionArr.concat(generateBasicLvl2TypeQuestion(
                parseRange(funAlgebraBasicLvl2QuestionGeneratorConfig.numARange, false),
                parseRange(funAlgebraBasicLvl2QuestionGeneratorConfig.numBRange, false),
                parseRange(funAlgebraBasicLvl2QuestionGeneratorConfig.numCRange, false)
            ));
        }

        if (FunAlgebraQuestionType.BASIC_LVL_3 === questionType) {
            questionArr = questionArr.concat(generateBasicLvl3TypeQuestion(
                parseRange(funAlgebraBasicLvl3QuestionGeneratorConfig.numARange, false),
                parseRange(funAlgebraBasicLvl3QuestionGeneratorConfig.numBRange, false),
                parseRange(funAlgebraBasicLvl3QuestionGeneratorConfig.numCRange, false)
            ));
        }
    }

    if (randomQuestionConfig) {
        shuffleArray(questionArr);
    }

    let worksheetData = [<WorkSheet>{ questions: questionArr }];

    console.log('generateFunAlgebraWorksheet worksheetData: ', worksheetData);
    return worksheetData;
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
                let basicLvl1Question = <FunAlgebraBasicLvl1Question> {
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
    // console.log('generateBasicLvl1TypeQuestion questionArr', questionArr);
    return questionArr;
}

const generateBasicLvl2TypeQuestion = (
    numARange: number[], numBRange: number[], numCRange: number[]
): FunAlgebraQuestion[] => {
    console.log('generateBasicLvl2TypeQuestion');

    let questionArr: FunAlgebraQuestion[] = [];
    for (const numA of numARange) {
        for (const numB of numBRange) {
            for (const numC of numCRange) {
                let basicLvl2Question = <FunAlgebraBasicLvl2Question> {
                    questionType: FunAlgebraQuestionType.BASIC_LVL_2,
                    numA: numA,
                    numB: numB,
                    numC: numC
                }
                questionArr.push(basicLvl2Question);
            }
        }
    }   

    // console.log('generateBasicLvl2TypeQuestion questionArr', questionArr);
    return questionArr;
}

const generateBasicLvl3TypeQuestion = (
    numARange: number[], numBRange: number[], numCRange: number[]
): FunAlgebraQuestion[] => {
    console.log('generateBasicLvl3TypeQuestion');

    let questionArr: FunAlgebraQuestion[] = [];
    for (const numA of numARange) {
        for (const numB of numBRange) {
            for (const numC of numCRange) {
                let basicLvl3Question = <FunAlgebraBasicLvl3Question>{
                    questionType: FunAlgebraQuestionType.BASIC_LVL_3,
                    numA: numA,
                    numB: numB,
                    numC: numC
                }
                questionArr.push(basicLvl3Question);
            }
        }
    }

    // console.log('generateBasicLvl3TypeQuestion questionArr', questionArr);
    return questionArr;
}