import { MathOperators } from "../../../constants";

export const addAll = (arr: number[]) => arr.reduce((prev, curr) => prev + curr);
export const minusAll = (arr: number[]) => arr.reduce((prev, curr) => prev - curr);
export const multiplyAll = (arr: number[]) => arr.reduce((prev, curr) => prev * curr);
export const divideAll = (arr: number[]) => arr.reduce((prev, curr) => prev / curr);

export const operationMap = new Map<string, Function>([
    [MathOperators.PLUS, addAll],
    [MathOperators.MINUS, minusAll],
    [MathOperators.TIMES, multiplyAll],
    [MathOperators.DIVIDE, divideAll],
]);

export const calculate = (operator: string, numArr: number[]): number => {
    return (operationMap.get(operator))(numArr);
}

export const calculateThreeNumbers = (num1: number, firstOperator: string, num2: number, secondOperator: string, num3: number): number => {
    let twoNumsResult = calculate(firstOperator, [num1, num2]);
    return calculate(secondOperator, [twoNumsResult, num3]);
}

export const requiresRemainderCheckMap = (operator) => MathOperators.DIVIDE === operator;

export const getRandomIndex = (seed: number): number => Math.floor(Math.random() * seed);

export const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;