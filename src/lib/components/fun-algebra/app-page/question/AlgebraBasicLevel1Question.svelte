<script lang="ts">
    import PictureAlgebraRow from "./PictureAlgebraRow.svelte";

    import { getRandomCategory, getRandomIndexByCategory } from "$lib/components/common/utils/image-utils";

    export let questionNo:number = 1;

    export let aNum: number = 1;
    
    export let ratioBToA: number = 2;
    export let bNum: number = 2;

    export let ratioCToB: number = 3;
    export let cNum: number = 6;

    export let showAnswer: boolean = false;
    

    let imgCategory = getRandomCategory();
    
    let aNumImgIndex = getRandomIndexByCategory(imgCategory);
    let bNumImgIndex = getRandomIndexByCategory(imgCategory);
    let cNumImgIndex = getRandomIndexByCategory(imgCategory);

    while(bNumImgIndex === aNumImgIndex) {        
        bNumImgIndex = getRandomIndexByCategory(imgCategory);
    }


    while (cNumImgIndex === aNumImgIndex || cNumImgIndex === bNumImgIndex) {
        cNumImgIndex = getRandomIndexByCategory(imgCategory);
    }

    // console.log('imgCategory =', imgCategory);
    // console.log('aNumImgIndex = [', aNumImgIndex , ']');
    // console.log('bNumImgIndex = [', bNumImgIndex , ']');
    // console.log('cNumImgIndex = [', cNumImgIndex , ']');

    let width: string = "85mm";
    let height: string = "100mm";
    let margin: string = "3mm";
    let padding: string = "2mm";
    let fontsize: string = "30px";
</script>

<div class="algebraFunBasicLevel1Question" style="--height:{height};--width:{width};--margin:{margin};--padding:{padding};--fontsize:{fontsize}">

    <div class="questionNo">{questionNo}.</div>

    <!-- show c = (m) b -->
    <PictureAlgebraRow
        imgCategory = {imgCategory}
        leftNum={1} leftImgIndex="{cNumImgIndex}" showLeftBox={false}
        rightNum={ratioCToB} rightImgIndex="{bNumImgIndex}" showRightBox={false}
        />
    <!-- show b = (n) a -->
    <PictureAlgebraRow 
        imgCategory = {imgCategory}
        leftNum={1} leftImgIndex="{bNumImgIndex}" showLeftBox={false}
        rightNum={ratioBToA} rightImgIndex="{aNumImgIndex}" showRightBox={false}
        />
    <!-- show c = (answer) a -->
    <PictureAlgebraRow 
        imgCategory = {imgCategory}
        leftNum={1} leftImgIndex="{cNumImgIndex}" showLeftBox={false}
        rightNum={aNum} rightImgIndex="{aNumImgIndex}" showRightBox={true}
        rightBoxAnswer={cNum}
        showRightBoxAnswer={showAnswer}
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