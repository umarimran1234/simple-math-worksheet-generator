import { 
    FlexDirectionOptions, 
    FlexWrapOptions, 
    FlexJustifyContentOptions
} from "../components/common/worksheet/WorksheetPageConstants";

import { MathOperators } from "./MathsConstants";

import { 
    TwoNumbersQuestionFormat, 
    TwoNumbersWorksheetSize, 
    type TwoNumbersQuestionWorksheetConfig, 
    type TwoNumbersQuestionGeneratorConfig 
} from "../components/two-numbers/TwoNumbersQuestionConstants";

import { 
    ThreeNumbersQuestionFormat, 
    ThreeNumbersWorksheetSize, 
    type ThreeNumbersQuestionWorksheetConfig, 
    type ThreeNumbersQuestionGeneratorConfig 
} from "../components/three-numbers/ThreeNumbersQuestionConstants";

import { 
    type FunMultiplicationQuestionGeneratorConfig,
    type FunMultiplicationQuestionWorksheetConfig,
    FunMultiplicationQuestionFormat, 
    FunMultiplicationWorksheetSize
} from "../components/fun-multiplications/FunMultiplicationConstants";

import {
    type FunAlgebraBasicLvl1QuestionGeneratorConfig,
    type FunAlgebraBasicLvl2QuestionGeneratorConfig,
    type FunAlgebraBasicLvl3QuestionGeneratorConfig,
    type FunAlgebraQuestionWorksheetConfig,
    FunAlgebraQuestionFormat,
    FunAlgebraWorksheetSize,
    FunAlgebraQuestionType
} from "../components/fun-algebra/FunAlgebraConstants";

export const LargeScreenMinWidth: number = 768;

export type AppFunctionType = {
    id: string,
    label: string,
    route: string
}

export const AppFunction = {
    TWO_NUMBERS : <AppFunctionType>{ 
        id: "twoNumbers", 
        label: "Two numbers",
        route: "/two-numbers"
    },
    THREE_NUMBERS : <AppFunctionType>{
        id: "threeNumbers", 
        label: "Three numbers",
        route: "/three-numbers"
    },
    FUN_MULTIPLICATION: <AppFunctionType>{ 
        id: "funMultiplication", 
        label: "Fun multiplication 1-10",
        route: "/fun-multiplications"
    },
    FUN_ALGEBRA: <AppFunctionType>{
        id: "funAlgebra",
        label: "Fun algebra",
        route: "/fun-algebra"
    }
} as const

export const AppFunctionSelectList: AppFunctionType[] = [
    AppFunction.TWO_NUMBERS,
    AppFunction.THREE_NUMBERS,
    AppFunction.FUN_MULTIPLICATION,
    AppFunction.FUN_ALGEBRA
];

export const getAppFunctionById = (appFunctionId: string): AppFunctionType => {
    // let func: AppFunctionType = AppFunctionSelectList.filter((item: AppFunctionType, index: number) => {
    //     item.id === appFunctionId
    // }).at(0);

    // if(!func) {
    //     func = AppFunction.TWO_NUMBERS;
    // }

    let func: AppFunctionType = undefined;
    AppFunctionSelectList.forEach((item) => {
        if(item.id === appFunctionId) {
            func = item;
        }
    })

    if(func === undefined) func = AppFunction.TWO_NUMBERS;

    console.log('getAppFunctionById func=[' + func.id + ']');

    return func;
}


export type AppPageTopBarFunction = {
    iconButtonName: string;
    fn: any
}

