<script lang="ts">
    import PictureAlgebraWithOperatorQuestionRow from "./PictureAlgebraWithOperatorQuestionRow.svelte";
    import PictureAlgebraWithOperatorAnswerRow from "./PictureAlgebraWithOperatorAnswerRow.svelte";
    

    import { getRandomCategory, getRandomIndexByCategory } from "$lib/components/common/utils/image-utils";

    import { MathOperators } from "$lib/constants";
    import { calculate } from "$lib/components/common/utils/math-utils";

    /**
     * a + b =
     * b + c =
     * a + c =
     * 
     * ask a, b, c
     */

    export let questionNo:number = 1;

    export let numA: number = 1;
    export let numB: number = 2;
    export let numC: number = 6;

    export let numAShowAnser: boolean = false;
    export let numBShowAnser: boolean = false;
    export let numCShowAnser: boolean = false;
    
    let sumAB = calculate(MathOperators.PLUS, [numA, numB]);
    let sumBC = calculate(MathOperators.PLUS, [numB, numC]);
    let sumAC = calculate(MathOperators.PLUS, [numA, numC]);


    let imgCategory = getRandomCategory();
    
    let numAImgIndex = getRandomIndexByCategory(imgCategory);
    let numBImgIndex = getRandomIndexByCategory(imgCategory);
    let numCImgIndex = getRandomIndexByCategory(imgCategory);

    while(numBImgIndex === numAImgIndex) {        
        numBImgIndex = getRandomIndexByCategory(imgCategory);
    }


    while (numCImgIndex === numAImgIndex || numCImgIndex === numBImgIndex) {
        numCImgIndex = getRandomIndexByCategory(imgCategory);
    }

    // console.log('imgCategory =', imgCategory);
    // console.log('numAImgIndex = [', numAImgIndex , ']');
    // console.log('numBImgIndex = [', numBImgIndex , ']');
    // console.log('numCImgIndex = [', numCImgIndex , ']');

    let width: string = "85mm";
    let height: string = "100mm";
    let margin: string = "3mm";
    let padding: string = "2mm";
    let fontsize: string = "30px";
</script>

<div class="algebraFunBasicLevel1Question" style="--height:{height};--width:{width};--margin:{margin};--padding:{padding};--fontsize:{fontsize}">

    <div class="questionNo">{questionNo}.</div>

    <PictureAlgebraWithOperatorQuestionRow
        imgCategory = {imgCategory}
        num1 = {numA}
        num1ImgIndex = {numAImgIndex}
        operator = {MathOperators.PLUS}
        num2 = {numB}
        num2ImgIndex = {numBImgIndex}
        showAnswer = {true}
        answer = {sumAB}
        />

    <PictureAlgebraWithOperatorQuestionRow
        imgCategory = {imgCategory}
        num1 = {numB}
        num1ImgIndex = {numBImgIndex}
        operator = {MathOperators.PLUS}
        num2 = {numC}
        num2ImgIndex = {numCImgIndex}
        showAnswer = {true}
        answer = {sumBC}
        />

    <PictureAlgebraWithOperatorQuestionRow 
        imgCategory = {imgCategory}
        num1 = {numA}
        num1ImgIndex = {numAImgIndex}
        operator = {MathOperators.PLUS}
        num2 = {numC}
        num2ImgIndex = {numCImgIndex}
        showAnswer = {true}
        answer = {sumAC}
        />

    <PictureAlgebraWithOperatorAnswerRow
         imgCategory = {imgCategory}
         num1 = {numA}
         num1ImgIndex = {numAImgIndex}
         num1ShowAnswer = {numAShowAnser}
         num2 = {numB}
         num2ImgIndex = {numBImgIndex}
         num2ShowAnswer = {numBShowAnser}
         num3 = {numC}
         num3ImgIndex = {numCImgIndex}
         num3ShowAnswer = {numCShowAnser}
        />
</div>


<style>
    .algebraFunBasicLevel1Question {
        height: var(--height);
        width: var(--width);
        margin: var(--margin);
        padding: var(--padding);
        font-size: var(--fontsize);
        color: black;
        border: 1px solid;
        border-radius: 5mm;
        background-color: ivory;
        font-family: Verdana, sans-serif;
    }

    .questionNo {
        font-size: 20px;
    }
</style>