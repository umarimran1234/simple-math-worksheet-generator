<script lang="ts">
    
    import { getImageByCategory } from "$lib/components/common/utils/image-utils";
    
    export let imgCategory: string = 'fruits';

    export let leftNum: number = 1;        
    export let leftImgIndex = 1;

    export let rightNum: number = 1;    
    export let rightImgIndex = 2;

    export let showLeftBox: boolean = false;
    export let showRightBox: boolean = false;

    export let leftBoxAnswer: number = 1;
    export let showLeftBoxAnswer = false;

    export let rightBoxAnswer: number = 1;
    export let showRightBoxAnswer = false;

    export let numberBoxHeight: string = '14mm';
    export let numberBoxWidth: string = '14mm';
    export let numberBoxMargin: string = '5px';
</script>

<div class="pictureAlgebraRowContainer">    

    {#if showLeftBox}
        <div class="numberBox" style="--height:{numberBoxHeight};--width:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
                {showLeftBoxAnswer ? leftBoxAnswer : ''}
        </div>
    {/if}

    <div class="pictureAlgebraLeftSection">
        {#each Array(leftNum) as _, index (index)}            
            <img src={ getImageByCategory(imgCategory, leftImgIndex) } alt={getImageByCategory(imgCategory, leftImgIndex)} class={imgCategory} />
        {/each}
    </div>

    <div class="operator">=</div>

    {#if showRightBox}
        <div class="numberBox" style="--numberBoxHeight:{numberBoxHeight};--numberBoxWidth:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
                {showRightBoxAnswer ? rightBoxAnswer : ''}
        </div>
    {/if}

    <div class="pictureAlgebraRightSection">
        {#each Array(rightNum) as _, index (index)}            
            <img src={ getImageByCategory(imgCategory, rightImgIndex) } alt={ getImageByCategory(imgCategory, rightImgIndex) } class={imgCategory} />
        {/each}
    </div>
</div>

<style>
    .pictureAlgebraRowContainer {
        display: flex;		
		flex-flow: row wrap;
        align-items: center;
        height: 30mm
    }

    .pictureAlgebraLeftSection {
        display: flex;		
		flex-flow: row wrap;
        width: 15mm;
    }

    .pictureAlgebraRightSection {
        display: flex;		
		flex-flow: row wrap;
        margin-left: auto;
    }

    .operator {
        padding: 0;
        margin: 2mm;
        display: flex;
        align-items: center;
        
    }

    .numberBox {
		width: var(--numberBoxWidth);
		height: var(--numberBoxHeight);
		margin: var(--numberBoxMargin);
		padding: 0;
		border: 1px solid;
		border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
	}

    img.fruits {
        height: 11mm;
    }

    img.mcdonalds {
        height: 11mm;
    }
</style>