export const AppConstants = {

    DEFAULT_SELECTED_FUNCTION: AppFunction.TWO_NUMBERS.id,

    OPERATOR_OPTIONS: Object.values(MathOperators),

    DEFAULT_QUESTIONS_PER_PAGE: 20,

    DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG: <TwoNumbersQuestionGeneratorConfig>{
        firstNumRange: '0 - 1000',
        firstNumReverse: false,
        secondNumRange: '0 - 1000',
        secondNumReverse: false,
        resultMin: 0,
        resultMax: 2000,
        allowNegative: false,
        allowRemainder: false,
        randomOrder: true,
        questionOperator: [MathOperators.PLUS, MathOperators.MINUS],
        numberOfQuestions: 100,
    },

    TWO_NUMBERS_WORKSHEET_DEFAULT_CONFIG: {
        A4: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.COLUMN_METHOD,
                showFirstNumber: true,
                showSecondNumber: true,
                showOperator: true,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '50px',
                numberBoxWidth: '18mm',
                numberBoxHeight: '18mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4,
                questionsPerPage: 25
            },
            worksheetCointainerStyleConfig: {                
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <TwoNumbersQuestionWorksheetConfig>{
            questionConfig : {
                questionFormat: TwoNumbersQuestionFormat.HORIZONTAL_METHOD,
                showFirstNumber: true,
                showSecondNumber: true,
                showOperator: true,
                showAnswers: false
            },            
            horizonalMethodStyleConfig: {
                fontSize: '30px',
                numberBoxWidth: '15mm',
                numberBoxHeight: '15mm',
                numberBoxMargin: '10px 1px 5px 1px',
                operatorBoxMargin: '10px 1px 5px 1px',
                questionContainerMargin: '10px 50px 15px 50px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: TwoNumbersWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 18
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },

    DEFAULT_THREE_NUMBERS_QUESTION_GENERATOR_CONFIG: <ThreeNumbersQuestionGeneratorConfig>{
        firstNumRange: '2 - 15',
        firstNumReverse: true,
        secondNumRange: '1 - 10',
        secondNumReverse: true,
        thirdNumRange: '1 - 10',
        thirdNumReverse: true,
        resultMin: 0,
        resultMax: 20,
        allowNegative: false,
        allowRemainder: false,
        randomOrder: true,
        questionOperator: [MathOperators.PLUS, MathOperators.MINUS],
    },

    THREE_NUMBERS_WORKSHEET_DEFAULT_CONFIG: {
        A4: <ThreeNumbersQuestionWorksheetConfig>{
            questionConfig: {
                questionFormat: ThreeNumbersQuestionFormat.HORIZONTAL_METHOD,
                showAnswers: false
            },
            horizonalMethodStyleConfig: {
                fontSize: '25px',
                numberBoxWidth: '16mm',
                numberBoxHeight: '16mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '10px 30px 10px 30px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: ThreeNumbersWorksheetSize.A4,
                questionsPerPage: 20
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <ThreeNumbersQuestionWorksheetConfig>{
            questionConfig: {
                questionFormat: TwoNumbersQuestionFormat.HORIZONTAL_METHOD,
                showAnswers: false
            },
            horizonalMethodStyleConfig: {
                fontSize: '25px',
                numberBoxWidth: '16mm',
                numberBoxHeight: '16mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: ThreeNumbersWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },

    DEFAULT_FUN_MULTIPLICATION_QUESTION_GENERATOR_CONFIG: <FunMultiplicationQuestionGeneratorConfig>{
        firstNumRange: '1 - 10',
        firstNumReverse: false,
        secondNumRange: '1 - 10',
        secondNumReverse: false,
        resultMin: 1,
        resultMax: 100,
        allowNegative: false,
        randomOrder: false
    },

    FUN_MULTIPLICATION_WORKSHEET_DEFAULT_CONFIG: {
        A4: <FunMultiplicationQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                showAnswers: false,
                questionFormat: FunMultiplicationQuestionFormat.HORIZONTAL_METHOD,
                
            },
            horizonalMethodStyleConfig: {
                fontSize: '30px',
                numberBoxWidth: '12mm',
                numberBoxHeight: '12mm',
                numberBoxMargin: '0px 1px 0px 1px',
                operatorBoxMargin: '0px 1px 0px 1px',
                questionContainerMargin: '5px 5px 5px 5px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunMultiplicationWorksheetSize.A4,
                questionsPerPage: 10
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <FunMultiplicationQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                showAnswers: false,
                questionFormat: FunMultiplicationQuestionFormat.HORIZONTAL_METHOD,
            },
            horizonalMethodStyleConfig: {
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunMultiplicationWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },

    DEFAULT_FUN_ALGEBRA_QUESTION_TYPES_TO_GENERATE_CONFIG: [FunAlgebraQuestionType.BASIC_LVL_1],

    DEFAULT_FUN_ALGEBRA_BASIC_LVL_1_QUESTION_GENERATOR_CONFIG: <FunAlgebraBasicLvl1QuestionGeneratorConfig>{
        numA: 1,
        ratioBToA: '1-3', /* expected 1-3 for kid level */
        ratioCToB: '1-3', /* expected 1-3 for kid level */
        resultMax: 9,
        randomOrder: true,
        questionTypes: [FunAlgebraQuestionType.BASIC_LVL_1],

        firstNumRange: '1 - 10',
        firstNumReverse: false,
        secondNumRange: '1 - 10',
        secondNumReverse: false,
        resultMin: 1,
        allowNegative: false
    },

    DEFAULT_FUN_ALGEBRA_BASIC_LVL_2_QUESTION_GENERATOR_CONFIG: <FunAlgebraBasicLvl2QuestionGeneratorConfig>{        
        numARange: '1 - 5',
        numBRange: '1 - 5',
        numCRange: '1 - 5'
    },

    DEFAULT_FUN_ALGEBRA_BASIC_LVL_3_QUESTION_GENERATOR_CONFIG: <FunAlgebraBasicLvl3QuestionGeneratorConfig>{
        numARange: '1 - 5',
        numBRange: '1 - 5',
        numCRange: '1 - 5'
    },

    FUN_ALGEBRA_WORKSHEET_DEFAULT_CONFIG: {
        A4: <FunAlgebraQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                show1stAnswer: false,
                show2ndAnswer: false,
                show3rdAnswer: false,
                questionFormat: FunAlgebraQuestionFormat.HORIZONTAL_METHOD,

            },
            horizonalMethodStyleConfig: {
                fontSize: '30px',
                numberBoxWidth: '12mm',
                numberBoxHeight: '12mm',
                numberBoxMargin: '0px 1px 0px 1px',
                operatorBoxMargin: '0px 1px 0px 1px',
                questionContainerMargin: '5px 5px 5px 5px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunAlgebraWorksheetSize.A4,
                questionsPerPage: 4
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '276mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.CENTER,
                contentAlignContent: 'center'
            }
        },
        A4_LANDSCAPE: <FunAlgebraQuestionWorksheetConfig>{
            questionConfig: {
                showFirstNum: true,
                showSecondNum: false,
                show1stAnswer: false,
                show2ndAnswer: false,
                show3rdAnswer: false,
                questionFormat: FunAlgebraQuestionFormat.HORIZONTAL_METHOD,
            },
            horizonalMethodStyleConfig: {
                fontSize: '56px',
                numberBoxWidth: '19mm',
                numberBoxHeight: '19mm',
                numberBoxMargin: '20px 1px 5px 1px',
                operatorBoxMargin: '20px 1px 5px 1px',
                questionContainerMargin: '20px 90px 15px 90px',
            },
            columnMethodStyleConfig: {
                showQuestionId: false,
                questionIdFontSize: '3mm',
                questionIdWidth: '12mm',
                questionFontSize: '7mm',
                questionContainerMargin: '3mm',
                questionContainerPadding: '2mm',
                questionRowNumberWidth: '24mm'
            },
            worksheetConfig: {
                worksheetSize: FunAlgebraWorksheetSize.A4_LANDSCAPE,
                questionsPerPage: 12
            },
            worksheetCointainerStyleConfig: {
                contentContainerHeight: '200mm',
                pagePadding: '0mm',
                flexDirection: FlexDirectionOptions.ROW,
                flexWrap: FlexWrapOptions.WRAP,
                flexJustifyContent: FlexJustifyContentOptions.FLEX_START,
                contentAlignContent: 'center'
            }
        }
    },
} as const;