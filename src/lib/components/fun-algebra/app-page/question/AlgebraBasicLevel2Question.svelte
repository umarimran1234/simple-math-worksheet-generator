<script lang="ts">
    import PictureAlgebraWithOperatorQuestionRow from "./PictureAlgebraWithOperatorQuestionRow.svelte";
    import PictureAlgebraWithOperatorAnswerRow from "./PictureAlgebraWithOperatorAnswerRow.svelte";

    import { getRandomCategory, getRandomIndexByCategory } from "$lib/components/common/utils/image-utils";
	import { MathOperators } from "$lib/constants";

    /**
     * 1st number (a): for a + a
     * 2nd number (b): if b > a, then display b - a, else display a - b
     * 3rd number (c): if c > b, then display c - b, else display b - c
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

    <!-- a + a -->
    <PictureAlgebraWithOperatorQuestionRow
        imgCategory = {imgCategory}
        num1={numA}
        num1ImgIndex={numAImgIndex}
        operator={MathOperators.PLUS}
        num2={numA}
        num2ImgIndex={numAImgIndex}
        showAnswer={true}
        answer={numA + numA}
        />

    <!-- show b-a / a-b -->
    {#if numB > numA }
        <PictureAlgebraWithOperatorQuestionRow
            imgCategory = {imgCategory}
            num1={numB}
            num1ImgIndex={numBImgIndex}
            operator={MathOperators.MINUS}
            num2={numA}
            num2ImgIndex={numAImgIndex}
            showAnswer={true}
            answer={numB - numA}
        />
    {:else}
        <PictureAlgebraWithOperatorQuestionRow
            imgCategory = {imgCategory}
            num1={numA}
            num1ImgIndex={numAImgIndex}
            operator={MathOperators.MINUS}
            num2={numB}
            num2ImgIndex={numBImgIndex}
            showAnswer={true}
            answer={numA - numB}
        />
    {/if}

    <!-- show c-b / b-c -->
    {#if numC > numB }
        <PictureAlgebraWithOperatorQuestionRow
            imgCategory = {imgCategory}
            num1={numC}
            num1ImgIndex={numCImgIndex}
            operator={MathOperators.MINUS}
            num2={numB}
            num2ImgIndex={numBImgIndex}
            showAnswer={true}
            answer={numC - numB}
        />
    {:else}
        <PictureAlgebraWithOperatorQuestionRow
            imgCategory = {imgCategory}
            num1={numB}
            num1ImgIndex={numBImgIndex}
            operator={MathOperators.MINUS}
            num2={numC}
            num2ImgIndex={numCImgIndex}
            showAnswer={true}
            answer={numB - numC}
        />
    {/if}

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